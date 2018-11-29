new Vue({
	el: '#app',
	data: {
        playerHealth:100,
        monsterHealth:100,
        gameIsRunning:false,
        turns:[],
    },
    methods:{
        startGame:function(){
            this.gameIsRunning=true;
            this.playerHealth=100;
            this.monsterHealth=100;
            this.turns=[];
        },

        attack:function(){
            var damage=this.calulateDamage(10,3);
            this.monsterHealth-=damage;
            this.turns.unshift({
                isPlayer:true,
                text:'Player hits monster for '+ damage

            });
            if(this.checkWin()){
                return;
            }
            this.monsterAttack();
        },
        specialAttack:function(){
            var damage=this.calulateDamage(20,10);
            this.monsterHealth-=damage;
            this.turns.unshift({
                isPlayer:true,
                text:'Player hits monster for '+ damage

            });
            if(this.checkWin()){
                return;
            }
            this.monsterAttack();
        },
        heal:function(){
            if(this.playerHealth<=10){
                this.playerHealth+=10;
            }
            else{
                this.playerHealth=100;
            }
            this.turns.unshift({
                isPlayer:true,
                text:'Player heals for 10'

            });

            this.monsterAttack();
        },
        giveUp:function(){
            this.gameIsRunning=false;
        },
        calulateDamage:function(max, min){
            return Math.max(Math.floor(Math.random()*max)+1, min);
        },
        monsterAttack(){
            var damage=this.calulateDamage(12,5);
            this.playerHealth-=damage;
            this.checkWin();
            this.turns.unshift({
                isPlayer:false,
                text:'Monster hits Player for '+ damage

            });
        },
        checkWin:function(){
            if(this.monsterHealth<=0){
                if(confirm('You WON!!! New Game?')){
                    this.startGame();
                }
                else{
                    this.gameIsRunning=false;
                }
                return true;
            }
            else if(this.playerHealth<=0){
                if(confirm('You LOST!!! New Game?')){
                    this.startGame();
                }
                else{
                    this.gameIsRunning=false;
                }
                return true;
            }
            return false;
        }
    }
})