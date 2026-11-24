# JSON Tree Outline

List nested paths and value types for a JSON document.

Open `index.html` in a modern browser. Edit the sample inputs to update the result, then print or download it. Processing stays in the tab.

## Example

Input:

```text
{"team":[{"name":"Jo"}]}
```

Expected output includes:

```text
$["team"][0]["name"] · string
```

## Limitations

Use the input format shown in the worked example. The transformation runs in browser memory; export the result before closing the tab.

## Development

See [CONTRIBUTING.md](CONTRIBUTING.md) for setup and test commands, and the [changelog](CHANGELOG.md) for project history.

## License

[MIT License](LICENSE). Copyright (c) 2026 json-tree-outline contributors.
