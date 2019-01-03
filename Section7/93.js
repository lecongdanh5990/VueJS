//tao ra local component bang cach tao ra bien co cau truc y chang 1 compoennt
//sau do trong Vue instanve nao ta muon xai component do thi ta tien hanh khai bao
//con cai kia thi la component chung nen la thang nao muon xai cung duoc
var data={
    
}

var com={
    data:function(){
        return {
            status:"Lazy",
            think:"Actively"
        };
    },
    template:'<p>I am:{{status}} and I think {{think}} <button @click="showThink">Show Think</button></p>',
    methods:{
        showThink:function(){
            this.think="Carefully";
        }
    }
};

new Vue({
    el:"#app",
    components:{
        'my-com':com
    }
});

new Vue({
    el:"#app2",
});