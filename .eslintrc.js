module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended', // @typescript-eslint/eslint-plugin 규칙을 사용한다.
    '@react-native-community',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
    'plugin:jest/recommended'
  ],
  overrides: [
    // detox overrides
    {
      files: ['*.e2e.js'],
      globals: {
        device: true,
        element: true,
        by: true
      }
    }
  ],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'react-native/no-inline-styles': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off'
  },
  ignorePatterns: [
    'node_modules',
    'babel.config.js',
    'metro.config.js',
    'jest.config.js'
  ]
};
