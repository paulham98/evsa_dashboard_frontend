<template>
  <div :class="isLeft?'left':'right'">
    <p class="tit" v-if="isLeft">접수대수</p>
    <p class="tit" v-if="!isLeft">잔여대수</p>
    <div :class="isLeft?'line_grp purple':'line_grp blue'">
      <h1><em>{{info_recept}}</em> / {{info_notice}} <span>Total</span></h1>
      <div class="wrap active">
        <div class="line1" :style="{'width':`${info_accepted_rate>=100 ? 100 : info_accepted_rate}%`}">
          <span>{{info_recept}}대</span>
          <p>{{info_accepted_rate}}%</p>
        </div>
      </div>
      <div class="tar">
        <p>접수대수</p>
        <p>공고대수</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GrpLine",
  props:{
    info_recept: {type:Number, default:0},
    info_notice: Number,
    info_accepted_rate: Number,
    isLeft: Boolean
  },
  setup(){

  }
}
</script>

<style scoped>

</style>
