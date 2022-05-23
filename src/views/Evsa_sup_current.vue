<template>
  <Top_navBar></Top_navBar>
  <p></p>
  <div class="border_b">
    <div class="inner">
      <div class="date">
        <div class="left">
          <h1>2022-04-11</h1>
          <h2>서울</h2>
        </div>
        <div class="right">
          <div>
            <div class="select first">
              <select class="label" @change="change_sido(sido_select_left)" v-model="sido_select_left">
                <option class="option item" v-for="(item, i) in sido_data" :key="i" >{{item.name}}</option>
              </select>
            </div>
            <div class="select second">
              <select class="label">
                <option class="item" v-for="(item, i) in sido_select_data" :key="i" @change="change_sido_select(item.region)">{{item.region}}</option>
              </select>
              <!--<button class="label">{{sido_select_right}}</button>-->
              <!--<ul class="option">-->
                <!--<li class="item" v-for="(item, i) in sido_select_data" :key="i" @click="change_sido_select(item.region)">{{item.region}}</li>-->
              <!--</ul>-->
            </div>
          </div>
          <div>
            <div class="checkbox1">
              <input type="checkbox" name="" id="agree1_1">
              <label for="agree1_1">일반 차량</label>
            </div>
            <div class="checkbox1">
              <input type="checkbox" name="" id="agree1_2">
              <label for="agree1_2">우선 차량</label>
            </div>
            <div class="select">
              <select class="label">
                <option>전체</option>
                <option>법인</option>
                <option>택시</option>
                <option>법인</option>
                <option>기타</option>
              </select>
              <!--<button class="label">기타</button>-->
              <!--<ul class="option">-->
                <!--<li class="item">전체</li>-->
                <!--<li class="item">법인</li>-->
                <!--<li class="item">택시</li>-->
                <!--<li class="item">전체</li>-->
                <!--<li class="item">법인</li>-->
                <!--<li class="item">택시</li>-->
                <!--<li class="item">전체</li>-->
                <!--<li class="item">법인</li>-->
                <!--<li class="item">택시</li>-->
                <!--<li class="item">전체</li>-->
                <!--<li class="item">법인</li>-->
                <!--<li class="item">택시</li>-->
              <!--</ul>-->
            </div>
          </div>
        </div>
      </div>
      <div class="grp">
        <div class="left">
          <p class="tit">접수대수</p>
          <div class="line_grp purple">
            <h1><em>{{info_recept}}</em> / {{info_notice}} <span>Total</span></h1>
            <div class="wrap">
              <div class="line1" :data-percent="info_accepted_rate">
                <span>{{info_recept}}대</span>
                <p>{{info_accepted_rate}}%</p>
              </div>
              <span>{{info_notice-info_recept}}대</span>
            </div>
            <div class="tar">
              <p>접수대수</p>
              <p>공고대수</p>
            </div>
          </div>
        </div>
        <div class="right">
          <p class="tit">잔여대수</p>
          <div class="line_grp blue">
            <h1><em>{{info_remain}}</em> / {{info_notice}} <span>Total</span></h1>
            <div class="wrap">
              <!-- data-percent 만큼 그래프 그려짐 -->
              <div class="line1" :data-percent="info_remain_rate">
                <span>{{info_remain}}대</span>
                <p>{{info_remain_rate}}%</p>
              </div>
              <span>{{info_notice-info_remain}}대</span>
            </div>
            <div class="tar">
              <p>접수대수</p>
              <p>공고대수</p>
            </div>
          </div>
        </div>
      </div>
      <div class="txt1">
        <h1>현재 보조금 신청 공고대수 대비</h1>
        <h2>접수율 {{info_accepted_rate}}%, <br class="v800">잔여대수 {{info_remain}}대로</h2>
        <!-- span 에 클래스 active가 추가되면 위로올라오도록 애니매이션 처리해둠 (active가 없다가 해당값이되면 addClass(active)처리 필요) -->
        <h3>방문자님은 해당 지자체 보조금 신청 시 <br>지원금 자격 부여 가능성이 <br class="v800"><span class="color_blue active">{{info_available_ratio_unit}}</span> 입니다.</h3>
        <p class="color_gray">* 공고대수보다 접수대수가 많을 시 접수 불가능할 수 있으니 해당 지자체로 문의주시길 바랍니다.  (지자체마다 접수 받는 기준이 다를 수 있음)<br>
          담당부서: 기후변화대응과(02-02-2133-3579)</p>
        <p class="color_gray">* 해당 신청 가능 여부는 data에 기반한 근거로 실제 보조금 신청 가능 여부는 지자체 상황에 따라 달라질 수 있습니다.</p>
        <p class="color_gray">* 자료출처 : 통합누리집</p>
      </div>
    </div>
  </div>
  <Sup_trend></Sup_trend>
  <div class="inner">
    <div class="border_b dead" style="border-bottom: 0;">
      <p class="tit">보조금 마감 지역 찾기</p>
      <div class="select">
        <button class="label">전북</button>
        <ul class="option">
          <li class="item">전북1</li>
          <li class="item">전북2</li>
          <li class="item">전북3</li>
          <li class="item">전북4</li>
        </ul>
      </div>
      <div class="select">
        <button class="label">완주군</button>
        <ul class="option">
          <li class="item">완주군1</li>
          <li class="item">완주군2</li>
          <li class="item">완주군3</li>
          <li class="item">완주군4</li>
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
          <td class="color_red">마감위험</td>
        </tr>
        <tr>
          <td>경기도</td>
          <td>용인시</td>
          <td>97%</td>
          <td class="color_red">마감위험</td>
        </tr>
        <tr>
          <td>충청북도</td>
          <td>충주시</td>
          <td>97%</td>
          <td class="color_red">마감위험</td>
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
  <a href="#" class="banner"><img src="images/bot_banner.png" alt=""></a>


