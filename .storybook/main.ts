module.exports = {
  stories: ['../src/**/*.stories.@(tsx|mdx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app',
    '@storybook/addon-knobs',
    '@whitespace/storybook-addon-html',
  ],
  typescript: {
    check: false,
  },
}
