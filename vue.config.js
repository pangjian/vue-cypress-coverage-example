const path = require('path')
const resolve = dir => path.join(__dirname, dir)
module.exports = {
  /*
  chainWebpack: config => {
    config.module
      .rule('istanbul')
      .test(/\.(js|vue)$/)
      .enforce('post')
      .include
      .add(resolve('src'))
      .end()
      .use('istanbul-instrumenter-loader')
      .loader('istanbul-instrumenter-loader')
      .options({ esModules: true })
      .end()
  }
  */
}
