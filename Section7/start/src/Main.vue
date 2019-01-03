<template>
    <div>
        <div class="col-xs-12 col-sm-6">
                <ul class="list-group">
                    <li class="list-group-item"
                            v-for="index in 5">
                        Server #{{ index }}
                    </li>
                </ul>
            </div>
            <div class="col-xs-12 col-sm-6">
                <p>Server Details are currently not updated</p>
                <button v-on:click="show">Show alert</button>
            </div>
    </div>
</template>
<script>
export default {
    methods:{
        show(){
            
        }
    }
}
</script>
<style>

</style>
