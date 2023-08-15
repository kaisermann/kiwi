// https://github.com/import-js/eslint-plugin-import/tree/main/docs/rules
module.exports = {
  extends: ['plugin:import/typescript'],
  plugins: ['import'],
  rules: {
    // Disallow non-import statements appearing before import statements
    // https://github.com/import-js/eslint-plugin-import/tree/main/docs/rules/first.md
    'import/first': 'error',

    // Disallow duplicate imports
    // https://github.com/import-js/eslint-plugin-import/tree/main/docs/rules/no-duplicates.md
    'import/no-duplicates': [
      'error',
      {
        'prefer-inline': false,
      },
    ],

    // Enforce a consistent type import style
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/consistent-type-specifier-style.md
    // Off due to @typescript-eslint/consistent-type-imports
    'import/consistent-type-specifier-style': ['off', 'prefer-top-level'],

    // Ensure native, external and internal imports are separated, above relative imports and that unassigned imports are ignored
    // https://github.com/import-js/eslint-plugin-import/tree/main/docs/rules/order.md
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        warnOnUnassignedImports: false,
        pathGroupsExcludedImportTypes: [],
        groups: [
          'builtin',
          'external',
          'internal',
          ['parent', 'sibling', 'index'],
          'object',
          'type',
        ],
        pathGroups: [
          {
            // treat @/... and $/... as internal paths
            pattern: '{$,@}/**',
            group: 'internal',
          },
          {
            pattern: '*.json',
            group: 'object',
            patternOptions: { matchBase: true },
          },
        ],
      },
    ],

    // Require a newline after the last import/require in a group
    // https://github.com/import-js/eslint-plugin-import/tree/main/docs/rules/newline-after-import.md
    'import/newline-after-import': 'error',

    // Forbid import of modules using absolute paths
    // https://github.com/import-js/eslint-plugin-import/tree/main/docs/rules/no-absolute-path.md
    'import/no-absolute-path': 'error',

    // Forbid mutable exports
    // https://github.com/import-js/eslint-plugin-import/tree/main/docs/rules/no-mutable-exports.md
    'import/no-mutable-exports': 'error',

    // Disallow invalid exports, e.g. multiple defaults
    // https://github.com/import-js/eslint-plugin-import/tree/main/docs/rules/export.md
    'import/export': 'error',

    // Ensures that there are no useless path segments
    // https://github.com/import-js/eslint-plugin-import/tree/main/docs/rules/no-useless-path-segments.md
    'import/no-useless-path-segments': ['error', { commonjs: true }],

    // Forbid a module from importing itself
    // https://github.com/import-js/eslint-plugin-import/tree/main/docs/rules/no-self-import.md
    'import/no-self-import': 'error',
  },
};
