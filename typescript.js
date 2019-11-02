module.exports = {
	root: true,
	extends: ['./index.js'],
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],
	parserOptions: {
		ecmaVersion: 6,
		sourceType: 'module',
	},
	rules: {
		'@typescript-eslint/no-unused-vars': ['warn', { ignoreRestSiblings: true }],
	},
};
