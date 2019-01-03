<template>
  <div>
    <h1>I TRIED TO LEARN DAY BY DAY, SO I THINK I CAN FIND A
       GOOD JOBS IN 2019 AND MY SALARY IS {{salary}}</h1>
    <hr>
    <button v-on:click="changeSalary">Change Salary</button>
  </div>
</template>

<script>
export default {
  data:function(){
    return{
      salary:"600$",
      health:"good, run 2km per day"
    }
  },
  methods:{
      changeSalary(){
          this.salary="1000$";
      }
  }
}
</script>

<style>
</style>
