<template>
    <div>
        <h2>There are 4 people in my family</h2>
        <button v-on:click="num++">Increase number</button>
        <p>{{num}}</p>
    </div>
</template>
<script>
export default {
    props:['quote'],
    data:function(){
        return{
            num:0
        }
    }
}
</script>
<style scoped>
    
</style>
