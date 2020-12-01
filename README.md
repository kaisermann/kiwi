# 🥝🛠

_Kiwi Tooling_ is a very dear and hand-crafted front-end tooling preset that aims to guide you on writing readable code for humans.

For now, this presets are more focused in providing an easier DX for all kinds of projects that I find myself getting into. That's why it comes with plugins for `jest`, `svelte`, etc. The rules plugins won't be used if the project doesn't have its related tool installed.

## Supports

- ES6+ by default
- React (optional, must install `react`)
- Svelte (optional, must install `svelte`)
- Typescript (optional, must install `typescript`)
- Jest (optional, must install `jest`)

## Usage

```shell
$ yarn add -D @kiwi/eslint-config @kiwi/prettier-config
```

**.eslintrc:**

```jsonc
{
  "extends": "@kiwi",
  // or
  "extends": "@kiwi/svelte",
  // or
  "extends": "@kiwi/react"
}
```

**.prettierrc**:

```json
"@kiwi/prettier-config"
```

_(that's the whole `.prettierrc`)_
