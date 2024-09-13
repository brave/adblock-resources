import fs from 'node:fs/promises'
import path from 'node:path'
import { pipeline, Readable } from 'node:stream'
import { promisify } from 'node:util'
import zlib from 'node:zlib'

import tar from 'tar-stream'

const pipe = promisify(pipeline)

// Allows fetching the adblock list catalog and/or resources library.
//
// These files can be assembled from the files within this NPM package, or from
// an upstream git archive URL, depending on the constructor used.
//
// Because of the remote download capability, this repo doesn't need to be
// consistently kept up-to-date when resources are updated.
//
// However, if the logic or output format has to be changed in this code,
// please be sure to bump the version used by downstream dependencies as well.
export default class AdblockResources {
  // `repoRootUrl` can be `undefined` to read from files on this filesystem,
  // or use a remote URL like 'https://github.com/brave/adblock-resources/archive/refs/heads/master.tar.gz'
  constructor(repoTarGzUrl) {
    this.repoTarGzUrl = repoTarGzUrl
  }

  async listCatalog() {
    if (this.repoTarGzUrl === undefined) {
      return (await import('./filter_lists/list_catalog.json', { with: { type: "json" } })).default
    } else {
      let p

      for await (const entry of entriesFromTarGz(this.repoTarGzUrl)) {
        const file = getRepoPath(entry)
        if (file === '/filter_lists/list_catalog.json') {
          p = await new Response(entry).json()
        } else {
          entry.resume()
        }
      }

      return await p
    }
  }

  async resources() {
    let resourceFiles

    if (this.repoTarGzUrl === undefined) {
      const resources = await fs.readdir(path.join(import.meta.dirname, 'resources'));
      resourceFiles = Promise.all(resources.map(async (file) => {
        const resourcePath = path.basename(file)
        return [ resourcePath, await fs.readFile(path.join(import.meta.dirname, 'resources', resourcePath)) ]
      }));
    } else {
      const resourceIterator = (async function* (url) {
        for await (const entry of entriesFromTarGz(url)) {
          const file = getRepoPath(entry)
          if (file.startsWith('/resources/') && file !== '/resources/') {
            yield [ path.basename(file), Buffer.from(await new Response(entry).arrayBuffer()) ]
          } else {
            entry.resume()
          }
        }
      })(this.repoTarGzUrl)
      resourceFiles = Array.fromAsync(resourceIterator)
    }

    return (await resourceFiles).map(([name, buffer]) => {
      return {
        name,
        aliases: [],
        kind: { mime: 'application/javascript' },
        content: buffer.toString('base64')
      }
    })
  }
}

async function* entriesFromTarGz(url) {
  const gunzip = zlib.createGunzip()
  const extract = tar.extract()
  pipe(Readable.fromWeb((await fetch(url)).body), gunzip, extract)

  for await (const entry of extract) {
    yield entry
  }
}

function getRepoPath(entry) {
  // strip the top-level dir (something like 'adblock-resources-master')
  return entry.header.name.substring(entry.header.name.indexOf('/'))
}
