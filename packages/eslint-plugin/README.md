# `@kiwi/eslint-plugin`

## Installation

Give that you already have ESLint installed, run:

```bash
yarn add -D @kiwi/eslint-plugin
```

## Usage

After installing the module, just add it to your `plugins` array inside your `.eslintrc`.

```jsonc
// .eslintrc
{
  ...,
  "plugins": ["@kiwi"]
}
```

## Rules

This plugin provides the following custom ESLint rules:

- [`react-descriptive-effect`](/packages/eslint-plugin-vtex/docs/rules/react-descriptive-effect.md): Encourage descriptive React effects.
