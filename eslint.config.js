import js from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsparser from "@typescript-eslint/parser";
import astro from "eslint-plugin-astro";
import globals from "globals";

export default [
  js.configs.recommended,

  {
    files: ["**/*.{js,ts}"],
    plugins: {
      "@typescript-eslint": tseslint,
    },
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
      globals: {
        ...globals.node,
        ...globals.browser,
        NodeListOf: "readonly",
        HTMLElement: "readonly",
        HTMLButtonElement: "readonly",
      },
    },
    rules: {
      ...tseslint.configs.recommended.rules,

      indent: ["error", 2],
      quotes: ["error", "double"],
      semi: ["error", "always"],
      "prefer-const": "error",
      "no-var": "error",
      "object-shorthand": "error",
      "prefer-arrow-callback": "error",
    },
  },
  ...astro.configs["flat/recommended"],
  {
    files: ["**/*.astro"],
    languageOptions: {
      globals: {
        ...globals.browser,
        NodeListOf: "readonly",
        HTMLElement: "readonly",
        HTMLButtonElement: "readonly",
      },
    },
    rules: {
      indent: ["error", 2],
      quotes: ["error", "double"],
    },
  },
  {
    files: ["eslint.config.js"],
    rules: {
      indent: "off",
    },
  },
  {
    ignores: [
      "node_modules/**",
      "dist/**",
      "build/**",
      ".git/**",
      ".astro/**",
    ],
  },
];
