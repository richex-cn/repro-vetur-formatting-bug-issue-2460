module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', '@vue/standard'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'space-before-function-paren': 'off',
    'space-in-parens': ['error', 'never'],
    eqeqeq: 0,
    'template-curly-spacing': ['error', 'never'],
    'vue/no-parsing-error': 'off',
    curly: 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
