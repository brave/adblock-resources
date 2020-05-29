const fs = require('fs')
const path = require('path')

const { readResources } = require('.')

fs.writeFileSync(path.join(__dirname, 'dist', 'resources.json'), JSON.stringify(readResources()))
