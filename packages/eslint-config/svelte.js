/* eslint-disable node/global-require */
module.exports = {
  extends: ['./index.js'],
  plugins: ['svelte3'],
  env: {
    browser: true,
    es2017: true,
    node: true,
  },
  ignorePatterns: ['*.cjs'],
  settings: {
    'svelte3/typescript': () => require('typescript'),
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
  },
  overrides: [
    {
      files: ['*.svelte'],
      processor: 'svelte3/svelte3',
    },
  ],
};
