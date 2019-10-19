import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import router from './router'
import store from './store'

// 自适应布局，pc 端不计算 rem，固定为 640 / 16
! function (e) {
  function t() {
      var ua = e.navigator.userAgent;
      if (ua.indexOf('iPhone') > -1 || ua.indexOf('Android') > -1) {
          e.rem = m.getBoundingClientRect().width / 16, m.style.fontSize = e.rem + "px"
      } else {
          e.rem = 640 / 16;
          m.style.fontSize = e.rem + "px";
      }
  }
  var i, n = e.navigator.appVersion.match(/iphone/gi) ? e.devicePixelRatio : 1,
      a = 1 / n,
      m = document.documentElement,
      r = document.createElement("meta");
  if (e.dpr = n, e.addEventListener("resize", function () {
          clearTimeout(i), i = setTimeout(t, 300)
      }, !1), e.addEventListener("pageshow", function (e) {
          e.persisted && (clearTimeout(i), i = setTimeout(t, 300))
      }, !1), m.setAttribute("data-dpr", n), r.setAttribute("name", "viewport"), r.setAttribute("content",
          "initial-scale=" + a + ", maximum-scale=" + a + ", minimum-scale=" + a + ", user-scalable=no"), m
      .firstElementChild) m.firstElementChild.appendChild(r);
  else {
      var d = document.createElement("div");
      d.appendChild(r), document.write(d.innerHTML)
  }
  t()
}(window)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
