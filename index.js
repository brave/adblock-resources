const fs = require('fs')
const path = require('path')

const metadata = require('./metadata.json')

const readResources = (() => {
    return metadata.map(item => ({
        name: item.name,
        aliases: item.aliases,
        kind: item.kind,
        content: fs.readFileSync(path.join(__dirname, 'resources', item.resourcePath)).toString('base64')
    }))
})

const defaultLists = require('./filter_lists/default.json')
const regionalLists = require('./filter_lists/regional.json')

module.exports = { defaultLists, regionalLists, readResources }
