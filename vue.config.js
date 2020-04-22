// vue.config.js
module.exports = {
  css: {
    loaderOptions: {
      // 全局注入scss变量  免去每个页面import
      scss: {
        prependData: '@import "~@/style/var.scss";'
      }
    }
  }
};
