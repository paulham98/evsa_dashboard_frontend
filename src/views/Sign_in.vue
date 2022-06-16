<template>
  <main class="form-signin">
    <form class="modal-container">
      <h1 class="h3 mb-3 fw-normal">Please sign in</h1>
      <div class="form-floating">
        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
        <label for="floatingInput">Email address</label>
      </div>
      <div class="form-floating">
        <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
        <label for="floatingPassword">Password</label>
      </div>

      <div class="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me"> Remember me
        </label>
      </div>
      <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
      <button class="btn btn-lg btn-primary" style="float: right; margin-top: 20px" @click="close_modal(false)">닫기</button>

    </form>
  </main>

</template>

<script>
import { inject } from "vue"
  export default {
    name: "sign_in",
    setup(){
      let emitter = inject("emitter")
      emitter.on("open", (data) =>{
        console.log("open modal", data)
      })
      function close_modal(data){
        emitter.emit("close", data)
      }
     return{ close_modal}
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