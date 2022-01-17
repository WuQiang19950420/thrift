const path = require('path');
module.exports = {
  outputDir: './build',
  devServer: {
    disableHostCheck: true,
    port: 8080,
    proxy: {
      '^/api': {
        target: 'http://assistant.keira.cn',
        pathRewrite: {
          '^/api': ''
        },
        changeOrigin: true
      }
    }
  },
  chainWebpack: (config) => {
    config.resolve.alias.set('@', path.resolve(__dirname, 'src')).set('views', '@/views').set('assets', '@/assets');
  }
};
