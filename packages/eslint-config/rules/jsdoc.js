const CUSTOM_TAGS = ['note', 'todo'];

module.exports = {
  plugins: ['jsdoc'],
  rules: {
    // https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-access.md
    'jsdoc/check-access': 'warn',

    // https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-alignment.md
    'jsdoc/check-alignment': 'warn',

    // https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-examples.md
    'jsdoc/check-examples': 'off',

    // https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-indentation.md
    'jsdoc/check-indentation': 'off',

    // https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-line-alignment.md
    'jsdoc/check-line-alignment': 'off',

    // https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-param-names.md
    'jsdoc/check-param-names': 'warn',

    // https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-property-names.md
    'jsdoc/check-property-names': 'warn',

    // https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-syntax.md
    'jsdoc/check-syntax': 'off',

    // https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-tag-names.md
    'jsdoc/check-tag-names': [
      'warn',
      {
        typed: false,
        definedTags: CUSTOM_TAGS,
      },
    ],

    // https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-template-names.md
    'jsdoc/check-template-names': 'off',

    // https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-types.md
    'jsdoc/check-types': 'warn',

    // https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-values.md
    'jsdoc/check-values': 'warn',

    // https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/convert-to-jsdoc-comments.md
    'jsdoc/convert-to-jsdoc-comments': [
      'warn',
      {
        enableFixer: false,
        lineOrBlockStyle: 'both',
        enforceJsdocLineStyle: 'multi',
        contexts: [
          'ArrowFunctionExpression',
          'FunctionDeclaration',
          'FunctionExpression',
          'TSDeclareFunction',
          'VariableDeclaration',
        ],
        contextsBeforeAndAfter: [
          'VariableDeclarator',
          'TSPropertySignature',
          'PropertyDefinition',
          'TSMethodSignature',
        ],
      },
    ],

    // https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/empty-tags.md
    'jsdoc/empty-tags': 'warn',

    // https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/implements-on-classes.md
    'jsdoc/implements-on-classes': 'warn',

    // https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/imports-as-dependencies.md
    'jsdoc/imports-as-dependencies': 'off',

    // https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/informative-docs.md
    'jsdoc/informative-docs': 'off',

    // https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/lines-before-block.md
    'jsdoc/lines-before-block': 'off',

    // https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/match-description.md
    'jsdoc/match-description': 'off',

    // https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/match-name.md
    'jsdoc/match-name': 'off',

    // https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/multiline-blocks.md
    'jsdoc/multiline-blocks': 'warn',

    // https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-bad-blocks.md
    'jsdoc/no-bad-blocks': 'off',

    // https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-blank-block-descriptions.md
    'jsdoc/no-blank-block-descriptions': 'off',

    // https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-blank-blocks.md
    'jsdoc/no-blank-blocks': 'off',

    // https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-defaults.md
    'jsdoc/no-defaults': 'warn',

    // https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-missing-syntax.md
    'jsdoc/no-missing-syntax': 'off',

    // https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-multi-asterisks.md
    'jsdoc/no-multi-asterisks': 'warn',

    // https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-restricted-syntax.md
    'jsdoc/no-restricted-syntax': 'off',

    // https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-types.md
    'jsdoc/no-types': 'off',

    // https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-undefined-types.md
    'jsdoc/no-undefined-types': 'warn',

    // https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-asterisk-prefix.md
    'jsdoc/require-asterisk-prefix': 'off',

    // https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-description.md
    'jsdoc/require-description': 'off',

    // https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-description-complete-sentence.md
    'jsdoc/require-description-complete-sentence': 'off',

    // https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-example.md
    'jsdoc/require-example': 'off',

    // https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-file-overview.md
    'jsdoc/require-file-overview': 'off',

    // https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-hyphen-before-param-description.md
    'jsdoc/require-hyphen-before-param-description': 'off',

    // https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-jsdoc.md
    'jsdoc/require-jsdoc': [
      'warn',
      {
        // We set publicOnly and require[...] to false and use `contexts`
        // to manually specify which contexts to check.
        publicOnly: false,
        require: {
          ArrowFunctionExpression: false,
          ClassDeclaration: false,
          ClassExpression: false,
          FunctionDeclaration: false,
          FunctionExpression: false,
          MethodDefinition: false,
        },
        exemptEmptyConstructors: false,
        exemptEmptyFunctions: false,
        checkConstructors: false,
        checkGetters: false,
        checkSetters: false,
        enableFixer: false,
        contexts: [
          // Exported variables
          'ExportDefaultDeclaration > VariableDeclaration',
          'ExportNamedDeclaration > VariableDeclaration',

          // Exported functions
          'ExportDefaultDeclaration > ArrowFunctionExpression',
          'ExportDefaultDeclaration > FunctionDeclaration',
          'ExportDefaultDeclaration > FunctionExpression',
          'ExportNamedDeclaration > ArrowFunctionExpression',
          'ExportNamedDeclaration > FunctionDeclaration',
          'ExportNamedDeclaration > FunctionExpression',

          // Exported classes
          'ExportDefaultDeclaration > ClassDeclaration',
          'ExportNamedDeclaration > ClassDeclaration',

          // Exported type declarations
          'ExportNamedDeclaration > TSTypeAliasDeclaration',
          'ExportNamedDeclaration > TSInterfaceDeclaration',
          'ExportNamedDeclaration > TSEnumDeclaration',

          // Exported class fields
          // 'ExportNamedDeclaration > ClassDeclaration > ClassBody > PropertyDefinition',

          // Exported TS members (exported interface and type aliases)
          // 'ExportNamedDeclaration > TSInterfaceDeclaration > TSInterfaceBody > TSPropertySignature',
          // 'ExportNamedDeclaration > TSInterfaceDeclaration >  TSInterfaceBody > TSMethodSignature',
          // 'ExportNamedDeclaration > TSTypeAliasDeclaration > TSTypeLiteral > TSPropertySignature',
          // 'ExportNamedDeclaration > TSTypeAliasDeclaration > TSTypeLiteral > TSMethodSignature',
        ],
      },
    ],

    // https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-param.md
    'jsdoc/require-param': 'off',

    // https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-param-description.md
    'jsdoc/require-param-description': 'warn',

    // https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-param-name.md
    'jsdoc/require-param-name': 'warn',

    // https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-param-type.md
    'jsdoc/require-param-type': 'warn',

    // https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-property.md
    'jsdoc/require-property': 'warn',

    // https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-property-description.md
    'jsdoc/require-property-description': 'warn',

    // https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-property-name.md
    'jsdoc/require-property-name': 'warn',

    // https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-property-type.md
    'jsdoc/require-property-type': 'warn',

    // https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-returns.md
    'jsdoc/require-returns': 'off',

    // https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-returns-check.md
    'jsdoc/require-returns-check': 'warn',

    // https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-returns-description.md
    'jsdoc/require-returns-description': 'warn',

    // https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-returns-type.md
    'jsdoc/require-returns-type': 'warn',

    // https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-template.md
    'jsdoc/require-template': 'off',

    // https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-throws.md
    'jsdoc/require-throws': 'off',

    // https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-yields.md
    'jsdoc/require-yields': 'warn',

    // https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-yields-check.md
    'jsdoc/require-yields-check': 'warn',

    // https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/sort-tags.md
    'jsdoc/sort-tags': 'off',

    // https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/tag-lines.md
    'jsdoc/tag-lines': [
      'warn',
      'any',
      {
        startLines: 1,
        endLines: 1,
        tags: {
          description: 'always',
          example: 'always',
          fileoverview: 'always',
          overview: 'always',
          param: 'always',
          property: 'always',
          returns: 'always',
          return: 'always',
          throws: 'always',
          yield: 'always',
        },
      },
    ],

    // https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/text-escaping.md
    'jsdoc/text-escaping': 'off',

    // https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/valid-types.md
    'jsdoc/valid-types': 'warn',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'jsdoc/check-tag-names': [
          'warn',
          {
            typed: true,
            definedTags: CUSTOM_TAGS,
          },
        ],
        'jsdoc/no-types': 'warn',
        'jsdoc/no-undefined-types': 'off',
        'jsdoc/require-param-type': 'off',
        'jsdoc/require-property-type': 'off',
        'jsdoc/require-returns-type': 'off',
      },
    },
  ],
};
