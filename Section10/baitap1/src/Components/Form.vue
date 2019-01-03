<template>
    <div class="form">
        <textarea v-model="formContent" class="form_text-area" cols="100" rows="6"></textarea>
        <p></p>
        <button v-on:click="increaseNum" class="btn btn-danger">Add Quote</button>
        <p>Num of quote is:{{numOfQuote}}</p>
        <p>Content is:{{formContent}}</p>
    </div>
</template>
<script>
import {eventBus} from '../main';

    export default {
        props: ['numOfQuote','content'],
        data:function(){
            return{
                formContent:""
            }
        },
        methods: {
            increaseNum() {
                this.numOfQuote++;
                this.content=this.formContent;
                this.$emit('numOfQuoteWasIncreased', this.numOfQuote);
                this.$emit('contentWasChanged', this.content);
                //eventBus.$emit('numWasIncrease', this.numOfQuote);
                //eventBus.changeAge(this.userAge);
            }
        }
    }
</script>
<style>
    .form{
        width: 100%;
        margin:2rem 5rem;
        text-align: center;
    }
    .form_text-area{
        margin:0rem auto;
        display: inline-block;
    }
    .btn{
        margin: 1rem auto;
        display: inline-block;
    }
</style>
