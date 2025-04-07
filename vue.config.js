const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

const webpack = require('webpack');

module.exports = defineConfig({
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        _VUE_PROD_HYDRATION_MISMATCH_DETAILS_: 'false',
      })
    ],
  },
});