new Vue({
	el: '#app',
	data: {
        healthOfPlayer:100,
        healthOfMonster:100,
        play:false,
        numOfHeal:0,
        numOfSuper:0,
        result:0,
        controlWidthPlayer:{
            width:'100%'
        },
        controlWidthMonster:{
            width:'100%'
        },
        cars:['Honda','Yamaha','BMW','MAZDA'],
        vegetable:['orange','apple','banana','coconut'],
        persons:[
            {name:'danh',age:27,add:'hcmct'},
            {name:'tram',age:20,add:'bdpro'},
            {name:'thao',age:15,add:'vtpro'},
        ]
    },
    methods:{
        start:function(){
            var vm=this;
            vm.play=true;
            vm.healthOfMonster=100;
            vm.healthOfPlayer=100;
            vm.numOfHeal=0,
            vm.numOfSuper=0,
            vm.result=0,
            vm.controlWidthMonster.width=100+'%';
            vm.controlWidthPlayer.width=100+'%';
        },

        hit:function(damage){
            var vm=this;
            if(vm.healthOfPlayer<=0&&vm.healthOfMonster>0){
                alert("Thua rồi người ơi");
                vm.result=-1;
                return;
            }
            if(vm.healthOfMonster<=0&&vm.healthOfPlayer>0){
                alert("Thắng rồi người ơi");
                vm.result=1;
                return;
            }
            if(vm.healthOfMonster<=0&&vm.healthOfPlayer<=0){
                if(vm.healthOfMonster<vm.healthOfPlayer){
                    alert("Thắng rồi người ơi");
                    vm.result=1;
                }
                else{
                    alert("Thua rồi người ơi");
                    vm.result=-1;
                }
                return;
            }
            if(damage==20) vm.numOfSuper++;
            if(vm.numOfSuper>1&&damage==20){
                alert("Bạn đã hết quyền tăng sức mạnh");
                return;   
            }
            vm.healthOfPlayer-=Math.floor((Math.random() * damage) + 1);
            vm.healthOfMonster-=Math.floor((Math.random() * damage) + 1);
            vm.controlWidthMonster.width=vm.healthOfMonster+'%';
            vm.controlWidthPlayer.width=vm.healthOfPlayer+'%';
            
        },
        heal:function(){
            var vm=this;
            if(vm.result!=0) return;   
            vm.numOfHeal++;
            if(vm.numOfHeal>1){
                alert("Bạn đã hết quyền trợ giúp");
                return;   
            }
            vm.healthOfPlayer+=Math.floor((Math.random() * 10) + 1);
            vm.controlWidthPlayer.width=vm.healthOfPlayer+'%';
        }
    }
})