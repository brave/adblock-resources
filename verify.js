const { readResources } = require('.')

const tap = require('tap')
const { Engine } = require('adblock-rs')

tap.test('resources are parsed OK by adblock-rust', childTest => {
    const resources = readResources()

    const engine = new Engine([])

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
