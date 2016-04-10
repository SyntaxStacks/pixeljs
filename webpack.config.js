module.exports = {
  context: __dirname + "/lib",
  entry: ["./engine.js"],
  output: {
    path: __dirname + "/dist",
    filename: "pixel.js"
  }
}
