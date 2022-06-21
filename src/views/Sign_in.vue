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

      <div class="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me"> Remember me
        </label>
      </div>
      <!--<button @click="login_submit()">sssssssss</button>-->
      <button class="w-100 btn btn-lg btn-primary" type="submit"  @key_up.enter.prevent="login_submit()" @click.prevent="login_submit()">Sign in</button>
      <button class="btn btn-lg btn-primary" style="float: right; margin-top: 20px" @click="close_modal(false)">닫기</button>
<!--  -->
    </form>
  </main>

</template>

<script>
import { inject, ref } from "vue"
import urlTemplates from "@/composables/urlTemplates";
import {post_login} from "../plugin.js"
  export default {
    name: "sign_in",
    setup(){
      let emitter = inject("emitter")
      let user_id = ref('')
      let user_pw = ref('')
      let login_data = ref({
        'id' : user_id,
        'password': user_pw
      });
      function close_modal(data){
        emitter.emit("close", data)
      }
      function login_submit(){
       let login_api = urlTemplates.login();
       console.log(login_data.value)
       post_login(login_api, login_data.value, (data) =>{
         console.log(data)
       })
      }

      // emitter 영역
      emitter.on("open", (data) =>{
        console.log("open modal", data)
      })
     return{login_submit, close_modal, user_id, user_pw}
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