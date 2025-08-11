const {
  defineConfig
} = require('@vue/cli-service')
const path = require('path')

module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: config => {
    config
      .plugin('define')
      .tap(definitions => {
        Object.assign(definitions[0], {
          __VUE_OPTIONS_API__: 'true',
          __VUE_PROD_DEVTOOLS__:
            'false',
          __VUE_PROD_HYDRATION_MISMATCH_DETAILS__:
            'false'
        })
        return definitions
      })
  },
  configureWebpack: {
    resolve: {
      alias: {
        // 自定义别名
        '@': path.resolve(
          __dirname,
          'src'
        ), // 将 '@' 映射到 'src' 目录
        assets: path.resolve(
          __dirname,
          'src/assets'
        ), // 'assets' 映射到 'src/assets'
        components: path.resolve(
          __dirname,
          'src/components'
        ) // 'components' 映射到 'src/components'
      }
    }
  }
})
