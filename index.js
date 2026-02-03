import fs from 'fs'
import path from 'path'

import metadata from './metadata.json' with { type: "json" }

const readResources = (() => {
    return metadata.map(item => {
        const filePath = path.join(import.meta.dirname, 'resources', item.resourcePath)
        if (!fs.existsSync(filePath)) {
            throw new Error(`metadata.json references "${item.resourcePath}" but file does not exist in resources/`)
        }
        return {
            name: item.name,
            aliases: item.aliases,
            kind: item.kind,
            content: fs.readFileSync(filePath).toString('base64')
        }
    })
})

import listCatalog from './filter_lists/list_catalog.json' with { type: "json" }

export { listCatalog, readResources }
