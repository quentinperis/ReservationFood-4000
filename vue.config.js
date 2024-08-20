const path = require('path');

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'), 
        '@assets': path.resolve(__dirname, 'src/assets'), 
        '@components': path.resolve(__dirname, 'src/components'), 
        '@views': path.resolve(__dirname, 'src/views'), 
        '@stores': path.resolve(__dirname, 'src/stores')
      }
    }
  },


  devServer: {
    port: 8080, 
    open: true, 
    proxy: {
   
      '/api': {
        target: 'http://localhost:3000', 
        changeOrigin: true,
        pathRewrite: { '^/api': '' }
      }
    }
  },


  publicPath: process.env.NODE_ENV === 'production' ? '/your-app/' : '/',
  outputDir: 'dist',
  assetsDir: 'assets',


  lintOnSave: false, 
  productionSourceMap: false 
};
