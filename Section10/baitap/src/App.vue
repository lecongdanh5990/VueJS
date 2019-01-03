<template>
    <div class="container">
        <my-match></my-match>
        <my-form></my-form>
        <my-result></my-result>
        <my-info></my-info>
    </div>
</template>

<script>
    import Match from './Components/Match';
    import Form from './Components/Form';
    import Result from './Components/Result';
    import Info from './Components/Info';
    export default {
        components:{
            myMatch:Match,
            myForm:Form,
            myResult:Result,
            myInfo:Info
        }
    }
</script>

<style>
</style>
