<template>
  <Evsa_sup_current></Evsa_sup_current>
  <!--
  <router-link  :to="{name:'Ex_router'}">Router Example</router-link>
  -->
</template>

<script>
//import Top_navBar from "../components/Top_navBar"
import {onMounted} from 'vue'
import Evsa_sup_current from "./EvsaSupCurrent"
//import { get_api, fetch_api} from "../plugin.js"
//import {ref} from "vue"
export default {
  name: 'MainPage',
  props: {},
  components: {
    //Top_navBar,
    Evsa_sup_current
  },
  data(){
    return{
      tmp_data: {}
    }
  },

  setup: function () {
    // let api = get_api();
    // let tmp = ref({});
    // console.log(api);
    // fetch_api((data) => {
    //   console.log(data);
    //   tmp.value = data;
    //   console.log('tmp',tmp)
    // });

    // let api = ref(fetch_api()
    //   .then(resolveData=>{
    //     console.log(resolveData)
    //   }));
    // let ax_api = ref(get_api()
    //   .then(resolveData=>{
    //   console.log(resolveData.data)
    // }));
    // console.log(ax_api.value);
    // console.log(api.value);






    onMounted(() =>{


    });
    return {  }
  },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
