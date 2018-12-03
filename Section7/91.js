Vue.component('my-com',{
    data:function(){
        return{
            status:"Fine"
        }
    },
    template:'<p>I am:{{status}}</p>'
});

//thanh nien nay la root instanve nen moi component deu duoc goi boi no
//va no xem cac component nhu cac element trong trang
new Vue({
    el:"#app",
});