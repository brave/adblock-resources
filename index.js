import fs from 'fs'
import path from 'path'

import metadata from './metadata.json' with { type: "json" }

const readResources = (() => {
    return metadata.map(item => ({
        name: item.name,
        aliases: item.aliases,
        kind: item.kind,
        content: fs.readFileSync(path.join(import.meta.dirname, 'resources', item.resourcePath)).toString('base64')
    }))
})

import listCatalog from './filter_lists/list_catalog.json' with { type: "json" }

export { listCatalog, readResources }
