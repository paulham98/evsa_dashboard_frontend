<template>
  <div>
    <div class="inner">
      <div class="border_b dead" style="border-bottom: 0;">
        <p class="tit">보조금 마감 지역 찾기</p>
        <div :class="is_click_left?'select active first':'select first'">
          <button class="label" @click="click_button(1)">{{sido}}</button>
          <ul class="option">
            <li class="item" v-for="(item, i) in sidos" :key="i" @click="changeSido(item.name)">{{item.name}}</li>
          </ul>
        </div>
        <div :class="is_click_right?'select active second':'select second'">
          <button class="label" @click="click_button(2)">{{region}}</button>
          <ul class="option">
            <li class="item" v-for="(item, i) in closing_regions" :key="i" @click="changeRegion(item.region)">{{item.region}}</li>
          </ul>
        </div>
        <div :class="is_click_third?'select active':'select'">
          <button class="label" @click="click_button(3)">{{category2}}</button>
          <ul class="option">
            <li class="item" v-for="(item, i) in third_select_options" :key="i" @click="changeSelectCategory2(item)">{{item}}</li>
          </ul>
        </div>
        <div class="table_wrap">
          <table>
            <thead>
            <tr style="text-align: center">
              <th>시·도</th>
              <th>지 역</th>
              <th>보조금</th>
              <th>접수율</th>
              <th>마감여부</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>{{closing_area_data.sido}}</td>
              <td>{{closing_area_data.region}}</td>
              <td>{{closing_area_data.subsidy +" "+ closing_area_data.subsidy_unit}}</td>
              <td>{{closing_area_data.accepted_rate +closing_area_data.accepted_rate_unit}}</td>
              <td class="color_red">{{capital_text_dto.is_deadline}}</td>
            </tr>
            </tbody>
          </table>
        </div>
        <p class="color_gray">* 접수율 기준 (전체 공고대수 대비 전체 접수대수)</p>
        <p class="color_gray">* 마감된 지자체 추가 공고 및 접수 문의는 해당 지자체 문의 부탁드립니다 . 담당부서 : 기후변화대응과(02-02-2133-3579)</p>
      </div>
    </div>
    <!-- 아래 hidden 클래스 div에 클래스 active가 추가되면 위로올라오도록 애니매이션 처리해둠 (active가 없다가 해당값이되면 addClass(active)처리 필요) -->
    <div :class="addClass?'hidden active':'hidden'">
      <div class="inner">
        <div class="txt3">
          <h1>{{capital_text_arr1[0]}}</h1>
          <h2>{{capital_text_arr1[1] +" "+ capital_text_arr1[2] +" "+ capital_text_arr1[3] +" "}}
            <br class="v800">{{capital_text_arr1[4] +" "+ capital_text_arr1[5]}}
            <br>{{capital_text_arr1[6]}}</h2>
        </div>
      </div>
      <div class="txt_bg">
        <div class="inner">
          <h1>{{capital_text_arr2[0]+" "+capital_text_arr2[1]}}</h1>
          <h2>{{capital_text_arr2[2]+" "+capital_text_arr2[3]}}<br class="v800"><em class="color_sky" v-for="(item, i) of highlight_words" :key="i">{{item}}</em><br class="v800">{{capital_text_arr2[5]+" "+capital_text_arr2[6]+" "+capital_text_arr2[7]}}</h2>
          <p class="color_gray tac" v-for="(item, i) in capital_text_arr3" :key="i">{{item}}</p>
        </div>
      </div>
      <div class="inner">
        <p class="tit">최대 보조금 받기</p>
        <ul class="list" v-if="!show_more">
          <li v-for="(item, i) in capital_data_default" :key="i">
            <div>
              <span>{{item.capital_name}}</span>
              <p>{{item.subsidy + item.subsidy_unit}}</p>
            </div>
            <div>
              <p>{{item.sido +" "+ item.region}}</p>
              <p>접수대수 <em class="color_sky">{{item.accept}}</em> <span><em>/ {{item.total}}</em> {{item.total_unit}}</span></p>
            </div>
            <a href="#">문의하기</a>
          </li>
        </ul>
        <ul class="list" v-if="show_more">
          <li v-for="(item, i) in capital_data" :key="i" >
            <div>
              <span>{{item.capital_name}}</span>
              <p>{{item.subsidy + item.subsidy_unit}}</p>
            </div>
            <div>
              <p>{{item.sido +" "+ item.region}}</p>
              <p>접수대수 <em class="color_sky">{{item.accept}}</em> <span><em>/ {{item.total}}</em> {{item.total_unit}}</span></p>
            </div>
            <a href="#">문의하기</a>
          </li>
        </ul>
        <button class="more" @click="click_more">더보기</button>
        <p class="color_gray tac" v-for="(item, i) in capital_text_arr3" :key="i">{{item}}</p>
      </div>
    </div>
    <div class="inner last">
      <p class="tit" v-if="!top_list">마감 예정 지역 TOP 5</p>
      <p class="tit" v-if="top_list">마감 예정 지역 List</p>
      <p class="color_gray">*마감 예정 지역은 보조금 접수율 90%이상 지역으로 접수 지원시 마감 위험이 있는 지역입니다.</p>
      <div class="table_wrap">
        <table>
          <thead>
          <tr style="text-align: center">
            <th>시·도</th>
            <th>지 역</th>
            <th>접수율</th>
            <th>마감예정 여부</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(item, i) in closing_area_dtos" :key="i">
            <td>{{item.sido}}</td>
            <td>{{item.region}}</td>
            <td>{{item.accepted_rate+item.accepted_rate_unit}}</td>
            <td class="color_red">{{item.is_deadline}}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>


  </div>
