const { CONFIG_FILES_GlOBS } = require('./lib/consts.js');

module.exports = {
  extends: [
    './index.js',
    './rules/react/react.js',
    './rules/react/react-hooks.js',
    './rules/react/react-a11y.js',
    'plugin:@kiwi/react'
  ],
  plugins: ['@kiwi'],
  overrides: [
    {
      files: '**/*.{ts,tsx,js,jsx}',
      excludedFiles: [
        '*{_,.}{test,spec}.{ts,tsx,js,jsx}',
        '{__tests__,tests}/**/*',
        ...CONFIG_FILES_GlOBS,
      ],
      // activate these rules in react files not related to testing
      rules: {
        // prevent people from importing native Node libs (url/path/crypto, etc) on browser env
        'import/no-nodejs-modules': 'error',
      },
    },
  ],
};
