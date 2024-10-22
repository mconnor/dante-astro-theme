/** @type {import("prettier").Config} */
export default {
    plugins: ['prettier-plugin-astro'],
    overrides: [
        {
            files: '*.astro',
            options: {
                parser: 'astro'
            }
        },
        {
            files: ['*.md', '*.mdx', '*.yaml'],
            options: {
                tabWidth: 2
            }
        }
    ],
    printWidth: 160,
    singleQuote: true,
    trailingComma: 'none',
    tabWidth: 4
};
