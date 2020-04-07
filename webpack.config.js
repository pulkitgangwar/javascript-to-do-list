const path = require("path");

module.exports = {
  mode: "production",
  entry: path.resolve(__dirname, "./src/app.js"),
  output: {
    path: path.resolve(__dirname, "./public"),
    filename: "bundle.js",
  },
  devtool: "eval-cheap-module-source-map",
};
