# adblock-resources

Contains resources and scriptlets designed for use with Brave's [adblock-rust](https://github.com/brave/adblock-rust) library.

Custom resources should be added to the `resources` directory, and a corresponding entry should be added to the `metadata.json` file.

## Using

This package can be imported as a library, exposing the function `readResources` which will produce the correctly formatted list of resources for use with [adblock-rust](https://github.com/brave/adblock-rust).

Alternatively, `npm run build` will write all resources to `dist/resources.json` for future use.

Use `npm run verify` after modifying the resources or metadata file to ensure the format can be accepted by `adblock-rust`.

## Metadata format

`metadata.json` is a list of elements of the following format:

```json
{
    "name": "name-of-my-resource",
    "aliases": ["an-alias-for-my-resource"],
    "kind": {"mime":"application/javascript"},
    "resourcePath": "pathRelativeToResources.js"
}
```

- `name` is the name of the resource as it would be used in a filter rule.

- `aliases` is a list containing optional additional (usually shorter) identifiers that could be used instead of the `name`. Usually this is empty or contains a single entry that is an abbreviation of the `name`.

- `kind` is either a MIME type as shown above, or simply the string `"template"` to specify that the resource is a scriptlet with optional template parameters (i.e., `{{1}}`, `{{2}}`, ...).

- `resourcePath` specifies the path to the content of the resource. It should be relative to the `resources` directory in the root of this repository.

In general, this format corresponds to the `Resource` struct from [adblock-rust](https://github.com/brave/adblock-rust), but the base64-encoded `content` field is replaced by a path to a file for better maintainability. This library will translate the `resourcePath` field back to a base64-encoded `content` field when ready for use.
