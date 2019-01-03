import Vue from 'vue'
import App from './App.vue'

Vue.directive('highlight',{
  bind(el,binding,vnode){
    //el.style.backgroundColor='blue';
    //nhan value tu ben ngoai vao va output ra moi ghe nay
    //el.style.backgroundColor=binding.value;

    //nhan tt tu ben ngoai, xem no truyen vao bien gi luon
    var delay=0;
    if(binding.modifiers['delayed']){
      delay=3000;
    }
    
    setTimeout(()=>{
      if(binding.arg=='background'){
        el.style.backgroundColor=binding.value;
      }
      else{
        el.style.color=binding.value;
      }
    },delay);

    
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
