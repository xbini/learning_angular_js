const buildCommonConfig = require("./common");

const commonConfig = buildCommonConfig();

module.exports = {
  ...commonConfig,
  mode: "development",
  devtool: "source-map",
  module: {
    rules: [
      ...commonConfig.module.rules,
      {
        test: /\.css$/i,
        use: [ "style-loader", "css-loader" ],
      }
    ],
  },
  devServer: {
    compress: true,
    port: 1001,
    proxy: {
      '/api': 'http://localhost:1100',
    },
  },
};
