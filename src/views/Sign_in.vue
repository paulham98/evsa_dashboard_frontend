<template>
  <main class="form-signin">
    <form class="modal-container">
      <h1 class="h3 mb-3 fw-normal">Please sign in</h1>
      <div class="form-floating">
        <input type="text" class="form-control" id="floatingInput"
               v-model="user_id">
        <label for="floatingInput">Email address</label>
      </div>
      <div class="form-floating">
        <input type="password" class="form-control" id="floatingPassword"
               v-model="user_pw">
        <label for="floatingPassword">Password</label>
      </div>
      <div style="margin-top:10px">
        <button class="w-100 btn btn-lg btn-primary" type="submit"  @key_up.enter.prevent="login_submit(user_id, user_pw)" @click.prevent="login_submit(user_id, user_pw)">Sign in</button>
        <button class="btn btn-lg btn-primary" style="float: right; margin-top: 20px" @click="close_modal(false)">닫기</button>
      </div>
      <!--  -->
    </form>

  </main>
<AdminSideBar v-if="false"></AdminSideBar>
</template>

<script>
import { inject, ref } from "vue"
import urlTemplates from "@/composables/urlTemplates";
import {post_login} from "../plugin.js"
import router from "../router/index.js"
import {get_login_stat} from "../plugin";
import AdminSideBar from '../components/AdminSideBar'
  export default {
    name: "sign_in",
    components: {AdminSideBar},
    setup(){
      let emitter = inject("emitter")
      let user_id = ref('')
      let user_pw = ref('')
      let login_data = ref({
        "id" : user_id.value,
        "password": user_pw.value
      });
      let manage_token = ref('')
      let isLogin = ref(false)
      function close_modal(data){
        emitter.emit("close", data)
      }
      function login_submit(id, pw){
       let login_api = urlTemplates.login();
       login_data.value = {
         "id": id,
         "password": pw
       }
       let login_check_url = urlTemplates.login_check()
       // console.log(login_data.value)
       post_login(login_api, login_data.value, (data) =>{
         console.log(data.data)
         if(data.data === 'id 또는 패스워드가 맞지 않습니다.'){
           alert("id 또는 패스워드가 맞지 않습니다.")
           user_id.value = ''
           user_pw.value = ''
           isLogin.value = false
         }else {
           get_login_stat(login_check_url, data.data, data =>{
             console.log(data)
             if(data.status === 200){
               // login 성공
               manage_token.value = data.data
               emitter.emit('login ok', data.data)
               close_modal(false)
               router.replace('/admin_main')
               isLogin.value = true
             }
           })
         }
       })
      }

      // emitter 영역
      emitter.on("open", (data) =>{
        console.log("open modal", data)
      })
      emitter.on('delete token', (da) =>{
        console.log(da)

      })
     return{login_submit, close_modal, user_id, user_pw, isLogin}
    },

  }
</script>

<style scoped>
.form-signin{
  z-index: 999;
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
}
.modal-container{
  background: white;
  width: 80%;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
}
</style>