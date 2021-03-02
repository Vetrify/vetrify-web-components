const path = require('path');
const includePath = path.resolve(__dirname, '..');

module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links', 
    '@storybook/addon-essentials',
    '@storybook/preset-scss',
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
    '@storybook/addon-controls',
    '@storybook/addon-viewport'],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve('babel-loader'),
    });

    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  },
};
