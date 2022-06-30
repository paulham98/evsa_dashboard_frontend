const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
});
const proxy = {
  '/auth': {
    target: `${process.env.VUE_APP_AUTH_BASE_URL ?? process.env.VUE_APP_BASE_URL}`
  },
  '/order': {
    target: `${process.env.VUE_APP_ORDER_BASE_URL ?? process.env.VUE_APP_BASE_URL}`
  },
  '/product': {
    target: `${process.env.VUE_APP_PRODUCT_BASE_URL ?? process.env.VUE_APP_BASE_URL}`
  },
  '/shipment': {
    target: `${process.env.VUE_APP_SHIPMENT_BASE_URL ?? process.env.VUE_APP_BASE_URL}`
  },
}

console.log(proxy)

module.exports = {
  devServer: {
    proxy: `http://15.165.32.56:30423`
  }
};
