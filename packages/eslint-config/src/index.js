module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'airbnb-typescript',
    'plugin:prettier/recommended'
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx'], // Your TypeScript files extension
      parserOptions: {
        project: ['./tsconfig.json'], // Specify it only for TypeScript files
      },
    }
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module',
    parserOptions: {
      project: './tsconfig.json',
    }
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'prettier'
  ]
};
