module.exports = {
  extends: [
    'eslint:recommended',
    './rules/prettier.js',
    './rules/errors.js',
    './rules/node.js',
    './rules/style.js',
    './rules/variables.js',
    './rules/best-practices.js',
    './rules/imports.js',
    './rules/tests.js',
    './rules/typescript.js',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
};
