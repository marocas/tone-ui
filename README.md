# Reproduce error

## When using `@whitespace/storybook-addon-html` package

This babel configuration will break Storybook

Add to `babel.config.json`

```
{...}
"presets": [
  {...}
  [
    "minify",
    {
      "builtIns": false,
      "evaluate": false,
      "mangle": false
    }
  ]
],
{...}
```

Add `babel-preset-minify` and with this settings storybook wont work
