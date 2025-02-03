const { hasPackage } = require('../lib/utils');
const { TEST_GLOB_LIST } = require('../lib/consts');

const hasTypescript = hasPackage('typescript');

const tsPreset = {
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
      ],
      plugins: ['@typescript-eslint'],
      parser: '@typescript-eslint/parser',
      // Reference: https://typescript-eslint.io/packages/parser/#configuration
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: true,
        projectFolderIgnoreList: ['**/node_modules/**'],
        // We need this configuration to avoid performance issues in monorepos
        // https://github.com/typescript-eslint/typescript-eslint/issues/1192#issuecomment-862414778
        allowAutomaticSingleRunInference: true,
        // Keep track: https://github.com/typescript-eslint/typescript-eslint/issues/7383
        // EXPERIMENTAL_useProjectService: true,
      },
      rules: {
        //! extensions of native eslint rules
        //! when modifying a rule here, make sure to modify the native one and vice-versa
        // Disallow declaration of variables already declared in the outer scope
        // https://eslint.org/docs/rules/no-shadow
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': [
          'error',
          {
            allow: [
              'cb',
              'callback',
              'data',
              'done',
              'error',
              'item',
              'items',
              'next',
              'reject',
              'res',
              'resolve',
              'response',
            ],
          },
        ],

        // Prevent unused declared variables
        // https://typescript-eslint.io/rules/no-unused-vars
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': [
          'warn',
          {
            ignoreRestSiblings: true,
            argsIgnorePattern: '_+',
          },
        ],

        // Disallows the use of eval()-like methods
        // https://typescript-eslint.io/rules/no-magic-numbers
        // TODO enable? maybe too much
        'no-magic-numbers': 'off',
        '@typescript-eslint/no-magic-numbers': [
          'off',
          {
            ignore: [0, 1, 2, 3],
            ignoreArrayIndexes: true,
            enforceConst: true,
            detectObjects: false,
            ignoreNumericLiteralTypes: true,
            ignoreEnums: true,
          },
        ],

        // Enforce parameters with default values to be last
        // https://typescript-eslint.io/rules/default-param-last
        'default-param-last': 'off',
        '@typescript-eslint/default-param-last': 'error',

        // Disallow useless constructors
        // https://typescript-eslint.io/rules/no-useless-constructor
        'no-useless-constructor': 'off',
        '@typescript-eslint/no-useless-constructor': 'error',

        // Disallow empty functions, except for standalone funcs/arrows
        // https://eslint.org/docs/rules/no-empty-function
        'no-empty-function': 'off',
        '@typescript-eslint/no-empty-function': [
          'error',
          {
            allow: ['arrowFunctions', 'functions', 'methods'],
          },
        ],

        // Disallow use of variables before they are defined
        // https://typescript-eslint.io/rules/no-use-before-define
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': [
          'error',
          {
            functions: false,
            classes: false,
            variables: true,
            enums: false,
            typedefs: false,
          },
        ],

        // !ts specific rules
        // Enforce explicit accessibility modifiers on class properties and methods
        // https://typescript-eslint.io/rules/explicit-member-accessibility
        '@typescript-eslint/explicit-member-accessibility': [
          'error',
          {
            accessibility: 'explicit',
            overrides: {
              accessors: 'explicit',
              constructors: 'no-public',
              methods: 'explicit',
              parameterProperties: 'explicit',
            },
          },
        ],

        // Enforce explicit function return type
        // https://typescript-eslint.io/rules/explicit-function-return-type
        '@typescript-eslint/explicit-function-return-type': 'off',

        // Enforce a consistent way of typing arrays
        // https://typescript-eslint.io/rules/array-type.
        '@typescript-eslint/array-type': [
          'warn',
          {
            default: 'array-simple',
            readonly: 'array-simple',
          },
        ],

        // Enforce a consitent way to type objects
        // https://typescript-eslint.io/rules/consistent-type-definitions
        '@typescript-eslint/consistent-type-definitions': 'off',

        // Disallow non null assertions (!), comes from the recommended config
        // https://typescript-eslint.io/rules/no-non-null-assertion
        '@typescript-eslint/no-non-null-assertion': 'warn',

        // Enforce optional chaining over chaining AND (&&) operators
        // https://typescript-eslint.io/rules/prefer-optional-chain
        // ! Off until we can disable it for `typeof window === 'undefined'`
        // https://github.com/typescript-eslint/typescript-eslint/issues/7478
        '@typescript-eslint/prefer-optional-chain': 'off',

        // Enforce optional chaining over chaining AND (&&) operators
        // https://typescript-eslint.io/rules/no-non-null-asserted-optional-chain
        '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',

        // Prefer usage of as const over literal type
        // https://typescript-eslint.io/rules/prefer-as-const
        '@typescript-eslint/prefer-as-const': 'error',

        // Enforce explicit enum item values
        // https://typescript-eslint.io/rules/prefer-enum-initializers
        '@typescript-eslint/prefer-enum-initializers': 'warn',

        // Explicitly defines what a module scoped method returns
        // https://typescript-eslint.io/rules/explicit-module-boundary-types
        '@typescript-eslint/explicit-module-boundary-types': 'off',

        // Disallow empty object type ({}), as it actually means any non nullable value (even 0, '', etc)
        // https://typescript-eslint.io/rules/no-empty-object-type
        '@typescript-eslint/no-empty-object-type': [
          'error',
          {
            allowInterfaces: 'with-single-extends',
            allowWithName: 'Props$',
          },
        ],

        // Disallow the use of unsafe Function type
        // https://typescript-eslint.io/rules/no-unsafe-function-type
        '@typescript-eslint/no-unsafe-function-type': 'error',

        // Disallow wrapper object types like String, Boolean, Number, etc.
        // https://typescript-eslint.io/rules/no-wrapper-object-types
        '@typescript-eslint/no-wrapper-object-types': 'error',

        // Disallow // @ts comments
        // https://typescript-eslint.io/rules/ban-ts-comment
        '@typescript-eslint/ban-ts-comment': [
          'error',
          {
            'ts-expect-error': 'allow-with-description',
            'ts-ignore': true,
            'ts-nocheck': true,
            'ts-check': false,
            minimumDescriptionLength: 3,
          },
        ],

        // Disallows unnecessary constraints on generic types
        // https://typescript-eslint.io/rules/no-unnecessary-type-constraint
        '@typescript-eslint/no-unnecessary-type-constraint': 'warn',

        // Enforces consistent usage of type imports
        // https://typescript-eslint.io/rules/consistent-type-imports
        '@typescript-eslint/consistent-type-imports': [
          'warn',
          {
            prefer: 'type-imports',
            disallowTypeAnnotations: false,
            fixStyle: 'separate-type-imports',
          },
        ],

        //! Rules that require type-check

        // Require a consistent naming convention
        // https://typescript-eslint.io/rules/naming-convention
        camelcase: 'off',
        '@typescript-eslint/naming-convention': [
          'error',
          {
            selector: 'default',
            format: ['camelCase', 'snake_case'],
            leadingUnderscore: 'allow',
            trailingUnderscore: 'allow',
          },
          {
            selector: 'import',
            format: ['camelCase', 'PascalCase', 'snake_case'],
          },
          {
            selector: 'variable',
            format: ['camelCase', 'UPPER_CASE', 'PascalCase', 'snake_case'],
            leadingUnderscore: 'allow',
            trailingUnderscore: 'allow',
          },
          {
            selector: 'function',
            format: ['camelCase', 'PascalCase', 'snake_case'],
          },
          {
            selector: 'typeLike',
            format: ['PascalCase'],
          },
          {
            selector: 'memberLike',
            format: null,
          },
          {
            // todo
            // have to leave this for now as this rule
            // doesn't separate regular parameters from
            // destructured parameters
            selector: 'parameter',
            format: null,
          },
        ],

        // Enforce that when adding two variables, operands must both be of type number or of type string
        // https://typescript-eslint.io/rules/restrict-plus-operands
        '@typescript-eslint/restrict-plus-operands': [
          'error',
          {
            skipCompoundAssignments: false,
            allowAny: true,
          },
        ],

        // Enforce nullish coalescing over short-circuiting
        // https://typescript-eslint.io/rules/prefer-nullish-coalescing
        '@typescript-eslint/prefer-nullish-coalescing': [
          'warn',
          {
            ignoreConditionalTests: true,
            ignoreMixedLogicalExpressions: true,
          },
        ],

        // Prevent unnecessary type arguments
        // https://typescript-eslint.io/rules/no-unnecessary-type-arguments
        '@typescript-eslint/no-unnecessary-type-arguments': 'warn',

        // Warns when a namespace qualifier is unnecessary
        // https://typescript-eslint.io/rules/no-unnecessary-qualifier
        '@typescript-eslint/no-unnecessary-qualifier': 'warn',

        // Disallow throwing literals as exceptions
        // https://typescript-eslint.io/rules/only-throw-error
        '@typescript-eslint/only-throw-error': 'warn',

        // Disallows invocation of require() in favor of import statements
        // https://typescript-eslint.io/rules/no-require-imports
        '@typescript-eslint/no-require-imports': 'warn',

        // Disallows the use of eval()-like methods
        // https://typescript-eslint.io/rules/no-implied-eval
        '@typescript-eslint/no-implied-eval': 'error',

        // Requires Array#sort calls to always provide a compareFunction
        // https://typescript-eslint.io/rules/require-array-sort-compare
        '@typescript-eslint/require-array-sort-compare': 'error',

        // Warns on explicit `any` type usage
        // https://typescript-eslint.io/rules/no-explicit-any
        '@typescript-eslint/no-explicit-any': 'warn',

        // '@typescript-eslint/await-thenable': 'off',
        // '@typescript-eslint/no-base-to-string': 'off',
        // '@typescript-eslint/no-confusing-void-expression': 'off',
        // '@typescript-eslint/no-floating-promises': 'off',
        // '@typescript-eslint/no-for-in-array': 'off',
        // '@typescript-eslint/no-meaningless-void-operator': 'off',
        // '@typescript-eslint/no-misused-promises': 'off',
        // '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'off',
        // '@typescript-eslint/no-unnecessary-condition': 'off',
        // '@typescript-eslint/no-unnecessary-type-assertion': 'off',
        // '@typescript-eslint/no-unsafe-argument': 'off',
        // '@typescript-eslint/no-unsafe-assignment': 'off',
        // '@typescript-eslint/no-unsafe-call': 'off',
        // '@typescript-eslint/no-unsafe-member-access': 'off',
        // '@typescript-eslint/no-unsafe-return': 'off',
        // '@typescript-eslint/non-nullable-type-assertion-style': 'off',
        // '@typescript-eslint/prefer-includes': 'off',
        // '@typescript-eslint/prefer-readonly': 'off',
        // '@typescript-eslint/prefer-readonly-parameter-types': 'off',
        // '@typescript-eslint/prefer-reduce-type-parameter': 'off',
        // '@typescript-eslint/prefer-regexp-exec': 'off',
        // '@typescript-eslint/prefer-return-this-type': 'off',
        // '@typescript-eslint/prefer-string-starts-ends-with': 'off',
        // '@typescript-eslint/promise-function-async': 'off',
        // '@typescript-eslint/restrict-template-expressions': 'off',
        // '@typescript-eslint/strict-boolean-expressions': 'off',
        // '@typescript-eslint/switch-exhaustiveness-check': 'off',
        // '@typescript-eslint/unbound-method': 'off',
        // '@typescript-eslint/dot-notation': 'off',
        // '@typescript-eslint/require-await': 'off',
        // '@typescript-eslint/return-await': 'off',
      },
    },
    {
      files: ['*.d.ts'],
      rules: {
        'import/order': 'off',
        'import/no-duplicates': 'off',
        'import/export': 'off',
      },
    },
    {
      //* Diasble this rules on test files
      files: TEST_GLOB_LIST,
      rules: {
        '@typescript-eslint/no-non-null-assertion': 'off',
      },
    },
  ],
};

module.exports = !hasTypescript ? {} : tsPreset;
