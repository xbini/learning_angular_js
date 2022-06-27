const buildCommonConfig = require("./common");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const commonConfig = buildCommonConfig();
module.exports = {
  ...commonConfig,
  mode: "production",
  module: {
    rules: [
      ...commonConfig.module.rules,
      {
        test: /\.css$/i,
        use: [ MiniCssExtractPlugin.loader, "css-loader" ],
      }
    ],
  },
  plugins: [
    ...commonConfig.plugins,
    new MiniCssExtractPlugin({
      filename: "[name].[chunkhash].css",
    })
  ]
};
