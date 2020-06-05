module.exports = {
  extends: [
    'eslint:recommended',
    './rules/errors.js',
    './rules/node.js',
    './rules/style.js',
    './rules/variables.js',
    './rules/best-practices.js',
    './rules/imports.js',
    './rules/typescript.js',
    './rules/prettier.js',
    './rules/tests.js',
    './rules/svelte.js',
  ],
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
  },
};
