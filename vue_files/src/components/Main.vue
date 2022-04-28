<template>
  <div class="hello">
    <router-link  :to="{name:'Ex_router'}">Router Example</router-link>
    <ApexCharts></ApexCharts>
  </div>
</template>

<script>
import ApexCharts from "../components/ApexCharts"
export default {
  name: 'MainPage',
  props: {},
  components: {
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
