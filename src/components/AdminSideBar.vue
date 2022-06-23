<template>
    <div class="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style="width: 280px;">
      <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
        <svg class="bi me-2" width="40" height="32"></svg>
        <span class="fs-4">Admin Main</span>
      </a>
      <hr>
      <ul class="nav nav-pills flex-column mb-auto">
        <li> <!-- class="nav-item"-->
          <router-link :to="{name:'AdminCarName'}">
            <a :class="name_hover ?'nav-link active' : 'nav-link text-white'"  >
              car_name
            </a>
          </router-link>
        </li>
        <li>
          <router-link :to="{name:'AdminSubsidyCapital'}">
            <a :class="subsidy_capital_hover ?'nav-link active' : 'nav-link text-white'" >
              subsidy_capital
            </a>
          </router-link>
        </li>
      </ul>
      <hr>
      <div class="dropdown">
        <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
          <img src="https://github.com/mdo.png" alt="" width="32" height="32" class="rounded-circle me-2">
          <strong>mdo</strong>
        </a>
        <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
          <li><a class="dropdown-item" @click="sign_out">Sign out</a></li>
        </ul>
      </div>
    </div>
</template>

<script>
import {ref, inject} from "vue"
import router from "../router/index.js"
  export default {
    name: "AdminSideBar",
    props:{
      page: Number
    },
    setup(props){
      let emitter = inject("emitter")
      let now_page = ref(1)
      let name_hover = ref(true)
      let subsidy_capital_hover = ref(false)

      function hover_bar(id){
        console.log(id)
        if(id ===1){
          name_hover.value = true
          subsidy_capital_hover.value = false
        }else if(id === 2){
          name_hover.value = false
          subsidy_capital_hover.value = true
        }
      }
      function sign_out(){
        let isOut = confirm('정말 나가시겠습니다?')
        if(isOut) {
          emitter.emit('delete token', '')
          router.replace('/')
        }
        else console.log('아니요')
      }

      hover_bar(props.page)
      return{now_page, name_hover, subsidy_capital_hover,
        hover_bar, sign_out}
    }
  }
</script>

<style scoped>

</style>