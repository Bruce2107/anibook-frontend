module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['prettier', 'plugin:react/recommended', 'airbnb', 'airbnb/hooks'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
    'react/prop-types': [0],
    'import/no-unresolved': [0],
    'import/extensions': [0],
    'import/no-extraneous-dependencies': [0],
    'no-undef': [0],
    'no-unused-vars': [0],
    'no-param-reassign': [0],
    'react/jsx-props-no-spreading': [0],
    'react/no-array-index-key': [0],
    'jsx-a11y/click-events-have-key-events': [0],
    'comma-dangle': [0],
    'implicit-arrow-linebreak': [0],
    'function-paren-newline': [0],
    'object-curly-newline': [0],
  },
};
