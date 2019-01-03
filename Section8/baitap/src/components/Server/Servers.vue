<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <app-server v-for="server in servers"
             v-bind:server="server">

            </app-server>
        </ul>
    </div>
</template>

<script>
    import Server from './Server.vue';

    export default{
        data:function(){
            return{
                servers:[
                    {id:1,status:'normal'},
                    {id:2,status:'critical'},
                    {id:3,status:'good'},
                    {id:4,status:'awesome'}
                ]
            }
        },
        components:{
            //appServer:Server kieu nao cung duoc
            'app-server':Server
        }
    }
</script>

<style>

</style>
