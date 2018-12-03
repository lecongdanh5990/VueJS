//ta co the tao data ben ngoai va truyen vao ben trong no cung duoc
//moi component thi co 1 object rieng, nen no se hoat dong ok 
var data={
    
}

Vue.component('my-com',{
    data:function(){
        return {
            status:"Lazy",
            think:"Actively"
        };
    },
    template:'<p>I am:{{status}} and I think {{think}} <button v-on:click="showThink">Show Think</button></p>',
    methods:{
        showThink:function(){
            this.think="Carefully";
        }
    }
});

new Vue({
    el:"#app",
});