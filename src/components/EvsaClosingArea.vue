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
            <tr>
              <th>시·도</th>
              <th>지 역</th>
              <th>보조금</th>
              <th>접수율</th>
              <th>마감여부</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>전라북도</td>
              <td>완주군</td>
              <td>1400</td>
              <td>560%</td>
              <td class="color_red">마감위험</td>
            </tr>
            </tbody>
          </table>
        </div>
        <p class="color_gray">* 접수율 기준 (전체 공고대수 대비 전체 접수대수)</p>
        <p class="color_gray">* 마감된 지자체 추가 공고 및 접수 문의는 해당 지자체 문의 부탁드립니다 . 담당부서 : 기후변화대응과(02-02-2133-3579)</p>
      </div>
    </div>
    <!-- 아래 hidden 클래스 div에 클래스 active가 추가되면 위로올라오도록 애니매이션 처리해둠 (active가 없다가 해당값이되면 addClass(active)처리 필요) -->
    <div class="hidden active">
      <div class="inner">
        <div class="txt3">
          <h1>잠깐</h1>
          <h2>거주하고 계신 지역 보조금 <br class="v800">신청이 마감될까봐<br>걱정이신가요?</h2>
        </div>
      </div>
      <div class="txt_bg">
        <div class="inner">
          <h1>캐피탈 리스(법인)로</h1>
          <h2>신청하시면 보조금을 <br class="v800"><em class="color_sky">최</em><em class="color_sky">대</em><em class="color_sky">한</em> <br class="v800">받을 수 있습니다.</h2>
          <p>* 캐피탈 지점별 최대 보조금은 제조사 및 모델에 따라 금액이 달라질 수 있습니다.</p>
          <p>* 캐피탈 리스이용은 리스사 명의로 보조금 신청 분류 중 법인에 해당합니다.</p>
          <p>* 자세한 보조금 신청 상담은 캐피탈 리스사에 문의해주세요.</p>
        </div>
      </div>
      <div class="inner">
        <p class="tit">최대 보조금 받기</p>
        <ul class="list">
          <li>
            <div>
              <span>KB캐피탈</span>
              <p>1,400만원</p>
            </div>
            <div>
              <p>충남 공주시</p>
              <p>접수대수 <em class="color_sky">19</em> <span><em>/ 45</em> 대</span></p>
            </div>
            <a href="#">문의하기</a>
          </li>
          <li>
            <div>
              <span>KB캐피탈</span>
              <p>1,400만원</p>
            </div>
            <div>
              <p>충남 아산시</p>
              <p>접수대수 <em class="color_sky">108</em> <span><em>/ 120</em> 대</span></p>
            </div>
            <a href="#">문의하기</a>
          </li>
          <li>
            <div>
              <span>KB캐피탈</span>
              <p>900만원</p>
            </div>
            <div>
              <p>세종 세종특별자치시</p>
              <p>접수대수 <em class="color_sky">52</em> <span><em>/ 141</em> 대</span></p>
            </div>
            <a href="#">문의하기</a>
          </li>
        </ul>
        <button class="more">더보기</button>
        <p class="color_gray tac">*캐피탈 지점별 최대 보조금은 제조사 및 모델에 따라 금액이 달라질 수 있습니다.</p>
        <p class="color_gray tac">*캐피탈 리스이용은 리스사 명의로 보조금 신청 분류 중 법인에 해당합니다. </p>
        <p class="color_gray tac">*자세한 보조금 신청 상담은 캐피탈 리스사에 문의해주세요.</p>
      </div>
    </div>
    <div class="inner last">
      <p class="tit">마감 예정 지역 TOP 5</p>
      <p class="color_gray">*마감 예정 지역은 보조금 접수율 90%이상 지역으로 접수 지원시 마감 위험이 있는 지역입니다.</p>
      <div class="table_wrap">
        <table>
          <thead>
          <tr>
            <th>시·도</th>
            <th>지 역</th>
            <th>접수율</th>
            <th>마감예정 여부</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>충청북도</td>
            <td>단양군</td>
            <td>97%</td>
            <td class="color_red">마감예정</td>
          </tr>
          <tr>
            <td>경기도</td>
            <td>용인시</td>
            <td>97%</td>
            <td class="color_red">마감예정</td>
          </tr>
          <tr>
            <td>충청북도</td>
            <td>충주시</td>
            <td>97%</td>
            <td class="color_red">마감예정</td>
          </tr>
          <tr>
            <td>경기도</td>
            <td>시흥시</td>
            <td>97%</td>
            <td class="color_red">마감위험</td>
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
    let third_select_options = ref(['전체', '법인', '택시', '기타']);
    let closing_area_data = ref({})
    let closing_area_dtos = ref([])
    let capital_text_dto = ref({})
    let is_click_left = ref(false);
    let is_click_right = ref(false);
    let is_click_third = ref(false);
    let closing_regions = ref(props.regions)
    console.log(urlTemplates, fetch_api, props.sidos)
    console.log('sidos:',props.sidos)
    console.log('regions:',props.regions)

    const callClosingArea = (pSido, pRegion, pCategory2, pDate) => {
      let url = urlTemplates.subsidy_closing_area(pSido, pRegion, pCategory2, pDate)
      fetch_api(url, (data) =>{
        // console.log('url:', url)
        console.log('closing_area:', data, url);
        // console.log(info_available_ratio_unit.value, info_notice.value, info_remain.value, info_release.value, info_recept.value,info_accepted_rate.value, info_remain_rate.value);
        closing_area_dtos.value = data.closingAreaDtos
        capital_text_dto.value = data.capitalTextDto
      });
    }
    closing_area_data.value = callClosingArea(sido.value, region.value, '전체', '2022-05-28')

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
      });
      // if(category2 !== '선택해주세요'){
      //
      // }
      is_click_left.value = false
    };
    // 2
    function changeRegion(event){
      console.log('region:',event)
      region.value = event;
      is_click_right.value = false
    }
    // 3
    function changeSelectCategory2(event) {
      if(event === '전체' || event === '법인' || event === '택시'){
        third_select_options.value = ['전체', '법인', '택시'];
      }
      category2.value = event;
      callClosingArea(sido.value, region.value, '전체', '2022-05-28')
      is_click_third.value = false
    }

    return {sido, region,closing_regions,is_click_left,is_click_right,is_click_third,category2,third_select_options,
      click_button, changeSido,changeRegion, changeSelectCategory2,
      closing_area_data, }

  }
}
</script>

<style scoped>

</style>
