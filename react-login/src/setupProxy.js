const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(createProxyMiddleware(['/heima_ssm_web_war_exploded'], {
    target: 'http://8081.max.com',
    // target: 'http://127.0.0.1:8081',
    changeOrigin: true,
  }))
}