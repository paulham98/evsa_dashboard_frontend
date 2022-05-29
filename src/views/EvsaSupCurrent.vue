<template>
  <Top_navBar></Top_navBar>
  <p></p>
  <div class="border_b">
    <div class="inner">
      <div class="date">
        <div class="left">
          <h1>{{infoDate}}</h1>
          <h2>{{sido}}</h2>
        </div>
        <div class="right">
          <div>
            <div :class="is_click_left?'select active first':'select first'">
              <!--<select class="label" @change="changeSido(sido)" v-model="sido">-->
                <!--<option  v-for="(item, i) in sidos" :key="i" >{{item.name}}</option>-->
              <!--</select>-->
              <button class="label" @click="click_button(1)">{{sido}}</button>
              <ul class="option">
                <li class="item" v-for="(item, i) in sidos" :key="i" @click="changeSido(item.name)">{{item.name}}</li>
              </ul>
            </div>
            <div :class="isClick_right?'select active second':'select second'">
              <!--<select class="label" @change="changeRegion">-->
                <!--<option  v-for="(item, i) in regions" :key="i">{{item.region}}</option>-->
              <!--</select>-->
              <button class="label" @click="click_button(2)">{{region}}</button>
              <ul class="option">
                <li class="item" v-for="(item, i) in regions" :key="i" @click="changeRegion(item.region)">{{item.region}}</li>
              </ul>
            </div>
          </div>
          <div>
            <div class="checkbox1">
              <input v-model="click_check_left" type="checkbox" name="ck" id="agree1_1" @change="clickCheckboxCategory2('일반')" checked>
              <label for="agree1_1">일반 차량</label>
            </div>
            <div class="checkbox1">
              <input v-model="click_check_right"  type="checkbox" name="ck" id="agree1_2" @change="clickCheckboxCategory2('우선')" >
              <label for="agree1_2">우선 차량</label>
            </div>
            <div :class="isClick_third?'select active':'select'">
              <button class="label" @click="click_button(3)">{{category2}}</button>
              <ul class="option">
                <li class="item" v-for="(item, i) in third_select_options" :key="i" @click="changeSelectCategory2">{{item}}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <EvsaInfo :info_recept="info_recept" :info_notice="info_notice" :info_accepted_rate="info_accepted_rate"
                :info_remain="info_remain" :info_remain_rate="info_remain_rate" :info_available_ratio_unit="info_available_ratio_unit"
      ></EvsaInfo>
    </div>
  </div>

  <SupTrend :sido="sido" :region="region" :category="category2"></SupTrend>
  <EvsaClose></EvsaClose>
  <a href="#" class="banner"><img src="images/bot_banner.png" alt=""></a>
</template>

