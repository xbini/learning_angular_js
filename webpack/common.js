const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const nodeModulesPath = path.resolve(__dirname, "../node_modules")
const buildCommonConfig = () => {
  return {
    entry: {
      app: './src/app.js',
    },
    output: {
      clean: true,
      filename: "[name].[chunkhash].js",
      path: path.resolve(__dirname, '../build'),
    },
    optimization: {
      runtimeChunk: 'single',
      splitChunks: {
        cacheGroups: {
          common: {
            name: 'common',
            chunks: 'initial',
            minChunks: 2,
          },
          "angular-ui-router": {
            test: /[\\/]node_modules[\\/](angular-ui-router)[\\/]/,
            name: 'angular-ui-router',
            chunks: 'all',
          },
          angular: {
            test: /[\\/]node_modules[\\/](angular)[\\/]/,
            name: 'angular',
            chunks: 'all',
          },
          lodash: {
            test: /[\\/]node_modules[\\/](lodash)[\\/]/,
            name: 'lodash',
            chunks: 'all',
          },
          bootstrap: {
            test: /[\\/]node_modules[\\/](bootstrap)[\\/]/,
            name: 'bootstrap',
            chunks: 'all',
          },
        },
      },
    },
    module: {
      rules: [
        {
          test: /\.html$/i,
          loader: "html-loader",
          exclude: [ nodeModulesPath ]
        },
        {
          test: /\.js$/i,
          loader: "babel-loader",
          options: {
            presets: [
              [ '@babel/preset-env', { targets: "> 0.25%, not dead" } ]
            ]
          },
          exclude: [ nodeModulesPath ],
        },
      ],
    },
    resolve: {
      extensions: [ ".js", ".json", ".css" ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, '../src/app.html'),
        inject: 'body',
        scriptLoading: 'blocking'
      })
    ],
  }
}

module.exports = buildCommonConfig;
