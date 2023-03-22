function hasPackage(path) {
  try {
    require.resolve(path);

    return true;
  } catch (e) {
    return false;
  }
}

const hasSvelteInstalled = hasPackage('svelte');

// Reference: https://prettier.io/docs/en/options.html
module.exports = {
  $schema: 'http://json.schemastore.org/prettierrc',

  // Specify the line length that the printer will wrap on.
  printWidth: 80,

  // Specify the number of spaces per indentation-level.
  tabWidth: 2,

  // Indent lines with tabs instead of spaces.
  useTabs: false,

  // Print semicolons at the ends of statements.
  semi: true,

  // Use single quotes instead of double quotes.
  singleQuote: true,

  // Use single quotes instead of double quotes in JSX.
  jsxSingleQuote: false,

  // Change when properties in objects are quoted.
  quoteProps: 'as-needed',

  // Print trailing commas wherever possible when multi-line. (A single-line array, for example, never gets trailing commas.)
  trailingComma: 'all',

  // Print spaces between brackets in object literals.
  bracketSpacing: true,

  // Put the > of a multi-line JSX element at the end of the last line instead of being alone on the next line
  bracketSameLine: false,

  // Include parentheses around a sole arrow function parameter.
  arrowParens: 'always',

  // If svelte is installed, add the svelte plugin and override the parser for svelte files.
  ...(hasSvelteInstalled && {
    plugins: ['prettier-plugin-svelte'],
    pluginSearchDirs: ['.'],
    overrides: [
      {
        files: '*.svelte',
        options: { parser: 'svelte' },
      },
    ],
  }),
};
