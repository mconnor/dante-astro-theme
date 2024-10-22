// @ts-check
import astroParser from 'astro-eslint-parser';
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import globals from 'globals';
import eslintPluginAstro from 'eslint-plugin-astro';

export default tseslint.config(
    js.configs.recommended,
    // ...tseslint.configs.recommended,
    ...tseslint.configs.recommendedTypeChecked,
    ...tseslint.configs.stylisticTypeChecked,

    {
        languageOptions: {
            parser: tseslint.parser,
            parserOptions: {
                projectService: true,
                tsconfigRootDir: import.meta.dirname,
                ecmaFeatures: {
                    jsx: true
                }
            },
            globals: {
                ...globals.browser,
                ...globals.node
            }
        }
    },
    {
        files: ['**/*.astro'],
        extends: [tseslint.configs.disableTypeChecked, ...eslintPluginAstro.configs.recommended],
        // ...eslintPluginAstro.configs.recommended,
        languageOptions: {
            parser: astroParser,
            parserOptions: {
                parser: tseslint.parser,
                ecmaFeatures: {
                    jsx: true
                }
            }
        }
    },
    {
        rules: {
            '@typescript-eslint/consistent-type-definitions': ['warn', 'type'],
            '@typescript-eslint/triple-slash-reference': 'off'
            // '@typescript-eslint/explicit-module-boundary-types': 'warn' // Added rule for explicit types
        }
    },

    {
        linterOptions: {
            reportUnusedDisableDirectives: 'warn'
        }
    },

    {
        files: ['**/*.js', '**/*.mjs'],
        extends: [tseslint.configs.disableTypeChecked]
    },

    {
        ignores: ['**/temp.js', 'dist/', '.prettierrc.mjs', '.astro']
    }
);
