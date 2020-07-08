const { hasModuleInstalled } = require('../lib/utils');

const hasPrettier = hasModuleInstalled('prettier');

// https://github.com/prettier/eslint-plugin-prettier
const prettierPreset = {
  extends: ['plugin:prettier/recommended'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
  },
};

module.exports = !hasPrettier ? {} : prettierPreset;
