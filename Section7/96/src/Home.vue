<template>
    <div>
      <my-room v-for="count in 5"></my-room>
    </div>
</template>

<script>
import Room from './Room.vue';
export default {
  components:{
    'my-room':Room
  }
}
</script>

<style>
</style>
