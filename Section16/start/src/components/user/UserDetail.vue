<template>
    <div>
        <h3>Some User Details</h3>
        <p>This User has ID is: {{$route.params.id}}</p>
        <!-- <router-link 
            tag="button" 
            v-bind:to="'/user/'+$route.params.id+'/edit'">Edit User</router-link> -->
        <router-link 
            tag="button" 
            v-bind:to="link">Edit User</router-link>
            
    </div>
</template>

<script>
export default {
    data:function(){
        return{
            link:{
                name:'userEdit',
                    params:{id:this.$route.params.id},
                    query:{locate:'en',page:100},
                    hash:"#data"
            }
        }
    },
    beforeRouteEnter(to,from,next){
        if(true){
            next();
        }
        else{
            next(false);
        }
    }
}
</script>
