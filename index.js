module.exports = {
	extends: ['eslint:recommended', 'prettier', 'prettier'],
	plugins: ['prettier', 'import'],
	env: {
		es6: true,
	},
	parserOptions: {
		ecmaVersion: 2018,
	},
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? ['warn', { allow: ['info', 'warn', 'error'] }] : 'off',
		// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules
		'import/order': [
			'error',
			{
				'newlines-between': 'always',
				groups: ['builtin', 'external', ['internal', 'parent'], ['sibling', 'index']],
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
