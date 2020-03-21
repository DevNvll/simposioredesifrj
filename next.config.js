const path = require("path")
const withImages = require("next-images")
const optimizedImages = require("next-optimized-images")

module.exports = optimizedImages({
  webpack(config, options) {
    config.resolve.alias["components"] = path.join(
      __dirname,
      "./src/components"
    )
    config.resolve.alias["session"] = path.join(__dirname, "session")
    return config
  }
})
