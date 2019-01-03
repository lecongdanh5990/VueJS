<template>
    <div>
        <p>Master PHP and JS here</p>
        <p>{{quote}}</p>
        <div class="myname">
            <slot name="myname"></slot>
            <span><slot name="firstname">The first name</slot></span>
        </div>
        <div>
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    props:['quote']
}
</script>
<style scoped>
    div{
        border:1px solid green;
        padding: 3rem;
        margin: 1rem auto;
        text-align: center;
        }
    .myname{
        color: red;
    }
</style>
