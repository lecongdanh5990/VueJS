<template>
    <div class="container">
        <app-header :quoteCount="quotes.length" :maxQuotes="maxQuotes"></app-header>
        <app-new-quote v-on:quoteWasAdded="newQuote"></app-new-quote>
        <app-quote-grid :quotes="quotes" v-on:quoteWasDeleted="deleteQuote"></app-quote-grid>
        <div class="row">
            <div class="col-sm-12 text-center">
                <div class="alert alert-info">Info: Click on a quote to delete it!</div>
            </div>
        </div>
    </div>
</template>

<script>
    import QuoteGrid from './Components/QuoteGrid.vue';
    import NewQuote from './Components/NewQuote.vue';
    import Header from './Components/Header.vue';

    export default {
        data:function(){
            return{
                quotes:[
                    'some things awesome here'
                ],
                maxQuotes:9
            }
        },
        methods:{
            newQuote(quote){
                if(this.quotes.length>=this.maxQuotes){
                    return alert('Please delete old quote before add new quote');
                }
                this.quotes.push(quote);
            },
            deleteQuote(index){
                this.quotes.splice(index,1);
            }
        },
        components:{
            appQuoteGrid:QuoteGrid,
            appNewQuote:NewQuote,
            appHeader:Header
        }
    }
</script>

<style>
</style>