</template>

<script>
import urlTemplates from "@/composables/urlTemplates";
import {fetch_api} from "@/plugin";
import {ref} from "vue";
import {getInfoDate} from "@/composables/getInfoDate";
export default {
  name: "EvsaClosingArea",
  props: {
    sidos: Array,
    regions: Array,
  },
  setup(props){
    let sido = ref('서울');
    let region = ref('서울특별시');
    let category2 = ref('선택해주세요');
    let closing_date = getInfoDate();
    let third_select_options = ref(['전체', '법인', '택시']);
    let closing_area_data = ref({})
    let closing_area_dtos = ref([])
    let capital_text_dto = ref({})
    let is_click_left = ref(false);
    let is_click_right = ref(false);
    let is_click_third = ref(false);
    let closing_regions = ref(props.regions)
    let addClass = ref(false)
    let capital_text_arr1 = ref([])
    let capital_text_arr2 = ref([])
    let capital_text_arr3 = ref([])
    let capital_data = ref([])
    let capital_data_default = ref([])
    let show_more = ref(false)
    let top_list = ref(false)
    let highlight_words = ref([])
    //console.log(urlTemplates, fetch_api, props.sidos)
    console.log('sidos:',props.sidos)
    console.log('regions:',props.regions)

    const callClosingArea = (pSido, pRegion, pCategory2, pDate) => {
      let url = urlTemplates.subsidy_closing_area(pSido, pRegion, pCategory2, pDate)
      fetch_api(url, (data) =>{
        // console.log('url:', url)
        console.log('마감 지역 파라미터',pSido, pRegion,pCategory2,pDate)
        console.log('마감지역 최초 데이터', data)
        closing_area_data.value = data
        capital_text_arr1.value = []
        capital_text_arr2.value = []
        // console.log(info_available_ratio_unit.value, info_notice.value, info_remain.value, info_release.value, info_recept.value,info_accepted_rate.value, info_remain_rate.value);
        if(data.closingAreaDtos.length <= 5){
          top_list.value = data.closingAreaDtos.length !== 5;
          closing_area_dtos.value = data.closingAreaDtos
        }else if(data.closingAreaDtos.length >5){
          for(let i = 0; i< 5; i++){
            closing_area_dtos.value.push(data.closingAreaDtos[i])
          }
        }
        capital_text_dto.value = data.capitalTextDto
        for(let item of capital_text_dto.value.text1.split(' ')){
          capital_text_arr1.value.push(item)
        }
        for(let item of capital_text_dto.value.text2.split(' ')){
          capital_text_arr2.value.push(item)
        }
        // 강조된 글씨 걸러내는 과정
        let tmp = capital_text_dto.value.text2.match('\\<b\\>[a-zA-Z가-힣0-9]+\\<\\/b\\>')[0]
        highlight_words.value = tmp.split('<b>')[1]
        highlight_words.value = highlight_words.value.split('</b>')[0]
        console.log(highlight_words.value)
        // console.log(capital_text_arr2.value)
        capital_text_arr3.value = capital_text_dto.value.description.split('\\n')
        console.log('closing_area:', closing_area_data.value, closing_area_dtos.value);
        console.log('text data', capital_text_arr2.value)
      });
    }
    const callCapitalData = (pDate) =>{
      let url = urlTemplates.subsidy_capital(pDate)
      fetch_api(url, (data) =>{
        // console.log('최대 보조금 받기 data', data)
        for(let i =0; i < 3; i++){
          capital_data_default.value.push(data[i])
        }
        capital_data.value = data
      })
    }
    callCapitalData(closing_date)
    if(category2.value === '선택해주세요'){
      callClosingArea(sido.value, region.value, '전체', closing_date)
    }else{
      callClosingArea(sido.value, region.value, category2.value, closing_date)
    }

    console.log('마감 지역 전체 데이터',closing_area_data.value)

    function click_more(){
      if (show_more.value === false) return show_more.value = true
    }
    function click_button(lr){
      if(!is_click_left.value && lr === 1)is_click_left.value = true;
      else is_click_left.value = false;
      if(!is_click_right.value && lr === 2)is_click_right.value = true;
      else is_click_right.value = false;
      if(!is_click_third.value && lr === 3)is_click_third.value = true;
      else is_click_third.value = false;
    }
    // 1
    const changeSido = pSido =>{
      sido.value = pSido;
      let url = urlTemplates.region(sido.value)
      fetch_api(url,(data) => {
        closing_regions.value = data;
        region.value = data[0].region;
        console.log(data)
        // console.log('select sido', regions.value, region.value)
        if(category2.value !== '선택해주세요'){
          callClosingArea(sido.value, region.value, category2.value, closing_date)
        }
      });

      is_click_left.value = false
    };
    // 2
    function changeRegion(event){
      console.log('region:',event)
      region.value = event;
      if(category2.value !== '선택해주세요'){
        callClosingArea(sido.value, region.value, category2.value, closing_date)
      }
      is_click_right.value = false
    }
    // 3
    function changeSelectCategory2(event) {
      if(event === '전체' || event === '법인' || event === '택시'){
        third_select_options.value = ['전체', '법인', '택시'];
      }
      category2.value = event;
      // callClosingArea(sido.value, region.value, '전체', '2022-05-28')
      is_click_third.value = false
      if(category2.value !== '선택해주세요'){
        addClass.value = true
      }
      if(category2.value !== '선택해주세요'){
        callClosingArea(sido.value, region.value, category2.value, closing_date)
      }
    }

    return {sido, region,closing_regions,is_click_left,is_click_right,is_click_third,category2,third_select_options,addClass,show_more,top_list,
      click_button, click_more, changeSido,changeRegion, changeSelectCategory2,
      closing_area_data, closing_area_dtos, capital_text_dto,capital_text_arr1,capital_text_arr2, capital_text_arr3,
      capital_data, capital_data_default,highlight_words}

  }
}
</script>

<style scoped>
  .first{ z-index: 99}
  .second{ z-index: 98}
</style>
