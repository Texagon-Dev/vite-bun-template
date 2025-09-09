import js from '@eslint/js'
import prettierConfig from 'eslint-config-prettier'
import importPlugin from 'eslint-plugin-import'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import prettierPlugin from 'eslint-plugin-prettier'
import pluginReact from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  // Global ignores
  { ignores: ['dist', 'node_modules'] },

  // Base configs
  js.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,

  // Main rules for project files
  {
    files: ['**/*.{js,mjs,cjs,ts,tsx,jsx}'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        projectService: true,
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      react: pluginReact,
      import: importPlugin,
      'jsx-a11y': jsxA11y,
      prettier: prettierPlugin,
    },
    settings: {
      react: { version: 'detect' },
      'import/resolver': {
        typescript: true,
        node: true,
      },
    },
    rules: {
      // React import not required with new JSX transform
      'react/react-in-jsx-scope': 'off',
      // React hooks / refresh
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': 'off',

      // Import hygiene & organization
      'import/first': 'error',
      'import/newline-after-import': 'error',
      'import/no-duplicates': 'error',
      'import/no-self-import': 'error',
      'import/no-cycle': 'error',
      'no-duplicate-imports': 'error',
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            ['parent', 'sibling'],
            'index',
            'object',
            'type',
          ],
          'newlines-between': 'always',
          pathGroups: [
            { pattern: '@/**', group: 'internal', position: 'after' },
          ],
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],

      // Accessibility
      ...jsxA11y.configs.recommended.rules,

      // Security & safety
      'no-eval': 'error',
      'no-implied-eval': 'error',
      'no-new-func': 'error',
      'no-script-url': 'error',
      'react/no-danger': 'warn',
      'react/no-danger-with-children': 'error',

      // React performance & quality
      'react/jsx-no-constructed-context-values': 'error',
      'react/jsx-no-useless-fragment': 'warn',
      'react/jsx-boolean-value': ['error', 'never'],
      'react/jsx-curly-brace-presence': [
        'error',
        { props: 'never', children: 'never' },
      ],
      'react/jsx-fragments': ['error', 'syntax'],
      'react/jsx-no-bind': [
        'warn',
        { allowArrowFunctions: true, allowFunctions: false, allowBind: false },
      ],
      'react/no-unstable-nested-components': 'error',
      'react/self-closing-comp': 'error',

      // Code quality
      'prefer-const': 'error',
      'no-var': 'error',
      'no-useless-return': 'warn',
      'object-shorthand': 'warn',
      'prefer-template': 'warn',
      'prefer-arrow-callback': 'warn',
      'arrow-body-style': ['warn', 'as-needed'],

      // Async/promise patterns & error prevention
      'no-async-promise-executor': 'error',
      'no-await-in-loop': 'warn',
      'prefer-promise-reject-errors': 'error',
      'no-unreachable': 'error',
      'no-constant-condition': 'error',
      'no-dupe-keys': 'error',
      'no-duplicate-case': 'error',
      'valid-typeof': 'error',

      // Prettier as lint rule
      'prettier/prettier': 'error',
      // Explicit return types are handled in TS-only override
      '@typescript-eslint/explicit-function-return-type': 'off',
    },
  },

  // Relax return type rule for React component files
  {
    files: ['**/*.tsx', '**/*.jsx'],
    rules: {
      '@typescript-eslint/explicit-function-return-type': 'off',
    },
  },

  // TypeScript-typed rules (apply only to TS files)
  {
    files: ['**/*.ts'],
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'all',
          argsIgnorePattern: '^_',
          vars: 'all',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
      '@typescript-eslint/explicit-function-return-type': [
        'warn',
        { allowExpressions: true, allowTypedFunctionExpressions: true },
      ],
      '@typescript-eslint/strict-boolean-expressions': [
        'warn',
        {
          allowNullableObject: true,
          allowNullableBoolean: true,
          allowNullableString: true,
          allowNumber: true,
        },
      ],
      '@typescript-eslint/no-floating-promises': 'warn',
      '@typescript-eslint/no-misused-promises': 'warn',
      '@typescript-eslint/consistent-type-imports': [
        'error',
        { prefer: 'type-imports', fixStyle: 'inline-type-imports' },
      ],
      '@typescript-eslint/no-import-type-side-effects': 'error',
      '@typescript-eslint/promise-function-async': 'error',
    },
  },

  // Turn off TypeScript project service for JS config files to avoid parser errors
  {
    files: ['*.config.{js,cjs,mjs}', 'tailwind.config.js', 'postcss.config.js'],
    languageOptions: {
      parserOptions: {
        projectService: false,
      },
    },
    rules: {},
  },

  // Place the Prettier config last to disable stylistic conflicts
  prettierConfig
)
