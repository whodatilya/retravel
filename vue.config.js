const { defineConfig } = require('@vue/cli-service')
const path = require("path");
module.exports = defineConfig({
  lintOnSave: true,
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, 'src/')
      }
    },
    output: {
      filename: '[name].js',
      chunkFilename: '[name].js'
    }
  },
  transpileDependencies: [
    'quasar'
  ],

  pluginOptions: {
    quasar: {
      importStrategy: 'kebab',
      rtlSupport: false
    }
  }
})
