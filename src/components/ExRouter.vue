<template>
  <div>
    <Top_navBar></Top_navBar>
    <p>checking router</p>
    <router-link :to="{name:'Main'}">go back</router-link>
  </div>
</template>

<script>
  import Top_navBar from "./TopNavBar"
  export default {
    name: "Ex_router",
    components:{
      Top_navBar
    }
  }
</script>

<style scoped>

</style>
