<template>
    <AdminCarName></AdminCarName>
</template>

<script>
import AdminCarName from '../components/AdminCarName'
// import {inject, ref} from "vue"
// import urlTemplates from "@/composables/urlTemplates";
// import {get_login_stat} from "../plugin";
// import router from "../router/index.js"
  export default {
    name: "AdminMain",
    components:{
      AdminCarName
    },
    setup(){
      // let emitter = inject("emitter")
      // let login_token = ref('')
      // // emitter 영역
      // emitter.on('login ok', token =>{
      //   let url = urlTemplates.login_check()
      //   get_login_stat(url, token, data =>{
      //     if(data.status === 200){
      //       login_token.value = token
      //     }else{
      //       login_token.value = ''
      //     }
      //   })
      // })
    }
  }
</script>

<style scoped>

</style>