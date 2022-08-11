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
    "uuid": "49254a7e-396e-4d1f-af48-f5730e22e1ce",
    "url": "https://raw.githubusercontent.com/brave/adblock-lists/master/brave-lists/new-list.txt",
    "title": "New Filter Rules",
    "format": "Standard",
    "include_redirect_urls": false,
    "support_url": "https://github.com/brave/adblock-lists"
}
```

- `uuid` is a unique identifier used by the browser to identify a filter list, should be generated.

- `url` is the URL where the filter list is actually located and can be downloaded from. Filter list should be a list of rules in the format specified in `format` in a `.txt` file.

- `title` is a human-readable title for the filter list.

- `format` is either ABP/uBO-style format ("Standard", most common) or IP address and hostname ("Hosts").

- `include_redirect_urls` permits parsing of `redirect-url` filter option. This has security implications. This field is optional and defaults to `false`. 

- `support_url` is somewhere a user can ask for help with the filter list.

### Regional-list-specific fields

In addition to the above, regional lists have a few extra fields:

```json
{
    ...
    "langs": ["ar"],
    "component_id": "lfgnenkkneohplacnfabidofpgcdpofm",
    "base64_public_key": "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAqNcRp37CBZCXe1vbmXyobycPxHyEKNIgNl6p0XBBxtcZcQOijpY70GjCRzgCL7m1+FBo4MR3FXLiF2aPn/QsUR8t7+zfw3XzBVos4Ssexkqpd4/4ciASwTXpbuyFOq4Z5dcgJ1afeT9Zj5bmh4ekLpgJ1NzVwCMhEKk6cmSKIaGVo5EEydtlor2nkUJrSFuZA6tYZ++4BOfhhCtzrvXTZjg7mTlB6ca21NL4oLwtqvJMtF8ddoumh619BB5wOqxLzntC/oWyOxf00V5HDC7e/DRj9J8jLRFLd4EQUO4Mk+kG3MNy0ph9cqdw6zFR7a2H3LGkl4ejsifM1mUDuJL0cwIDAQAB",
    "desc": "This is a regional list that blocks some unwanted items"
}
```

- `langs` is a list of _locale codes_ for the given list, allowing it to be preselected in-browser by users in the corresponding regions. Note that despite the name, it should not list _language codes_.

- `component_id` and `base64_public_key` are constants generated per-list such that the lists can be served in CRX components created by [brave-core-crx-packager](https://github.com/brave/brave-core-crx-packager).

- `desc` is a short description of the list that may eventually be displayed in the `brave://adblock` UI.
