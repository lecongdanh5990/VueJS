<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <!-- Exercise 1) -->
                <!-- Build a local Filter which reverses the Text it is applied on -->
                {{text | toReverse}}
                <!-- Exercise 2 -->
                <!-- Build a global Filter which counts the length of a word and it appends it -->
                <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->
                <hr>
                <input type="text" v-model="content">
                
                <p>{{'Le Cong Danh'|calculateLength }}</p>
                <P>{{calculateLengthByComputed}}</P>
                <hr>
                <!-- Exercise 3 -->
                <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->
                <hr>
                <p>Count by computed</p>
                <input type="text" v-model="content">
                <p>{{calculateLengthByComputed }}</p>
                <hr>
                <!-- Exercise 4 -->
                <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
            </div>
        </div>
    </div>
</template>

<script>   
    import {calcuLength} from './calcuLength.js';
    export default {
        mixins:[calcuLength],
        data:function(){
            return{
                text:"Hello 2019",
                content:''
            }
        },
        filters:{
            toReverse(value){
                return value.split("").reverse().join("");
            },
        },
        
        
    }
</script>

<style>
</style>
