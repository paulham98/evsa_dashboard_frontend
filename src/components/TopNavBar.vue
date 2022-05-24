<template>
  <header>
    <div class="inner">
      <img src="../../public/images/logo.png" alt="" class="logo">
    </div>
    <div class="line">
      <div class="inner">
        <h1>우리 지역 한눈에</h1>
        <div>
          <ul>
            <li><router-link :to="{name:'Evsa_sup_current'}"><a class="active">전기차 보조금 현황</a></router-link></li>
            <li><router-link :to="{name:'Evsa_sup_cal'}"><a class="active">전기차 보조금 계산기</a></router-link></li>
            <li><a @click="this.open_new_window()" class="active">보조금 신청 가이드</a></li>
          </ul>
        </div>
        <router-link :to="{name: 'Sign_in'}">
          <a href="#" class="login"><img src="images/login.png" @click="openModal" alt=""></a>
        </router-link>
        <!--<button @click="openModal()">-->
          <!---->
        <!--</button>-->
      </div>
    </div>
  </header>
</template>

<script>
import { ref, inject} from 'vue'
  export default{
    name: "Top_navBar",
    setup(){

      function open_new_window(){
        let api = `http://www.easyplug.co.kr`;
        window.open(api,"_blank")
      }
      let isShow = ref(false);
      let emitter = inject("emitter");
      let openModal = () => {
        emitter.emit("open", 100)
      };

      return{ open_new_window, isShow, openModal}
    },
    methods:{
      // openModal(){
      //   this.emitter.emit('open', 'good');
      //   // this.isShow = true;
      // },
    },
  }
</script>

<style scoped>
</style>