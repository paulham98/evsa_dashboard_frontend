<template>
  <div class="hello">
    <Top_navBar></Top_navBar>
    <router-link  :to="{name:'Ex_router'}">Router Example</router-link>
    <ApexCharts></ApexCharts>
  </div>
</template>

<script>
import Top_navBar from "./Top_navBar"
import ApexCharts from "./ApexCharts"
export default {
  name: 'MainPage',
  props: {},
  components: {
    Top_navBar,
    ApexCharts
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
