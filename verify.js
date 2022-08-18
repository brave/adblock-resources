const { readResources, defaultLists, regionalLists } = require('.')

const tap = require('tap')
const { Engine, FilterFormat, FilterSet } = require('adblock-rs')

tap.test('resources are parsed OK by adblock-rust', childTest => {
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
    childTest.end()
})

tap.test('default filter lists are correctly formatted', childTest => {
    defaultLists.forEach(list => {
        tap.ok(list.url !== undefined && typeof list.url === 'string')
        tap.ok(list.title !== undefined && typeof list.title === 'string')
        let supportedFormat = false
        for (const format in FilterFormat) {
            if (list.format === FilterFormat[format]) {
                supportedFormat = true
            }
        }
        tap.ok(supportedFormat)
        tap.ok(list.support_url !== undefined && typeof list.support_url === 'string')
    })
    childTest.end()
})

tap.test('regional filter lists are parsed OK by adblock-rust', childTest => {
    regionalLists.forEach(list => {
        tap.ok(list.uuid !== undefined && typeof list.uuid === 'string')
        tap.ok(list.url !== undefined && typeof list.url === 'string')
        tap.ok(list.title !== undefined && typeof list.title === 'string')
        let supportedFormat = false
        for (const format in FilterFormat) {
            if (list.format === FilterFormat[format]) {
                supportedFormat = true
            }
        }
        tap.ok(supportedFormat)
        tap.ok(list.langs !== undefined && Array.isArray(list.langs))
        list.langs.forEach(lang => tap.ok(typeof lang === 'string'))
        tap.ok(list.support_url !== undefined && typeof list.support_url === 'string')
        tap.ok(list.component_id !== undefined && typeof list.component_id === 'string')
        tap.ok(list.base64_public_key !== undefined && typeof list.base64_public_key === 'string')
        tap.ok(list.desc !== undefined && typeof list.desc === 'string')
    })
    childTest.end()
})
