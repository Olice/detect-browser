module.exports = {
  env: {
    browser: true,
  },
  parserOptions: {
    ecmaVersion: 3,
    sourceType: 'script',
    ecmaFeatures: {
      jsx: false,
    },
  },
  extends: 'eslint:recommended',
  rules: {
    indent: [
      'error',
      2,
    ],
    'linebreak-style': [
      'error',
      'unix',
    ],
    quotes: [
      'error',
      'single',
    ],
    semi: [
      'error',
      'always',
    ],
  },
};
