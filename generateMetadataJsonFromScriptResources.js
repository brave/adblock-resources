/**
 * Helper script that takes resources in /resources and generates the metadata.json
 * Note that this does not add the alias - please edit those manually. 
 * For instance - brave-fix script needs the "bf" alias
 */

const fs = require("fs");
const path = require("path");

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
console.debug(`Done! IMPORTANT: Please edit ${metadataJsonFile} to have the right aliases for the resources`);
