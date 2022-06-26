const buildCommonConfig = require("./common");

module.exports = {
  ...buildCommonConfig(),
  mode: "development",
  devtool: "source-map",
  devServer: {
    compress: true,
    port: 4000,
    proxy: {
      '/api': 'http://localhost:3000',
    },
  },
};
