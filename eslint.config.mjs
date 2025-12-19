import js from "@eslint/js";
import globals from "globals";

export default [
    js.configs.recommended,
    {
        files: ["**/*.js"],
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "script",
            globals: {
                ...globals.browser,
            },
        },
    rules: {
        "no-unused-vars": "warn",
        "no-undef": "error",
        "eqeqeq": "error",
        "no-console": "warn",
        "semi": ["error", "always"],
        "quotes": ["error", "single"],
        "indent": ["error", 4],
        "no-trailing-spaces": "error",
        },
    },
];
