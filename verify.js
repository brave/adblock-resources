import { readResources, listCatalog } from './index.js'
import metadata from './metadata.json' with { type: "json" }

import assert from 'node:assert'
import crypto from 'crypto'
import fs, { globSync } from 'fs'
import test from 'node:test'
import { Engine, FilterFormat, FilterSet } from 'adblock-rs'

test('all JSON files are valid', t => {
    const patterns = ['*.json', 'dist/*.json', 'filter_lists/*.json']
    for (const pattern of patterns) {
        const files = globSync(pattern)
        for (const file of files) {
            try {
                JSON.parse(fs.readFileSync(file, 'utf8'))
            } catch (e) {
                assert.fail(`${file} is not valid JSON: ${e.message}`)
            }
        }
    }
})

const getIDFromBase64PublicKey = (key) => {
  const hash = crypto.createHash('sha256')
  const data = Buffer.from(key, 'base64')
  const digest = hash.update(data).digest('hex')
  const id = digest.toString().substring(0, 32)
  return id.replace(/[0-9a-f]/g, (c) => {
    return 'abcdefghijklmnop'.charAt('0123456789abcdef'.indexOf(c))
  })
}

test('resources are parsed OK by adblock-rust', t => {
    const resources = readResources()

    const filterSet = new FilterSet()
    const engine = new Engine(filterSet)

    resources.forEach(resource => {
        try {
            engine.addResource(resource)
        } catch(e) {
            console.error("Encountered an error when attempting to add this resource:", resource)
            throw e
        }
    })
})

const testLists = (lists) => {
    lists.forEach(list => {
        assert.ok(list.uuid !== undefined && typeof list.uuid === 'string')
        assert.ok(list.uuid.length === 36 || list.uuid.length === 37 || list.uuid === 'default', 'length mismatch for ' + list.uuid)
        assert.ok(list.title !== undefined && typeof list.title === 'string')
        assert.ok(list.desc !== undefined && typeof list.desc === 'string')
        assert.ok(list.langs !== undefined && Array.isArray(list.langs))
        list.langs.forEach(lang => assert.ok(typeof lang === 'string'))
        assert.ok(list.list_text_component !== undefined && typeof list.list_text_component === 'object')
        assert.ok(list.list_text_component.component_id !== undefined && typeof list.list_text_component.component_id === 'string')
        assert.ok(list.list_text_component.base64_public_key !== undefined && typeof list.list_text_component.base64_public_key === 'string')

        assert.ok(list.list_text_component.component_id === getIDFromBase64PublicKey(list.list_text_component.base64_public_key))

        assert.ok(list.sources !== undefined && Array.isArray(list.sources))
        for (const source of list.sources) {
            assert.ok(source.url !== undefined && typeof source.url === 'string')
            let supportedFormat = false
            for (const format in FilterFormat) {
                if (source.format === FilterFormat[format]) {
                    supportedFormat = true
                }
            }
            assert.ok(supportedFormat)
            assert.ok(source.support_url !== undefined && typeof source.support_url === 'string')
        }
    })
}

test('filter list catalog is correctly formatted', t => {
    testLists(listCatalog)
})

test('metadata.json matches resources/', t => {
    const resourceFiles = fs.readdirSync('resources')
    const metadataNames = metadata.map(entry => entry.resourcePath)

    // Every file in resources/ should have a metadata entry
    for (const file of resourceFiles) {
        assert.ok(metadataNames.includes(file), `File resources/${file} is missing from metadata.json`)
    }

    // Every metadata entry should have a corresponding file
    for (const name of metadataNames) {
        assert.ok(resourceFiles.includes(name), `metadata.json entry "${name}" has no corresponding file in resources/`)
    }
})

test('dist/resources.json is up to date', t => {
    const committed = JSON.parse(fs.readFileSync('dist/resources.json', 'utf8'))
    const generated = readResources()
    assert.deepStrictEqual(committed, generated, 'dist/resources.json is out of date - run "npm run build"')
})
