<template>
    <div class="col-xs-12 col-sm-6">
        <p v-if="!server">Please select the server</p>
        <p v-else> Server id is {{server.id}} and it's status is {{server.status}}</p>
        <button @click="resetStatus">Change to normal</button>
    </div>

</template>

<script>
    import{serverBus} from '../../main.js';
    export default{
        data:function(){
            return{
                server:null
            }
        },
        methods:{
            resetStatus(){
                this.server.status="normal";
            }
        },
        created(){
            serverBus.$on('serverSelected',(server)=>{
                this.server=server;
            });
        }
    }
</script>

<style>

</style>
