export const fruitMixin={
    data:function(){
        return{
            fruits:['Apple','Mango','Melon','Banana'],
            filterText:''
        }
    },
    
    computed:{
        filteredFruits(){
            return this.fruits.filter((element)=>{
                return element.match(this.filterText);
            });
        }
    }
}