<template>
    <div>
        <h3>Edit the User</h3>
        <p>Locate:{{$route.query.locate}}</p>
        <p>Page:{{$route.query.page}}</p>
        <hr>
        <button class="btn btn-info" v-on:click="confirm=true">Confirm</button>
        <div style="height:700px"></div>
        <div id="data">Some awesome thing here</div>
    </div>

</template>

<script>
export default {
    data:function(){
        return{
            confirm:false
        }
    },
    methods:{

    },
    beforeRouteLeave(to,from,next){
        if(this.confirm){
            next();
        }
        else{
            if(confirm('Are you ok???')){
                next();
            }
            else{
                next(false);
            }
        }
    }
}
</script>
