import Vue from 'vue'
import App from './App.vue'
import Header from './Header.vue'
import Footer from './Footer.vue'
import Main from './Main.vue'

Vue.component('myheader',Header);
Vue.component('myfooter',Footer);
Vue.component('mymain',Main);

new Vue({
  el: '#app',
  render: h => h(App)
})
