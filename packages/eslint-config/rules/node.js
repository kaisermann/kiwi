const { CONFIG_FILES_GlOBS } = require('../lib/consts.js');

module.exports = {
  plugins: ['n'],
  env: {
    node: true,
  },
  rules: {
    // Disallow use of process.env
    // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-process-env.md
    'n/no-process-env': 'off',

    // Enforce a callback to return
    // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/callback-return.md
    //! too annoying
    'n/callback-return': 'off',

    // Require all requires be top-level
    // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/global-require.md
    'n/global-require': 'error',

    // Disallow use of new operator with the require function
    // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-new-require.md
    'n/no-new-require': 'error',

    // Disallow string concatenation with __dirname and __filename
    // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-path-concat.md
    'n/no-path-concat': 'error',

    // Make process.exit() expressions the same code path as throw
    // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/process-exit-as-throw.md
    'n/process-exit-as-throw': 'error',

    // Disallow deprecated APIs
    // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-deprecated-api.md
    'n/no-deprecated-api': 'error',

    // Enforce using the node: protocol when importing Node.js builtin modules
    'n/prefer-node-protocol': [
      'warn',
      {
        version: '>=16.0.0',
      },
    ],

    // Encourages use of promise APIs instead o callback APIs
    // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/prefer-promises/fs.md
    // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/prefer-promises/dns.md
    'n/prefer-promises/fs': 'warn',
    'n/prefer-promises/dns': 'warn',
  },
  overrides: [
    {
      files: CONFIG_FILES_GlOBS,
      rules: {
        // Require all requires be top-level
        // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/global-require.md
        'n/global-require': 'off',
      },
    },
  ],
};
