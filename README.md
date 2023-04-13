# adblock-resources

Contains resources and scriptlets designed for use with Brave's [adblock-rust](https://github.com/brave/adblock-rust) library.

Custom resources should be added to the `resources` directory, and a corresponding entry should be added to the `metadata.json` file.

## Using

This package can be imported as a library, exposing the function `readResources` which will produce the correctly formatted list of resources for use with [adblock-rust](https://github.com/brave/adblock-rust).

Alternatively, `npm run build` will write all resources to `dist/resources.json` for future use.

To generate `metadata.json` automatically from files in `resources/`, run `npm run generateMetadata`.

Use `npm run test` after modifying the resources or metadata file to ensure the format can be accepted by `adblock-rust`.

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

## Filter list description format

The `filter_lists/*.json` files are lists of elements, each describing a filter list. The format for each element is:

```json
{
    "title": "New Filter Rules",
    "desc": "Removes new elements"
    "langs": [],
    "component_id": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    "base64_public_key": "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAs...IDAQAB",
    "list_text_component": {
        "component_id": "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
        "base64_public_key": "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAs...IDAQAB",
    },
    "sources": [
        {
            "url": "https://raw.githubusercontent.com/brave/adblock-lists/master/brave-lists/new-list.txt",
            "title": "Brave New List",
            "format": "Standard",
            "support_url": "https://github.com/brave/adblock-lists",
        }
    ]
}
```

- `uuid` is currently only used by iOS, along with versions of the Desktop/Android browser prior to [brave/brave-core#15077](https://github.com/brave/brave-core/pull/15077). It's a UUID generated with, for example, the CLI tool `uuidgen`.

- `title` is a human-readable title for the filter list component. Each source also has a title, which is a human-readable title for each individual list making up the full component.

- `desc` is a short human-readable description of what the filter list is designed to block.

- `langs` is a list of _locale codes_ for the given component, allowing it to be preselected in-browser by users in the corresponding regions. Note that despite the name, it should not list _language codes_.

- `component_id` and `base64_public_key` are unique constants generated per-list such that the lists can be served in CRX components created by [brave-core-crx-packager](https://github.com/brave/brave-core-crx-packager). Note that the ones inside `list_text_component` should not have the same values.

- `sources` is a list of individual filter lists that are concatenated together in order to create the full list for a component.

- `url` is the URL where a filter list source can be downloaded from. It should be a list of rules in the format specified in `format` in a plaintext file.

- `format` is either ABP/uBO-style format ("Standard", most common) or IP address and hostname ("Hosts").

- `support_url` is somewhere a user can ask for help with the filter list.

## Adding a new list

The `generate_component.sh` script can be used to help create a new filter list component.
It will generate:
- A public key (corresponding to the `list_text_component.base64_public_key` field)
- A component ID (corresponding to the `list_text_component.component_id` field)
- The component's private key (in a new PEM file)

The script should be run with no arguments.
The resulting PEM file will be named `ad-block-updater-<component_id>.pem`.
This file should be uploaded as a secret to Brave's `Extension Developers` vault in 1Password.
Once it is uploaded, devops will also need to sync it the with Jenkins so that it can be used to build the component.

Note that until iOS is updated to use plaintext list components (see [this tracking issue](https://github.com/brave/brave-ios/issues/5974)), each list will also need another separate `component_id` and `base64_public_key`, as well as `uuid`, defined at the top-level of the object.
