<template>
  <div class="border_b">
    <div class="inner">
      <p class="tit" style="margin:0px">보조금 신청 접수 일별 트렌드</p>
      <p class="color_gray">* 향후 최대 1년 간의 트렌들르 보여드릴 예정입니다.(기간  데이터 누적 중)</p>
      <div class="area1">
        <apexchart class="chart" type="line" height="520"
                   :options="mixed_chart_options" :series="mixed_series" ></apexchart>
      </div>
    </div>
    <a href="#" class="banner"><img src="images/mid_banner.png" alt=""></a>
    <div class="inner" v-if="show_pred">
      <p class="tit">보조금 신청 접수 예측 트렌드 </p>
      <div class="area2" >
        <apexchart class="chart" type="line" height="520" :options="line_chartOptions" :series="line_series"></apexchart>
      </div>
      <div class="txt2" v-if="show_pred">
        <h1>일 평균 접수대수 <em class="color_sky">3.2</em>대, <br class="v800">출고대수 <em class="color_sky">8</em>대로</h1>
        <h2><em class="color_sky">04-12</em> 기준 <em class="color_sky">90</em>일 후 <br class="v800"><em class="color_red">마감 예정</em>입니다.</h2>
        <h3><em class="color_sky">73</em>일 내 보조금 신청 시 <br class="v800"><em class="color_green">접수 안정권</em> 입니다.</h3>
        <p class="color_gray">* 보조금 신청 접수 예측 트렌드는 통합 누리집 data에 기반하였으며 실제 신청 접수 가능여부는<br>
          지자체 상황에 따라 달라질 수 있습니다.</p>
      </div>
    </div>
  </div>
</template>

<script>
import urlTemplates from "@/composables/urlTemplates";
import {ref,inject, onBeforeUpdate, onRenderTriggered, watchEffect,} from 'vue'
import {getInfoDate,getInfoFirstDate} from "@/composables/getInfoDate";
import {get_chart_options, get_mixed_series} from "@/composables/chartDataMaker";
import {fetch_api} from "../plugin.js"


export default {
  name: "SupTrend",
  props:{
    sido: String,
    region: String,
    category: String
  },
  components:{
    // Toggle
  },
  setup(props){
    console.log(props.sido, props.category)
    let mixed_chart_options = ref({});
    let mixed_series = ref([
      {name: '접수대수(누적)', type: 'column', data: [],},
      {name: '출고대수(누적)', type: 'column', data: [],},
      {name: '접수대수(일별)', type: 'line', data: []}
      ]);
    let emitter = inject("emitter")
    let chk_width = window.innerWidth;
    let show_pred = ref(0)
    let check_mobile = ref(520)
    const call_api = (isMob,pCategory, pRegion, pSido) => {
      // let start_date = getInfoDate()
      let end_date = getInfoDate()
      let start_date = getInfoFirstDate()
      console.log(end_date, start_date)
      let url2 = urlTemplates.subsidy_trend(pCategory, pRegion, pSido, start_date, end_date)
      fetch_api(url2, (data) =>{
        // trend_data.value = data;
        console.log('트렌드 data', data, url2);
        if(isMob === false){
          let trend_chart_date = ref(data[0].slice(1))
          let trend_chart_close = ref(data[1].slice(1).map(item=>parseInt(item)))
          let trend_chart_accepted = ref(data[2].slice(1).map(item=>parseInt(item)))
          let trend_chart_release = ref(data[3].slice(1).map(item=>parseInt(item)))
          let trend_chart_recept =  ref(data[4].slice(1).map(item=>parseInt(item)))
          for(let i = 0; i <trend_chart_recept.value.length; i++){
            if(trend_chart_recept.value[i] < 0){
              trend_chart_recept.value[i] = 0
            }else if(isNaN(trend_chart_recept.value[i])){
              trend_chart_recept.value[i] = 0
            }
          }
          // trend_chart_recept.value = trend_chart_recept.value.filter(item => item>0)
          console.log('일별 접수대수 보정 data', trend_chart_recept.value)
          mixed_series.value = get_mixed_series(trend_chart_close.value,trend_chart_accepted.value, trend_chart_release.value, trend_chart_recept.value)
          mixed_chart_options.value = get_chart_options(trend_chart_close.value,trend_chart_date.value)
        }else{
          console.log('430 px 이하 일때 사이즈 변경', )
          let trend_chart_date = ref(data[0].slice(data[0].length -5, data[0].length))
          let trend_chart_close = ref(data[1].slice(data[0].length -5, data[0].length).map(item=>parseInt(item)))
          let trend_chart_accepted = ref(data[2].slice(data[0].length -5, data[0].length).map(item=>parseInt(item)))
          let trend_chart_release = ref(data[3].slice(data[0].length -5, data[0].length).map(item=>parseInt(item)))
          let trend_chart_recept =  ref(data[4].slice(data[0].length -5, data[0].length).map(item=>parseInt(item)))
          for(let i = 0; i <trend_chart_recept.value.length; i++){
            if(trend_chart_recept.value[i] < 0){
              trend_chart_recept.value[i] = 0
            }else if(isNaN(trend_chart_recept.value[i])){
              trend_chart_recept.value[i] = 0
            }
          }
          mixed_series.value = get_mixed_series(trend_chart_close.value,trend_chart_accepted.value, trend_chart_release.value, trend_chart_recept.value)
          mixed_chart_options.value = get_chart_options(trend_chart_close.value,trend_chart_date.value)

        }
      });
    };

    if(chk_width <= 430){
      call_api(true,'일반', props.region, props.sido);
    }else{
      call_api(false,'일반', props.region, props.sido);
    }

    function get_pred_stat(){
      let url = urlTemplates.admin_predict()
      fetch_api(url, data =>{
        console.log(data)
        if(data.num === 0){
          show_pred.value = false
        }else{
          show_pred.value = true
        }
      })
    }
    get_pred_stat()
    function handle_chart_data(){
      if(window.innerWidth <= 430) {
        call_api(true,'일반', props.region, props.sido);
      }
      else {
        call_api(false,'일반', props.region, props.sido);
      }
    }
    window.addEventListener('resize', handle_chart_data)

    let line_series = [{
      name: "Desktops",
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
    },
      {
        name: "Desktops",
        data: [79, 101, 158]
      }
    ];
    let line_chartOptions = {
      chart: {
        height: 350,
        type: 'line',
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight'
      },
      title: {
        text: 'Product Trends by Month',
        align: 'left'
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5
        },
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
      },
    };
    // emiiter 영역
    emitter.on("change_trend_pData", (data) =>{
      console.log("change trend pData", data)
      if(data[2] === '선택해주세요'){
        if(chk_width <= 430){
          call_api(true,'일반', props.region, props.sido);
        }else{
          call_api(false,'일반', props.region, props.sido);
        }
      }else{
        if(chk_width <= 430){
          call_api(true,'일반', props.region, props.sido);
        }else{
          call_api(false,'일반', props.region, props.sido);
        }
      }
    })
    emitter.on('show_pred_trend', data =>{
      console.log('show_pred_trend', data)
      show_pred.value = data
    })

    watchEffect(()=>{
      mixed_chart_options.value

    })
    onBeforeUpdate(()=>{
    });
    onRenderTriggered(()=>{
    })
    return{check_mobile, show_pred,mixed_chart_options, mixed_series, line_series, line_chartOptions}
  }
}
</script>

<style scoped>
.toggle_box{display: inline-block;
  transform: translateY(-5px);}
@media (max-width: 430px){
  .area1{
    height: 500px;}
  .chart{height: 500px}
}
</style>
