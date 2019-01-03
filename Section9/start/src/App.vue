<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <button @click="selectedComponent='appQuote'">Show Name</button>
                <button @click="selectedComponent='myFamily'">Show Family</button>
                <button @click="selectedComponent='myHometown'">Show Hometown</button>
                <hr>
                <p>{{selectedComponent}}</p>
                <keep-alive>
                    <component :is="selectedComponent"></component>
                </keep-alive>
                <hr>
               <app-quote quote="2000$ per month"></app-quote>

               <!-- hien thi 1 cai duy nhat thi ta dung cai nay -->
               <!-- <app-quote>
                   <h1 slot="myname">LE CONG DANH</h1>
                   <h2>SENT MONEY TO HOME IN 2019</h2>
                   <h2>{{Salary}}</h2>
               </app-quote> -->
            </div>
        </div>
    </div>
</template>

<script>
    import Quote from './components/Quote.vue';
    import Family from './components/Family.vue';
    import Hometown from './components/Hometown.vue';

    export default {
        data:function(){
            return{
                Salary:"2000$per month",
                selectedComponent:'appQuote'
            }
        },
        components:{
            appQuote:Quote,
            myFamily:Family,
            myHometown:Hometown
        }
    }
</script>

<style>
</style>
