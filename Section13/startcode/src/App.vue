<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                {{text | toUppercase | to-lowercase}}
                <hr>
                <input type="text" v-model="filterText">
                <ul>
                    <li v-for="fruit in filteredFruits">{{fruit}}</li>
                </ul>
                <hr>
                <app-list>

                </app-list>
            </div>
        </div>
    </div>
</template>

<script>
    import List from './List.vue';
    import {fruitMixin} from './fruitMixin.js';
    export default {
        mixins:[fruitMixin],
        data:function(){
            return{
                text:"Hello 2019",
                
            }
        },
        filters:{
            toUppercase(value){
                return value.toUpperCase();
            },
        },
        components:{
            appList:List
        }
        
    }
</script>

<style>

</style>
