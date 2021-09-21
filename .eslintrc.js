module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    '@typescript-eslint/no-var-requires': 1,
    '@typescript-eslint/ban-types': 1,
    '@typescript-eslint/ban-ts-comment': 1,
    '@typescript-eslint/no-this-alias': 1,
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react/no-unescaped-entities': 1,
    'react/no-children-prop': 1,
    'prefer-const': 1,
    'no-var': 1,
  },
  ignorePatterns: ['node_modules', 'lib', '__mocks__', '__stories__', 'storybook-static'],
}
