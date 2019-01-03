<template>
    <div class="col-sm-6 col-md-4 col-lg-3">
        <div class="panel panel-default">
            <div class="panel-body quote">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:['quotes']
}
</script>
<style>
    .panel-body{
        font-family: 'Lobster', cursive;
        font-size: 24px;
        color: rgb(11, 88, 88);
    }
    .quote{
        cursor: pointer;
    }
    .quote:hover{
        background-color: chartreuse;
    }
</style>
