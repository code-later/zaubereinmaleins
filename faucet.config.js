module.exports = {
  js: [{
    source: "./src/js/app.js",
    target: "./public/app.js"
  }],
  sass: [{
    source: "./src/scss/app.scss",
    target: "./public/app.css"
  }],
  // static: [{
  //   source: "./src/images",
  //   target: "./public/images"
  // }],
  watchDirs: ["./src"]
};