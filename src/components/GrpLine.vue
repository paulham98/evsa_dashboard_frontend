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

.grp .line_grp{background: #eff3f6;border-radius: 20px;padding: 30px 25px;}
.grp>div{display: inline-block;width: calc(50% - 12px);}
.grp .right{margin-left: 20px;}
.grp .line_grp h1 em{font-size: 30px;font-weight: 600;color: #000;}
.grp .line_grp h1{color: #808080;font-weight: 600;font-size: 20px;margin-bottom: 30px;}
.grp .line_grp h1 span{font-family: 'Poppins';font-size: 14px;}
.grp .line_grp .wrap{background: #d6d4f0;border-radius: 500px;position: relative;height: 45px;margin-bottom: 30px;}
.grp .line_grp .wrap .line1{background: #8259d9;border-radius: 500px;height: 100%;position: absolute;width: 0;transition: width 0.5s;transition-delay: 0.2s;}
.grp .line_grp .wrap .line1 span{position:absolute;width:100%;color:#fff;text-align: center;display: flex;align-items: center;justify-content: center;height: 100%;opacity: 0;transition: opacity 1s;transition-delay: 0.6s;}
.grp .line_grp .wrap .line1 p{position:absolute;background:#fff;border-radius:5px;padding:5px;font-weight: 600;width: 60px;box-sizing: border-box;text-align: center;box-shadow: 0px 0px 10px rgba(0,0,0,0.2);right: 15px;top: -19px;opacity: 0;transition: opacity 1s;transition-delay: 0.6s;}

.grp .line_grp .wrap .line1 p:before{content:"";width: 0px;height: 0px;border-top: 7px solid white;border-bottom: 7px solid none;border-right: 7px solid transparent;border-left: 7px solid  transparent;position:absolute;bottom: -7px;left: 50%;transform: translateX(-50%);}
.grp .line_grp .wrap>span{position:absolute;color:#fff;text-align: center;display: flex;align-items: center;justify-content: center;height: 100%;right: 0;opacity: 0;transition: opacity 1s;transition-delay: 0.6s;}
.grp .line_grp .wrap.active>span,.grp .line_grp .wrap.active .line1 p,.grp .line_grp .wrap.active .line1 span{opacity: 1;}
.grp .line_grp.blue .wrap{background: #d6defa;}
.grp .line_grp.blue .wrap .line1{background: #0031af;}

.grp .line_grp .tar p{display: inline-block;position: relative;padding-left: 40px;color: #808080;font-weight: 500;}
.grp .line_grp .tar p:last-child{margin-left: 25px;}
.grp .line_grp .tar p:last-child::before{background: #d6d4f0;}
.grp .line_grp .tar p::before{content: '';position: absolute;width: 27px;height: 5px;left: 0;top: 9px;background: #8259d9;border-radius: 500px;}
.grp .line_grp.blue p::before{background: #0031af;}
.grp .line_grp.blue .tar p:last-child::before{background: #d6defa;}
</style>
