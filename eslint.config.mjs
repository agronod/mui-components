// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import tseslint from 'typescript-eslint';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';

export default [// Base TypeScript ESLint recommended config
...tseslint.configs.recommended, // React configuration
{
  files: ['**/*.{ts,tsx}'],
  plugins: {
    react,
    'react-hooks': reactHooks,
  },
  rules: {
    // React recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,

    // React hooks rules - using recommended config for ESLint 9 compatibility
    ...reactHooks.configs.recommended.rules,

    // TypeScript specific adjustments
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  languageOptions: {
    parser: tseslint.parser,
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },
      project: './tsconfig.json',
    },
  },
}, // Storybook files override (preserve existing rule)
{
  files: ['**/*.stories.*'],
  rules: {
    'import/no-anonymous-default-export': 'off',
  },
}, // Ignore patterns
{
  ignores: [
    'dist/**',
    'node_modules/**',
    'storybook-static/**',
    '**/*.d.ts',
  ],
}, ...storybook.configs["flat/recommended"]];