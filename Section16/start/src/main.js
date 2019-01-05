import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import {routes} from './route'

Vue.use(VueRouter);

const router=new VueRouter({
  routes:routes,
  mode:'history',
  scrollBehavior(to,from,savePosition){
    return {x:0,y:700};
  }
});

router.beforeEach((to,from,next)=>{
  console.log('Before go to inside');
  next();
});

new Vue({
  el: '#app',
  //vi ES6 nen ta co the ghi router khong thi no cug hieu, vi key va value giog nhau
  router:router,
  render: h => h(App)
})
