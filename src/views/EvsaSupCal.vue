<template>
  <Top_navBar :page="2"></Top_navBar>
  <div class="inner">
    <p class="tit mt100">전기차 보조금 계산기</p>
    <div class="area3">
      <div :class="is_click_first_left?'select active first':'select first'" style="z-index: 2">
        <button class="label" @click="click_button(1)">{{sido}}</button>
        <ul class="option">
          <li class="item" v-for="(item, i) in sidos" :key="i" @click="change_cal_sido(item.name)">{{item.name}}</li>
        </ul>
      </div>
      <div :class="is_click_first_right?'select active second':'select second'" style="z-index: 2">
        <button class="label" @click="click_button(2)">{{region}}</button>
        <ul class="option">
          <li class="item" v-for="(item, i) in regions" :key="i" @click="change_cal_region(item.region)">{{item.region}}</li>
        </ul>
      </div>
    </div>
    <p class="tit mt100">차량별 보조금 확인</p>
    <div class="area3">
      <div :class="is_click_sec_left?'select active first':'select first'" style="z-index: 1">
        <button class="label" @click="click_button(3)">{{car_brand}}</button>
        <ul class="option">
          <li class="item" v-for="(item, i) in car_brand_data" :key="i" @click="change_cal_car_brand(item.category)">{{item.category}}</li>
        </ul>
      </div>
      <div :class="is_click_sec_right?'select active second bottom':'select second bottom'" style="z-index: 1">
        <button class="label" @click="click_button(4)">{{car_name}}</button>
        <ul class="option">
          <li class="item" v-for="(item, i) in car_name_data" :key="i" @click="change_cal_car_name(item.category2)">{{item.category2}}</li>
        </ul>
      </div>
    </div>
    <img src="images/car.png" alt="" class="car">
    <ul class="price">
      <li>
        <div class="text_control">보조금 잔여대수 <em>{{ev_cal_data.num_remain_all}} / {{ev_cal_data.num_notice_all}}</em> {{ev_cal_data.num_notice_all_unit}}</div>
        <div class="text_control">접수율 <span class="percent color_blue">{{ev_cal_data.accept_rate +' '+ev_cal_data.accept_rate_unit}}</span></div>
      </li>
      <li>
        <div class="price_top">차량 가격</div>
        <div class="price_bottom"><em>{{ev_cal_data.car_price}}</em> {{ev_cal_data.car_price_unit}}</div>
      </li>
      <li>
        <div class="price_top">보조금</div>
        <div class="price_bottom"><em>-{{ev_cal_data.subsidy}}</em> {{ev_cal_data.subsidy_unit}}</div>
      </li>
      <li>
        <div class="text_control">구매 가격</div>
        <div class="text_control"><span class="color_blue">{{ev_cal_data.sum_price}}</span> {{ev_cal_data.sum_price_unit}}</div>
      </li>
    </ul>
    <div class="area4">
      <p class="color_gray">* 국비+지방비 = 보조금</p>
      <p class="color_gray">*보조금은 지자체 출고 및 접수 마감으로 예산 소진 시 지급 종료됩니다.</p>
      <p class="color_gray">*잔여대수는 전체(우선순위+일반+법인+택시) 공고대수 대비 남은 전체 잔여대수입니다.</p>
      <p class="color_gray">*차량 가격은 기본 가격으로 옵션에 따라 변경될 수 있습니다.</p>
    </div>
  </div>
</template>

