<template>
  <div>
    <div class="grp">
      <GrpLine :is-left="true" :info_accepted_rate="info_accepted_rate" :info_recept="info_recept" :info_notice="info_notice"/>
      <GrpLine :is-left="false" :info_accepted_rate="info_remain_rate" :info_recept="info_remain" :info_notice="info_notice"/>
    </div>
    <div class="txt1">
      <h1>현재 보조금 신청 공고대수 대비</h1>
      <h2>접수율 {{info_accepted_rate}}%, <br class="v800">잔여대수 {{info_remain}}대로</h2>
      <!-- span 에 클래스 active가 추가되면 위로올라오도록 애니매이션 처리해둠 (active가 없다가 해당값이되면 addClass(active)처리 필요) -->
      <h3>방문자님은 해당 지자체<br v-if="!check_size"> 보조금 신청 시<br> 지원금 자격 부여 가능성이<br class="v800"><span class="color_blue active" style="padding: 10px; margin-top: 5px">{{info_available_ratio_unit}}</span>입니다.</h3>
      <p class="color_gray">* 공고대수보다 접수대수가 많을 시 접수 불가능할 수 있으니 해당 지자체로 문의주시길 바랍니다.  (지자체마다 접수 받는 기준이 다를 수 있음)<br>
        담당부서: 기후변화대응과(02-02-2133-3579)</p>
      <p class="color_gray">* 해당 신청 가능 여부는 data에 기반한 근거로 실제 보조금 신청 가능 여부는 지자체 상황에 따라 달라질 수 있습니다.</p>
      <p class="color_gray">* 자료출처 : 통합누리집</p>
    </div>
  </div>
</template>

<script>
import GrpLine from "@/components/GrpLine";
import {ref} from 'vue'
export default {
  name: "EvsaInfo",
  components: {GrpLine},
  props:{
    info_recept: {type:Number, default:0},
    info_remain: {type:Number, default:0},
    info_notice: Number,
    info_accepted_rate: Number,
    info_remain_rate: Number,
    info_available_ratio_unit: String,
    isLeft: Boolean
  },
  setup(){
    // let mobile_text = ['방문자님은 해당 지자체','보조금 신청 시']
    let check_size = ref(true)

    function handle_text_data(){
      if(window.innerWidth <= 420) check_size.value = false
      else check_size.value = true
    }
    window.addEventListener('resize', handle_text_data)
    return{check_size}
  }
}
</script>

<style scoped>

</style>
