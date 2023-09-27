module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'react',
    'react-native',
    'import',
    'unused-imports',
    'squad',
  ],
  extends: [
    '@react-native-community',
    'plugin:react/recommended',
    'plugin:react-native/all',
    'prettier',
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'no-shadow': 'off',
        'no-undef': 'off',
        'no-unused-vars': 'off',
        'prettier/prettier': 'off', // unclear where this is even coming from
        'react/jsx-no-bind': 'error',
        'react/prop-types': 'off',
        'react/jsx-pascal-case': ['error'],
        'react/function-component-definition': [
          'error',
          {
            namedComponents: 'function-declaration',
            unnamedComponents: 'function-expression',
          },
        ],
        'react-hooks/exhaustive-deps': [
          'error',
          {
            additionalHooks: 'useTrapped',
          },
        ],
        'react-native/no-raw-text': [
          'error',
          {
            skip: [
              'BodyMedium',
              'BodyRegular',
              'BodySmall',
              'ButtonLarge',
              'ButtonSmall',
              'SubtitleSmall',
              'TitleLarge',
              'TitleMedium',
              'TitleRegular',
              'TitleSmall',
              'TitleTiny',
            ],
          },
        ],
        '@typescript-eslint/no-shadow': ['error'],
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-unused-imports': 'off',
        'import/order': 'warn',
        'import/no-duplicates': 'warn',
        'unused-imports/no-unused-imports': 'error',
        'unused-imports/no-unused-vars': [
          'warn',
          {argsIgnorePattern: '^_', destructuredArrayIgnorePattern: '^_'},
        ],
        'squad/no-func-render-prefix': ['warn'],
      },
    },
  ],
};
