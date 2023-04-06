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

const testLists = (lists) => {
    lists.forEach(list => {
        tap.ok(list.uuid !== undefined && typeof list.uuid === 'string')
        tap.ok(list.uuid.length === 36 || list.uuid.length === 37 || list.uuid === 'default', 'length mismatch for ' + list.uuid)
        tap.ok(list.title !== undefined && typeof list.title === 'string')
        tap.ok(list.desc !== undefined && typeof list.desc === 'string')
        tap.ok(list.langs !== undefined && Array.isArray(list.langs))
        list.langs.forEach(lang => tap.ok(typeof lang === 'string'))
        tap.ok(list.component_id !== undefined && typeof list.component_id === 'string')
        tap.ok(list.base64_public_key !== undefined && typeof list.base64_public_key === 'string')
        tap.ok(list.list_text_component !== undefined && typeof list.list_text_component === 'object')
        tap.ok(list.list_text_component.component_id !== undefined && typeof list.list_text_component.component_id === 'string')
        tap.ok(list.list_text_component.base64_public_key !== undefined && typeof list.list_text_component.base64_public_key === 'string')

        tap.ok(list.sources !== undefined && Array.isArray(list.sources))
        for (const source of list.sources) {
            tap.ok(source.url !== undefined && typeof source.url === 'string')
            let supportedFormat = false
            for (const format in FilterFormat) {
                if (source.format === FilterFormat[format]) {
                    supportedFormat = true
                }
            }
            tap.ok(supportedFormat)
            tap.ok(source.support_url !== undefined && typeof source.support_url === 'string')
        }
    })
}

tap.test('default filter lists are correctly formatted', childTest => {
    testLists(defaultLists)
    childTest.end()
})

tap.test('regional filter lists are correctly formatted', childTest => {
    testLists(regionalLists)
    childTest.end()
})
