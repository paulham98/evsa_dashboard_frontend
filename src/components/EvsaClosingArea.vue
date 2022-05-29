<template>
  <div>
    <div class="inner">
      <div class="border_b dead" style="border-bottom: 0;">
        <p class="tit">보조금 마감 지역 찾기</p>
        <div class="select">
          <button class="label">전북</button>
          <ul class="option">
            <li class="item" v-for="(item, i) in sidos" :key="i" @click="changeSido(item.name)">{{item.name}}</li>
          </ul>
        </div>
        <div class="select">
          <button class="label">완주군</button>
          <ul class="option">
            <li class="item" v-for="(item, i) in regions" :key="i" @click="changeSido(item.region)">{{item.region}}</li>
          </ul>
        </div>
        <div class="select">
          <button class="label">전체</button>
          <ul class="option">
            <li class="item">전체1</li>
            <li class="item">전체2</li>
            <li class="item">전체3</li>
            <li class="item">전체4</li>
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
    console.log("setup child")
    let sido = ref('서울');
    console.log(urlTemplates, fetch_api, props.sidos)
    console.log('sidos:',props.sidos)
    console.log('regions:',props.regions)

    const changeSido = pSido =>{
      sido.value = pSido;
      // let url = urlTemplates.region(sido.value)
      // fetch_api(url,(data) => {
      //   regions.value = data;
      //   region.value = data[0].region;
      //   console.log('select sido', regions.value, region.value)
      // });
    }

    return {changeSido, }

  }
}
</script>

<style scoped>

</style>
