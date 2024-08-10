import fs from 'fs'
import path from 'path'

import { readResources } from './index.js'

fs.writeFileSync(path.join(import.meta.dirname, 'dist', 'resources.json'), JSON.stringify(readResources()))
