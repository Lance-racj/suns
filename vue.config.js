const VueAutoRoutingPlugin = require("vue-auto-routing/lib/webpack-plugin");

module.exports = {
  transpileDependencies: true,
  lintOnSave: false,
  chainWebpack: config => {
    config.plugin("vue-auto-routing").use(VueAutoRoutingPlugin, [
      {
        pages: "src/views",
        importPrefix: '@/views/',
        nested: true
      }
    ]);
  },
  // devServer: {
  //   port: 3000
  // },
  // publicPath: "./"
};
