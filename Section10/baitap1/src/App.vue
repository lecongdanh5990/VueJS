<template>
    <div class="container">
        <my-match >
            <div class="process-show"
                v-bind:style="{ width:numOfQuote*10+'%' }"
            >{{numOfQuote}}</div>
        </my-match>
        <p>num of quote is{{numOfQuote}}</p>
        <p>Content is this form is{{content}}</p>
        <my-form v-bind:numOfQuote="numOfQuote" 
        v-on:numOfQuoteWasIncreased="numOfQuote=$event"
        v-on:contentWasChanged="content=$event"></my-form>

        <my-result>
            <div v-for="content in contents" class="item">{{content}}</div>
        </my-result>
        <my-info></my-info>
    </div>
</template>

<script>
    import Match from './Components/Match';
    import Form from './Components/Form';
    import Result from './Components/Result';
    import Info from './Components/Info';
    export default {
        data:function(){
            return{
                numOfQuote:0,
                content:"",
                temContent:[]
            }
        },
        methods:{
            
        },
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
