<template>
    <div class="match">
        <h1>Number of Quotes</h1>
        <div class="process">
            <slot></slot>
        </div>
    </div>
</template>
<script>
import { eventBus } from '../main';
    export default {
        props: {
            num:Number
        },
        methods: {
            // switchName() {
            //     return this.myName.split("").reverse().join("");
            // },
            // resetName() {
            //     this.myName = 'Max';
            //     this.$emit('nameWasReset', this.myName);
            // }
        },
        created() {
            eventBus.$on('numWasIncrease', (receiveNum) => {
                this.num = receiveNum;
            });
        }
    }
</script>
<style>
    .match{
        margin:2rem 0;
    }
    .match h1{
        
    }
    .process{
        background-color: rgb(221, 226, 236);
        border-radius: 2rem;
    }
    .process-show{
        padding: 0 2rem;
        background-color: blue;
        color: white;
        font-weight: bolder;
        font-size: 2rem;
        border-radius: 2rem;
        text-align: center;
    }
</style>
