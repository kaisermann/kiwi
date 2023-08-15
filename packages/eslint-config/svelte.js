module.exports = {
  extends: [
    './index.js',
    'plugin:svelte/recommended',
    'plugin:svelte/prettier',
  ],
  env: {
    browser: true,
    es2017: true,
    node: true,
  },
  ignorePatterns: ['*.cjs'],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
    extraFileExtensions: ['.svelte'],
  },
  overrides: [
    {
      files: ['*.svelte'],
      parser: 'svelte-eslint-parser',
      parserOptions: {
        parser: {
          ts: '@typescript-eslint/parser',
          js: 'espree',
          typescript: '@typescript-eslint/parser',
        },
      },
    },
  ],
};
