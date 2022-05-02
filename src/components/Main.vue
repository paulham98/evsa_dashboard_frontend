<template>
  <Top_navBar></Top_navBar>
  <!--
  <router-link  :to="{name:'Ex_router'}">Router Example</router-link>
  -->
</template>

<script>
import Top_navBar from "./Top_navBar"

export default {
  name: 'MainPage',
  props: {},
  components: {
    Top_navBar,
  },
  data(){
    return{

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
