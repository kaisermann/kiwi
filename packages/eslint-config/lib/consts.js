exports.CONFIG_FILES_GlOBS = [
  '*.config.{ts,tsx,js,jsx}',
  '.*rc.{ts,tsx,js,jsx}',
];

exports.TEST_GLOBS = {
  cypress: ['**/cypress/**/*.{ts,tsx,js,jsx}'],
  jest: ['*.{test,spec}.{ts,tsx,js,jsx}'],
};

exports.TEST_GLOB_LIST = [].concat(...Object.values(exports.TEST_GLOBS));
