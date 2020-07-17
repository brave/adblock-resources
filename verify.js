const { readResources } = require('.')

const tap = require('tap')
const { Engine, FilterSet } = require('adblock-rs')

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
