/**
 * Helper script that takes resources in /resources and generates the metadata.json
 */

import fs from "fs";
import path from "path";

const metadataJsonFile = "metadata.json";
const resourcesDir = "resources";

console.debug(`Creating ${metadataJsonFile}...`);
const resources = fs.readdirSync(resourcesDir);
const metadataList = resources.map((file) => {
  return {
    name: path.basename(file),
    aliases: [],
    kind: { mime: "application/javascript" },
    resourcePath: path.basename(file),
  };
});

console.debug(`Writing ${metadataJsonFile}... `);
// Pretty print out
fs.writeFileSync(metadataJsonFile, JSON.stringify(metadataList, null, 4));
console.log("Done!")
