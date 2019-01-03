<template>
    <div class="items">
        <div class="item0">Item 1</div>
        <div class="item">Item 1</div>
        <div class="item">Item 1</div>
        <div class="item">Item 1</div>
        <div class="item">Item 1</div>
        <div class="item">Item 1</div>
        <div class="item">Item 1</div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
    .items{
        font-family: 'Kanit', sans-serif;
        display: grid;
        grid-template-columns:40% 30% 30%;
        grid-column-gap: 1rem;
        grid-row-gap: 1rem;
        margin:2rem 2rem;
    }
    .item0{
        border:1px rgb(219, 202, 221) solid;
        grid-row: span 3;
        background-color: rgb(31, 119, 78);
        color: white;
        border-radius: 2rem;
        text-align: center;
        font-size: 2rem;
        padding: 0rem 3rem;
    }
    .item{
        background-color: rgb(214, 203, 40);
        color: white;
        text-align: center;
        border-radius: 2rem;
        padding: 0rem 3rem;
    }
</style>
