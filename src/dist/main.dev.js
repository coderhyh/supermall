"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./App.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import router from './router'
// import store from './store'
_vue["default"].config.productionTip = false;
new _vue["default"]({
  // router,
  // store,
  render: function render(h) {
    return h(_App["default"]);
  }
}).$mount('#app');