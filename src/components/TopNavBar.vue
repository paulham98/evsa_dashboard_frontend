<template>
  <header>

    <Sign_in v-if="show_modal"></Sign_in>

    <div class="inner">
      <img src="../../public/images/logo.png" alt="" class="logo">
    </div>
    <div class="line">
      <div class="inner">
        <h1>우리 지역 한눈에</h1>
        <div>
          <ul>
            <li><router-link :to="{name:'Evsa_sup_current'}"><a :class="page_current?'active':'inactive'" @click="change_page(1)">전기차 보조금 현황</a></router-link></li>
            <li><router-link :to="{name:'Evsa_sup_cal'}"><a :class="page_calculator?'active':'inactive'" @click="change_page(2)">전기차 보조금 계산기</a></router-link></li>
            <li><a style="cursor: pointer" @click="this.open_new_window(3)" :class="page_guide?'active':'inactive'">보조금 신청 가이드</a></li>
          </ul>
        </div>
        <!--<router-link :to="{name: 'Sign_in'}">-->
        <a href="#" class="login"><img src="images/login.png" @click="openModal" alt="" ></a>
        <!--</router-link>-->
        <!--<button @click="openModal()">-->
          <!---->
        <!--</button>-->
      </div>
    </div>
  </header>
</template>

<script>
import { ref, inject} from 'vue'
import Sign_in from '../views/Sign_in'
  export default{
    name: "Top_navBar",
    components:{ Sign_in},
    props:{
      page: Number
    },
    setup(props){
      let page_current = ref(true)
      let page_calculator = ref(false)
      let page_guide = ref(false)
      let show_modal = ref(false)
      function change_page(num){
        console.log(num)
        if(num === 1){
          page_current.value = true
          page_calculator.value = false
          page_guide.value = false
        }else if(num === 2){
          page_current.value = false
          page_calculator.value = true
          page_guide.value = false
        }else if(num === 3){
          page_current.value = false
          page_calculator.value = false
          page_guide.value = true
        }
      }
      function open_new_window(num){
        let api = `http://www.easyplug.co.kr`;
        window.open(api,"_blank")
        change_page(num)
      }
      let isShow = ref(false);
      let emitter = inject("emitter");
      let openModal = () => {
        if(show_modal.value === false) show_modal.value = true
        else show_modal.value = false
        emitter.emit("open", 100)
      };
      emitter.on("close", data =>{
        show_modal.value = data
      })
      change_page(props.page)
      return{
        show_modal, page_calculator,page_current,page_guide,change_page,
        open_new_window, isShow, openModal}
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