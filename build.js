import fs from 'fs'
import path from 'path'

import AdblockResources from './index.js'

const resourceGetter = new AdblockResources()
const resources = await resourceGetter.resources()

fs.writeFileSync(path.join(import.meta.dirname, 'dist', 'resources.json'), JSON.stringify(resources))
