module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    '@nuxtjs/eslint-config-typescript'
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaVersion: 2020
  },
  rules: {
    '@typescript-eslint/no-unused-vars': 'error',
    'vue/multi-word-component-names': 'off',
    'vue/no-multiple-template-root': 'off'
  }
}
