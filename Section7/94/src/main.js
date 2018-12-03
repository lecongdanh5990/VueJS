import Vue from 'vue'
import App from './App.vue'
import Home from './Home.vue'

Vue.component('my-salary',Home);
new Vue({
  el: '#app',
  render: h => h(App)
})
//APP la thanh nien chu chot o day, may thanh nien kia ta goi ra chi de
//lam nen cho no thoi