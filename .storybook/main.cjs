module.exports = {
    stories: ['../**/*.stories.@(js|jsx|ts|tsx|mdx)', '../**/stories.@(js|jsx|ts|tsx)'],
    addons: [
        '@storybook/preset-scss',
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        'storybook-dark-mode',
    ],
};
