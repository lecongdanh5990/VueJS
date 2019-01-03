<template>
    <div class="form">
        <textarea name="" class="form_text-area" cols="100" rows="6"></textarea>
        <p></p>
        <button v-on:click="increaseNum" class="btn btn-danger">Add Quote</button>
    </div>
</template>
<script>
import {eventBus} from '../main';

    export default {
        props: ['num'],
        methods: {
            increaseNum() {
                this.num++;
                //this.$emit('numWasIncrease', this.userAge);
                eventBus.$emit('numWasIncrease', this.num);
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
