module.exports = {
	root: true,
	env: {
		node: true,
		browser: true
	},
	extends: ['plugin:vue/recommended', 'eslint:recommended', 'plugin:prettier/recommended'],
	rules: {
		'vue/component-name-in-template-casing': ['error', 'PascalCase'],
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'vue/max-attributes-per-line': 'off',
		'no-tabs': 'off',
		'no-useless-constructor': 'off',
		'require-await': 'off',
		'prefer-const': 'off',
		'import/no-mutable-exports': 'off',
		'no-use-before-define': 'off',
		'nuxt/no-cjs-in-config': 'off',
		camelcase: 'off'
	},
	globals: {
		$nuxt: true
	},
	parserOptions: {
		parser: 'babel-eslint'
	}
};
