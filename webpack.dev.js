const common = require("./webpack.common.js");

module.exports = Object.assign({}, common, {
  mode: "development",
  devServer: {
    static: "dist",
  },
});
