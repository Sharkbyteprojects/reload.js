const path = require("path");

module.exports = {
  entry: "./src/reloader.browser.js",
  output: {
    path: path.resolve(__dirname, "."),
    filename: "reloader.browser.js",
  },
};
