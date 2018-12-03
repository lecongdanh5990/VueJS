var vm1=new Vue({
  el: '#app',
  data:{
    title:"Master PHP and JS"
  },
  beforeCreate:function(){
    console.log('beforeCreate()');
  },
  created:function(){
    console.log('Created()');
  },
  beforeMount:function(){
    console.log('beforeMount()');
  },
  mounted:function(){
    console.log('mounted()');
  },
  beforeUpdate:function(){
    console.log('beforeUpdate()');
  },
  updated:function(){
    console.log('updated()');
  },
  beforeDestroy:function(){
    console.log('beforeDestroy()');
  },
  destroyed:function(){
    console.log('destroyed()');
  },
  methods:{
    destroy:function(){
      this.$destroy();
    }
  }

});
