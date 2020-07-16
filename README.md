# 🥝🛠

_Kiwi Tooling_ is a very dear and hand-crafted front-end tooling preset that aims to guide you on writing readable code for humans.

## Supports

- ES6+ by default
- Svelte (optional, must install `svelte`)
- Typescript (optional, must install `typescript`)

## Usage

```shell
$ yarn add -D @kiwi/eslint-config @kiwi/prettier-config
```

**.eslintrc:**

```json
{
  "extends": "@kiwi"
}
```

**.prettierrc**:

```json
"@kiwi/prettier-config"
```

_(that's the whole `.prettierrc`)_
