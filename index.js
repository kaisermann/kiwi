module.exports = {
  root: true,
  extends: ['eslint:recommended', 'prettier'],
  plugins: ['prettier', 'import'],
  env: {
    browser: true,
    node: true,
    jest: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    'no-console':
      process.env.NODE_ENV === 'production'
        ? ['warn', { allow: ['info', 'warn', 'error'] }]
        : 'off',

    'prefer-const': ['error', { destructuring: 'all' }],

    /** Enforce file extensions on 'import' statements */
    'import/extensions': ['error', 'always', { ignorePackages: true }],

    /** Allow to import peer dependencies */
    'import/no-extraneous-dependencies': ['warn', { peerDependencies: true }],

    /** No one prefers the default export... */
    'import/prefer-default-export': 'off',

    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules
    'import/order': [
      'warn',
      {
        'newlines-between': 'always',
        groups: [
          'builtin',
          'external',
          ['internal', 'parent'],
          ['sibling', 'index'],
        ],
      },
    ],
    'import/first': 'error',
    'import/no-duplicates': 'error',
    'import/newline-after-import': 'error',
    'import/no-mutable-exports': 'warn',
    'import/export': 'warn',
    'import/no-useless-path-segments': 'error',
    'import/no-self-import': 'error',
    'import/no-absolute-path': 'error',
  },
};
