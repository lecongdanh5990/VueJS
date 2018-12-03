var vm1=new Vue({
  data: {
    title: 'The VueJS Instance',
    showParagraph: false
  },
  methods: {
    show: function() {
      this.showParagraph = true;
      this.updateTitle('The VueJS Instance (Updated)');
      //console.log(this.$refs);
      this.$refs.myButton.innerText='Test';
    },
    updateTitle: function(title) {
      this.title = title;
    }
  },
  computed: {
    lowercaseTitle: function() {
      return this.title.toLowerCase();
    }
  },
  watch: {
    title: function(value) {
      alert('Title changed, new value: ' + value);
    }
  }
});
vm1.$mount('#danh1');
//console.log(vm1);
vm1.$refs.heading.innerText="New Title";
var data={
  title: 'The Second Instance, Master PHP and JS',
    showParagraph: false
}
setTimeout(function(){
  vm1.title="Be changed by timer";
},3000);

Vue.component('tramtram',{
  template:'<h1>YOU NEVER FAIL UNTIL YOU STOP TRYING</h1>'
});

var vm2=new Vue({
  el: '#danh2',
  data:data,
  methods: {
    onChange: function() {
      vm1.title="New Title ";
    },
    updateTitle: function(title) {
      this.title = title;
    }
  },
});

console.log(vm2.$data.title);
var vm3=new Vue({
  el:"#tramtram",
  template:'<h1>MASTER PHP AND JS</h1>'
});
//vm3.$mount();
//document.getElementById('tram').appendChild(vm3.$el);
