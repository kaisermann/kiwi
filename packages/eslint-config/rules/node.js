module.exports = {
  env: {
    node: true,
  },
  extends: ['plugin:node/recommended'],
  plugins: ['node'],
  rules: {
    // Disallow use of process.env
    // https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/no-process-env.md
    'node/no-process-env': 'error',

    // Enforce a callback to return
    // https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/callback-return.md
    //! maybe too annoying
    'node/callback-return': 'error',

    // Require all requires be top-level
    // https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/global-require.md
    'node/global-require': 'error',

    // Disallow use of new operator with the require function
    // https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/no-new-require.md
    'node/no-new-require': 'error',

    // Disallow string concatenation with __dirname and __filename
    // https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/no-path-concat.md
    'node/no-path-concat': 'error',
  },
};
