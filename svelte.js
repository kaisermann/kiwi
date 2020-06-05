module.exports = {
  extends: ['./index.js'],
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
