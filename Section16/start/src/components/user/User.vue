<template>
    <div>
        <h1>The User Page</h1>
        <hr>
        <button v-on:click="navigateToHome">Go to home</button>
        <hr>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    // data:function(){
    //     return{
    //         id:this.$route.params.id,
    //     }
    // },
    // watch:{
    //     '$route'(to,from){
    //         this.id=to.params.id;
    //     }
    // },
    methods:{
        navigateToHome(){
            this.$router.push('/');
        }
    }
}
</script>
