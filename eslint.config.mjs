// @ts-check
// import astroEslintParser from 'astro-eslint-parser';
import astroParser from 'astro-eslint-parser';
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import globals from 'globals';

const extraFileExtensions = ['.astro'];

const astroConfig = tseslint.config(
    js.configs.recommended,
    ...tseslint.configs.recommended,
    // ...tseslint.configs.recommendedTypeChecked,
    ...tseslint.configs.stylistic,
    {
        languageOptions: {
            parser: tseslint.parser,
            parserOptions: {
                parserServices: true,
                tsconfigRootDir: import.meta.dirname
                // ecmaFeatures: {
                //   jsx: true,
                // },
            },
            globals: {
                ...globals.browser,
                ...globals.node
            }
        }
    },
    {
        files: ['**/*.astro'],

        languageOptions: {
            parser: astroParser,
            parserOptions: {
                parser: tseslint.parser,
                parserServices: true,
                tsconfigRootDir: import.meta.dirname,
                extraFileExtensions
            }
        }
    },
    {
        rules: {
            '@typescript-eslint/consistent-type-definitions': 'off'
        }
    },

    {
        linterOptions: {
            reportUnusedDisableDirectives: 'warn'
        }
    },

    {
        files: ['**/*.js'],
        extends: [tseslint.configs.disableTypeChecked]
    },
    {
        ignores: ['**/temp.js', 'dist/', '**/*.d.ts', '**/.*']
    }
);
console.log('dirname ' + import.meta.dirname);
export default astroConfig;
