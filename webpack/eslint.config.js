import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier/flat";

export default defineConfig([
    eslintConfigPrettier,
	{
		files: ["**/*.js"],
		plugins: {
			js,
		},
		extends: ["js/recommended", "prettier"],
		rules: {
			"no-unused-vars": "warn",
			"no-undef": "warn",
		},
	},
]);
