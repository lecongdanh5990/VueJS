<template>
    <div class="row">
        <form action="">
            <div class="col-sm-8 col-sm-offset-2 col-sx-12 col-md-6 col-md-offset-3 form-group">
                <label for="">Quote</label>
                <textarea v-model="quote" class="form-control" cols="50" rows="2"></textarea>
            </div>
            <div class="col-sm-8 col-sm-offset-2 col-sx-12 col-md-6 col-md-offset-3 form-group">
                <button class="btn btn-primary" v-on:click.prevent="createNew">Add New Quote</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data:function(){
        return{
            quote:''
        }
    },
    methods:{
        createNew(){
            this.$emit('quoteWasAdded',this.quote);
            this.quote='';
        }
    }
}
</script>
<style>
    
</style>
