console.log('加载config')
module.exports = {
  outputDir: 'dist',   //build输出目录
  assetsDir: 'assets', //静态资源目录（js, css, img）
  lintOnSave: false, //是否开启eslint
  // runtimeCompiler: true, //关键点在这 
  devServer: {
    open: false, //是否自动弹出浏览器页面
    host: "localhost", 
    // port: '8081',
    https: false,
    hotOnly: false, 
    // proxy: 'http://localhost:3000'
  }
}

console.log('config')