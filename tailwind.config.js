module.exports = {
    content: [
        './web/*.md',
        './web/**/*.md',
        './web/**/*.js',
        './web/**/*.html',
        './web/**/*.svg',

    ],
    theme: {
        extend: {
            colors: {
                "fg": "var(--theme-foreground)",
                "bg": "var(--theme-background)",
                "bg-alt": "var(--theme-background-alt)",
                "fg-alt": "var(--theme-foreground-alt)",
                "fg-muted": "var(--theme-foreground-muted)",
                "fg-faint": "var(--theme-foreground-faint)",
                "fg-fainter": "var(--theme-foreground-fainter)",
                "fg-faintest": "var(--theme-foreground-faintest)",
                "fg-focus": "var(--theme-foreground-focus)",
            },
        },
    },
    plugins: [],
    corePlugins: {
        preflight: false,
    }
};
