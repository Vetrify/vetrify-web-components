const path = require('path');
const includePath = path.resolve(__dirname, '..');

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-scss"
  ],
  webpackFinal: async config => {

    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve('babel-loader'),
    });

    // config.module.rules.push({
    //   test: /\.css$/,
    //   use: ['style-loader', 'css-loader'],
    //   include: includePath,
    // });

    // config.module.rules.push({
    //   test: /\.scss$/,
    //   use: ['style-loader', 'css-loader', 'sass-loader'],
    //   include: includePath,
    // });



    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  },
}