<script>
import Top_navBar from "../components/TopNavBar"
import urlTemplates from "@/composables/urlTemplates";
import {fetch_api} from "@/plugin";
import {getInfoDate} from "@/composables/getInfoDate";
import {ref} from "vue";
export default {
  name: "Evsa_sup_cal",
  components: {
    Top_navBar,
  },
  setup(){
    let sido = ref('서울');
    let region = ref('서울특별시');
    let sidos = ref([]);
    let regions = ref([]);
    let car_brand = ref('현대');
    let car_name = ref('아이오닉5 2WD 롱레인지 20인치');
    let car_brand_data = ref([]);
    let car_name_data = ref([]);
    let ev_cal_data = ref({});
    let cal_date = getInfoDate();
    let is_click_first_left = ref(false);
    let is_click_first_right = ref(false);
    let is_click_sec_left = ref(false);
    let is_click_sec_right = ref(false);
    // 시도 구하는 데이터
    const call_cal_sido = () => {
      fetch_api(urlTemplates.sido(),(data) => {
        sidos.value = data;
      });
    }
    // 시도 고른 후 데이터
    const call_cal_region = pSido => {
      fetch_api(urlTemplates.region(pSido),(data) => {
        regions.value = data;
        region.value = data[0].region;
      });
    }
    const call_car_brand = ()=>{
      let url = urlTemplates.car_brand();
      fetch_api(url, (data) =>{
        car_brand_data.value = data;
        console.log('car brand', car_brand_data.value)
      })
    }
    const call_car_name = pName =>{
      let url = urlTemplates.car_name(pName);
      fetch_api(url, (data) =>{
        car_name_data.value = data;
        car_name.value = data[0].category2
        console.log('car name', car_name_data.value)
      })
    }
    const call_ev_subsidy_calculator = (pSido, pRegion, pCategory, pCategory2, pDate) =>{
      let url = urlTemplates.ev_subsidy_calculator(pSido, pRegion, pCategory,pCategory2, pDate)
      fetch_api(url, (data) =>{
        ev_cal_data.value = data;
        console.log('cal data', ev_cal_data.value)
      })
    }
    function change_cal_sido(event){
      sido.value = event;
      let url = urlTemplates.region(sido.value)
      fetch_api(url,(data) => {
        regions.value = data;
        region.value = data[0].region;
        console.log('select sido', regions.value, region.value)
      });
      call_ev_subsidy_calculator(sido.value, region.value, car_brand.value, car_name.value, cal_date);
      is_click_first_left.value = false
    }
    function change_cal_region(event){
      region.value = event;
      call_ev_subsidy_calculator(sido.value, region.value, car_brand.value, car_name.value, cal_date);
      is_click_first_right.value = false
    }
    function change_cal_car_brand(event){
      car_brand.value = event;
      call_car_name(car_brand.value)
      call_ev_subsidy_calculator(sido.value, region.value, car_brand.value, car_name.value, cal_date);
      is_click_sec_left.value = false
    }
    function change_cal_car_name(event){
      car_name.value = event;
      call_ev_subsidy_calculator(sido.value, region.value, car_brand.value, car_name.value, cal_date);
      is_click_sec_right.value = false
    }

    function click_button(lr){
      is_click_first_left.value = !is_click_first_left.value && lr === 1;
      is_click_first_right.value = !is_click_first_right.value && lr === 2;
      is_click_sec_left.value = !is_click_sec_left.value && lr === 3;
      is_click_sec_right.value = !is_click_sec_right.value && lr === 4;
    }
    call_cal_sido();
    call_cal_region(sido.value);
    call_car_brand();
    call_car_name(car_brand.value);
    call_ev_subsidy_calculator(sido.value, region.value, car_brand.value, car_name.value, cal_date)
    return{
      sido, sidos, region, regions,is_click_first_left,is_click_first_right, is_click_sec_left, is_click_sec_right,cal_date,
      car_brand,car_name,car_brand_data, car_name_data, ev_cal_data,
      click_button, change_cal_sido, change_cal_region, change_cal_car_brand, change_cal_car_name}
  }
}
</script>

<style scoped>
@media (max-width: 600px) {
  .bottom{
    display: block!important;
    width: 100%!important;
    margin-top: 10px
  }
}
@media(max-width: 800px){
  .price_bottom{transform: translateY(-16px)}
  .price_top{transform: translateY(20px)}
}
@media (max-width:550px) {
  .text_control {text-align: center!important;}
  .color_blue {text-align: center}
}
</style>
