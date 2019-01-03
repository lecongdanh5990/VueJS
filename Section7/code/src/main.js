import Vue from 'vue'
import App from './App.vue'


Vue.component('my-com',{
  data:function(){
    return{
      status:"fine"
    }
  },
  template:'<p>MASTER STATUS: {{status}}</p>'
});
new Vue({
  el: '#app',
  
})