</template>

<script>
import Top_navBar from "../components/Top_navBar"
import Sup_trend from "../components/Sup_trend"
import {fetch_api} from "../plugin.js"
import {ref} from "vue"

  export default {
    name: "Evsa_sup_current",
    components: {
      Top_navBar, Sup_trend
    },
    setup(){
      /*
      http://15.165.32.56:30423/api/v1/subsidy_closing_area?region=${region}&sido=${sido}
      http://15.165.32.56:30423/api/v1/subsidy_accepted?region=${region}&sido=${sido}
      http://15.165.32.56:30423/api/v1/subsidy_info?region=${region}&sido=${sido}
      http://15.165.32.56:30423/api/v1/subsidy_trend
      http://15.165.32.56:30423/api/v1/sido
      http://15.165.32.56:30423/api/v1/sido_filter?sido=경기
      http://15.165.32.56:30423/api/v1/subsidy_info?category2=전체&region=수원시&sido=경기&date=2022-05-20
       */
      let region_data = ref({});
      let sido = '서울시';
      let region = '서울';
      let my_date = new Date();
      let yy = String(my_date.getFullYear());
      let mm = my_date.getMonth() + 1;
      let dd = String(my_date.getDate() < 10 ? '0' + my_date.getDate() : my_date.getDate())
      let info_date = yy + '-' + mm +'-' + dd;
      let url = `http://15.165.32.56:30423/api/v1/ev_subsidy_calculator/?importer=${0}&model=${0}&region=${region}&sido=${sido}`;
      fetch_api(url,(data) => {
        console.log(data);
        region_data = data;
        console.log('getting region data',region_data)
      });
      // let url2 = `http://15.165.32.56:30423/api/v1/subsidy_trend`;
      // let trend_data = ref({});
      // fetch_api(url2, (data) =>{
      //   trend_data = data;
      //   console.log('트렌드 data',data, trend_data);
      // });
      let sido_url = `http://15.165.32.56:30423/api/v1/sido`;
      let sido_data = ref({});
      let sido_select_left = ref('서울');
      let sido_select_right = ref('서울 특별시');
      let sido_select_url = `http://15.165.32.56:30423/api/v1/sido_filter?sido=${sido_select_left.value}`;
      let sido_select_data = ref({});
      // 시도 고른 후 데이터
      fetch_api(sido_select_url,(data) => {
        sido_select_data.value = data;
        console.log('시도 고른 후 원본',data);
        console.log('select sido', sido_select_data.value)
      });
      // 시도 구하는 데이터
      fetch_api(sido_url,(data) => {
        sido_data.value = data;
        sido_select_right.value = data[0].region;
        console.log('getting sido data',sido_data.value)
      });
      // category 선별이 다되었다면 바뀌는 데이터들
      // url 하드코딩된거 나중가면 바꾸기
      // http://15.165.32.56:30423/api/v1/subsidy_info?category2=${category2}&region=${region}&sido=${sido}&date=${info_date}`
      let info_url = `http://15.165.32.56:30423/api/v1/subsidy_info?category2=전체&region=수원시&sido=경기&date=2022-05-20`;
      let category2 = ref('전체');
      console.log(info_date)
      let info_remain = ref('');
      let info_release = ref('');
      let info_recept = ref('');
      let info_remain_rate = ref('');
      let info_accepted_rate = ref('');
      let info_notice = ref('');
      let info_available_ratio_unit = ref('');
      fetch_api(info_url, (data) =>{
        info_remain.value = data.remains;
        info_recept.value = data.recept;
        info_remain_rate.value = data.remain_rate;
        info_release.value = data.release;
        info_accepted_rate.value = data.accepted_rate;
        info_notice.value = data.notice;
        info_available_ratio_unit.value = data.available_ratio_unit;
        console.log(data);
        console.log(info_available_ratio_unit.value, info_notice.value, info_remain.value, info_release.value, info_recept.value,info_accepted_rate.value, info_remain_rate.value);
      });
      function change_sido(change_data){
        // console.log(change_data)
        sido_select_left.value = change_data;
        let url = `http://15.165.32.56:30423/api/v1/sido_filter?sido=${change_data}`;
        fetch_api(url,(data) => {
          sido_select_data.value = data;
          sido_select_right.value = data[0].region;
          console.log('select sido', sido_select_data.value, sido_select_right.value)
        });
      }
      function change_sido_select(change_data){
        this.sido_select_right = change_data;

      }

      return{
        info_available_ratio_unit, category2, info_notice, info_remain,info_recept,info_release, info_remain_rate, info_accepted_rate ,change_sido, change_sido_select,sido_select_data,sido_select_url, sido_select_left,sido_select_right, sido_data, region_data,
      }
    },

  }
</script>

<style scoped>
  .first{ z-index: 99}
  .second{ z-index: 98}
  .item{max-height: 50px}
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