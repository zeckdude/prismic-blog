module.exports = {
  root: true,
  plugins: ['@typescript-eslint', 'prettier'],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
      extends: [
        'airbnb',
        'airbnb-typescript',
        'airbnb/hooks',
        'plugin:tailwindcss/recommended',
        'next/core-web-vitals',
        'prettier',
      ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
      },
      rules: {
        'prettier/prettier': ['error'],
        'react/jsx-props-no-spreading': 0,
        'import/prefer-default-export': 0,
        'react/require-default-props': 0,
      },
    },
  ],
};
