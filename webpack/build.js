const buildCommonConfig = require("./common");

module.exports = {
  ...buildCommonConfig(),
  mode: "production"
};
