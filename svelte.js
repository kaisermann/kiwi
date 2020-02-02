module.exports = {
  extends: ['./index.js'],
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  env: {
    es6: true,
    browser: true,
  },
  plugins: ['svelte3'],
  overrides: [
    {
      files: ['**/*.svelte'],
      processor: 'svelte3/svelte3',
      globals: {
        $$props: true,
      },
      rules: {
        'import/no-mutable-exports': 'off',
      },
    },
  ],
};
