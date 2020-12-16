const path = require('path');
const webpackConfig = require('../webpack.config.js');

module.exports = {
  "stories": [
    "../client/app/components/**/*.stories.mdx",
    "../client/app/components/**/*.stories.@(js|jsx|ts|tsx)",
    "../client/app/components/**/*.story.@(js|jsx|ts|tsx)",
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  webpackFinal: (config) => {
    return {
      ...config,
      module: {
        ...config.module,
        rules: webpackConfig({ NODE_ENV: 'development' }).module.rules
      },
    };
  },
}