<script>
import Top_navBar from "../components/TopNavBar"
import SupTrend from "../components/SupTrend"
import {getInfoDate} from "@/composables/getInfoDate";
import urlTemplates from "@/composables/urlTemplates";
import {fetch_api} from "../plugin.js"
import {ref, onMounted, onUpdated, computed} from "vue"
import EvsaClose from "@/components/EvsaClose";
import EvsaInfo from "@/components/EvsaInfo";
export default {
  name: "EvsaSupCurrent",
  components: {
    EvsaInfo,
    EvsaClose,
    Top_navBar, SupTrend
  },
  setup(){
    /*
    http://15.165.32.56:30423/api/v1/subsidy_closing_area?region=${region}&sido=${sido}
    http://15.165.32.56:30423/api/v1/subsidy_accepted?region=${region}&sido=${sido}
    http://15.165.32.56:30423/api/v1/sido_filter?sido=경기
    http://15.165.32.56:30423/api/v1/subsidy_info?category2=전체&region=수원시&sido=경기&date=2022-05-20
     */

    onMounted(()=>{
      //mounted 이벤트는 여기
    });

    onUpdated(()=>{
      //updated 이벤트는 여기
    })

    let sido = ref('서울');
    let region = ref('서울특별시');
    let category2 = ref('전체');
    let infoDate = getInfoDate()
    let sidos = ref({});
    let regions = ref({});
    let info_remain = ref(0);
    let info_release = ref(0);
    let info_recept = ref(0);
    let info_remain_rate = ref(0);
    let info_accepted_rate = ref(0);
    let info_notice = ref(0);
    let info_available_ratio_unit = ref('');

    // 시도 구하는 데이터
    const callSido = () => {
      fetch_api(urlTemplates.sido(),(data) => {
        sidos.value = data;
        // console.log('getting sido data',sidos.value)
      });
    }
    // 시도 고른 후 데이터
    const callRegion = pSido => {
      fetch_api(urlTemplates.region(pSido),(data) => {
        regions.value = data;
        region.value = data[0].region;
        // console.log('시도 고른 후 원본',data);
        // console.log('select sido', regions.value)
      });
    }

    function callSubsidyInfo(pSido, pRegion, pCategory2, pDate) {
      let url = urlTemplates.subsidy_info(pSido, pRegion, pCategory2, pDate)
      fetch_api(url, (data) =>{
        info_remain.value = data.remains;
        info_recept.value = data.recept;
        info_remain_rate.value = data.remain_rate;
        info_release.value = data.release;
        info_accepted_rate.value = data.accepted_rate;
        info_notice.value = data.notice;
        info_available_ratio_unit.value = data.available_ratio_unit;
        // console.log('url:', url)
        // console.log('subsidyInfoData:', data);
        // console.log(info_available_ratio_unit.value, info_notice.value, info_remain.value, info_release.value, info_recept.value,info_accepted_rate.value, info_remain_rate.value);

      });
    }
    let is_click_left = ref(false);
    let isClick_right = ref(false);
    let isClick_third = ref(false);
    function click_button(lr){
      if(!is_click_left.value && lr === 1)is_click_left.value = true;
      else is_click_left.value = false;
      if(!isClick_right.value && lr === 2)isClick_right.value = true;
      else isClick_right.value = false;
      if(!isClick_third.value && lr === 3)isClick_third.value = true;
      else isClick_third.value = false;
      // console.log(isClick.value)
    }
    function changeSido(pSido){
      sido.value = pSido;
      let url = urlTemplates.region(sido.value)
      fetch_api(url,(data) => {
        regions.value = data;
        region.value = data[0].region;
        console.log('select sido', regions.value, region.value)
      });
    }

    function changeRegion(event){
      console.log('region:',event.target.value)
      region.value = event.target.value;
      callSubsidyInfo(sido.value, region.value, category2.value, '2022-05-20')
    }
    let click_check_left = ref(true);
    let click_check_right = ref(false);
    let third_select_options = ref(['전체', '법인', '택시', '기타']);
    function clickCheckboxCategory2(pCategory2) {
      if(pCategory2 === '일반'){
        click_check_left.value = true
        click_check_right.value = false
      }else if(pCategory2 === '우선'){
        click_check_left.value = false
        click_check_right.value = true
      }
      if(third_select_options.value.length === 3){
        third_select_options.value = ['전체', '법인', '택시', '기타']
      }
      category2.value = pCategory2
      console.log('clickCheckboxCategory2', category2.value)
      callSubsidyInfo(sido.value, region.value, category2.value, '2022-05-20')

    }
    function changeSelectCategory2(event) {
      if(event.target.value === '전체' || event.target.value === '법인' || event.target.value === '택시'){
        third_select_options.value = ['전체', '법인', '택시'];
        click_check_left.value = false;
        click_check_right.value = false
      }

      console.log('clickCheckboxCategory2', event.target.value, region.value);
      category2.value = event.target.value;
      callSubsidyInfo(sido.value, region.value, category2.value, '2022-05-20');
    }

    const clickBtn = ()=>{
      console.log('iar:', info_accepted_rate.value)
      info_accepted_rate.value = 10

    }

    const ratio = computed(()=>{
      return info_accepted_rate.value >= 100?100:info_accepted_rate.value
    })
    // function click_check(target) {
    //   document.querySelectorAll(`input[type=checkbox]`)
    //     .forEach(el => el.checked = false);
    //
    //   target.checked = true;
    // }

    callSido();
    callRegion(sido.value);
    callSubsidyInfo(sido.value, region.value, category2.value, '2022-05-20')

    return{
      is_click_left,isClick_right,isClick_third,click_button,
      third_select_options,
      click_check_left, click_check_right,
      infoDate, info_available_ratio_unit,
      category2,
      info_notice, info_remain,info_recept,info_release, info_remain_rate, info_accepted_rate,
      changeSido, changeRegion, clickCheckboxCategory2, changeSelectCategory2, clickBtn, ratio,
      regions, sido, region, sidos
    }
  },

}
</script>

<style scoped>
  .first{ z-index: 99}
  .second{ z-index: 98}
  .item{max-height: 50px}
  /*.select .label option {*/
    /*position: absolute;*/
    /*top: 0;*/
    /*left: 0;*/
    /*width: 100%;*/
    /*background: #F1F1F1;*/
    /*list-style-type: none;*/
    /*padding: 0;*/
    /*overflow: scroll;*/
    /*max-height: 0;*/
    /*transition: .3s ease-in;*/
    /*padding-top: 45px;!* overflow-y: scroll; *!border-radius: 8px;}*/

  /*.label.active option {*/
    /*max-height: 250px;*/
    /*box-shadow: 0px 2px 10px 0px #00000040;*/
    /*border-radius: 8px 8px 0 0;}*/

  /*.label option {*/
    /*padding: 10px 15px 10px;*/
    /*transition: .1s;*/
  /*}*/

  /*.label option:hover {*/
    /*background: #DDE0E2;*/
    /*box-shadow: 0px 2px 4px 0px #00000040;}*/

  /*.label option:last-child {*/
    /*border-bottom: 0 none;*/
  /*}*/
  .deadline_red{
    color:red
  }
  .deadline_black{
    color: black
  }
  .container {
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
  }
  .fadeOne-enter-active, .fadeOne-leave-active{transition: all .5s ease-out; }
  .fadeOne-enter, .fadeOne-leave-to{clip-path: polygon(0% 100%, 100% 100%, 0% 100%, 0% 100%);transform: translate(0%, -100%);}
  .fadeOne-enter-from, fadeOne-leave-to{clip-path: polygon(0% 100%, 100% 100%, 0% 100%, 0% 100%);transform: translate(0%, 100%);}
  .fadeTwo-enter-active, .fadeTwo-leave-active{transition: opacity 1s ease;}
  .fadeTwo-enter-from, .fadeTwo-leave-to{opacity: 0;}
</style>
