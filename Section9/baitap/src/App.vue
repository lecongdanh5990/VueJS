<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button class="btn btn-primary" @click="mycom='appBlue'">Load Blue Template</button>
                <button class="btn btn-success" @click="mycom='appGreen'">Load Green Template</button>
                <button class="btn btn-danger" @click="mycom='appRed'">Load Red Template</button>
                <hr>
                <component :is="mycom">
                    
                </component>
                <!-- <app-blue>
                    <h1>My name is LE CONG DANH</h1>
                </app-blue>
                <app-green>
                    <h1>I will be master PHP and JS in 2019</h1>
                </app-green>
                <app-red>
                    <h1>I will call to home and said with my mother:
                        "I send money to you"
                    </h1>
                </app-red> -->
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
        data:function(){
            return{
                mycom:""
            }
        },
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red
        }
    }
</script>

<style>
</style>
