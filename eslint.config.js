import js from '@eslint/js';
import pluginVue from 'eslint-plugin-vue';
import eslintConfigPrettier from 'eslint-config-prettier';
import globals from 'globals';

export default [
  js.configs.recommended,

  ...pluginVue.configs['flat/recommended'],
    {

  },

  eslintConfigPrettier,

  {
    files: ['**/*.{js,vue}'],

    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },

    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'off',
      'vue/multi-word-component-names': 'off',
      'vue/require-default-prop': 'off',
    },
  },
];