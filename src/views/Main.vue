<template>
  <Evsa_sup_current></Evsa_sup_current>
  <!--
  <router-link  :to="{name:'Ex_router'}">Router Example</router-link>
  -->
</template>

<script>
//import Top_navBar from "../components/Top_navBar"
import {onMounted} from 'vue'
import {fetch_api} from "../plugin";
import Evsa_sup_current from "./Evsa_sup_current"
export default {
  name: 'MainPage',
  props: {},
  components: {
    //Top_navBar,
    Evsa_sup_current
  },
  data(){
    return{

    }
  },
  setup: function () {

    console.log("hello");
    onMounted(() =>{
      console.log('onMounted stage');

    });
    let get_api = fetch_api();
    console.log(get_api);
    console.log(get_api.data)

  },
  methods:{

  },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
