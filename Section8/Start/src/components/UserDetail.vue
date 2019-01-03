<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>Username is:{{username}}</p>
        <button v-on:click="resetName">Reset the name</button>
    </div>
</template>

<script>
    // export default{
    //     props:['username']
    // }
    import {eventBus} from '../main';

    export default{
        props:{
            username:{
                type:String
            }
        },
        methods:{
            resetName(){
                this.username="LE CONG DANH";
                this.$emit('nameWasReset', this.username)
            }
        },
        created(){
            eventBus.$on('ageWasEdited',(data)=>{
                this.userAge=data;
            })
        }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
