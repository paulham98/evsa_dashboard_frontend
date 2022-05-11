<template>
  <Top_navBar></Top_navBar>
  <div class="border_b">
    <div class="inner">
      <div class="date">
        <div class="left">
          <h1>2022-04-11</h1>
          <h2>서울</h2>
        </div>
        <div class="right">
          <div>
            <div class="select">
              <button class="label">서울특별시</button>
              <ul class="option">
                <li class="item">서울특별시1</li>
                <li class="item">서울특별시2</li>
                <li class="item">서울특별시3</li>
                <li class="item">서울특별시4</li>
              </ul>
            </div>
            <div class="select">
              <button class="label">서울</button>
              <ul class="option">
                <li class="item">서울1</li>
                <li class="item">서울2</li>
                <li class="item">서울3</li>
                <li class="item">서울4</li>
              </ul>
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
              <button class="label">기타</button>
              <ul class="option">
                <li class="item">전체</li>
                <li class="item">법인</li>
                <li class="item">택시</li>
                <li class="item">전체</li>
                <li class="item">법인</li>
                <li class="item">택시</li>
                <li class="item">전체</li>
                <li class="item">법인</li>
                <li class="item">택시</li>
                <li class="item">전체</li>
                <li class="item">법인</li>
                <li class="item">택시</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="grp">
        <div class="left">
          <p class="tit">접수대수</p>
          <div class="line_grp purple">
            <h1><em>2,250</em> / 3000 <span>Total</span></h1>
            <div class="wrap">
              <div class="line1" data-percent="72">
                <span>2,250대</span>
                <p>72%</p>
              </div>
              <span>750대</span>
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
            <h1><em>2,350</em> / 3000 <span>Total</span></h1>
            <div class="wrap">
              <!-- data-percent 만큼 그래프 그려짐 -->
              <div class="line1" data-percent="50">
                <span>2,350대</span>
                <p>20%</p>
              </div>
              <span>750대</span>
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
        <h2>접수율 72%, <br class="v800">잔여대수 2,200대로</h2>
        <!-- span 에 클래스 active가 추가되면 위로올라오도록 애니매이션 처리해둠 (active가 없다가 해당값이되면 addClass(active)처리 필요) -->
        <h3>방문자님은 해당 지자체 보조금 신청 시 <br>지원금 자격 부여 가능성이 <br class="v800"><span class="color_blue active">높은 편</span> 입니다.</h3>
        <p class="color_gray">* 공고대수보다 접수대수가 많을 시 접수 불가능할 수 있으니 해당 지자체로 문의주시길 바랍니다.  (지자체마다 접수 받는 기준이 다를 수 있음)<br>
          담당부서: 기후변화대응과(02-02-2133-3579)</p>
        <p class="color_gray">* 해당 신청 가능 여부는 data에 기반한 근거로 실제 보조금 신청 가능 여부는 지자체 상황에 따라 달라질 수 있습니다.</p>
        <p class="color_gray">* 자료출처 : 통합누리집</p>
      </div>
    </div>
  </div>
  <div class="border_b">
    <div class="inner">
      <p class="tit">보조금 신청 접수 예측 트렌드</p>
      <div class="area1">
        <apexchart class="chart"  type="line" height="500" :options="mixed_chartOptions" :series="mixed_series" ></apexchart>
      </div>
    </div>
    <a href="#" class="banner"><img src="images/mid_banner.png" alt=""></a>
    <div class="inner">
      <p class="tit">보조금 신청 접수 예측 트렌드</p>
      <div class="area2">
        <apexchart class="chart" type="line" height="500" :options="line_chartOptions" :series="line_series"></apexchart>
      </div>
      <div class="txt2">
        <h1>일 평균 접수대수 <em class="color_sky">3.2</em>대, <br class="v800">출고대수 <em class="color_sky">8</em>대로</h1>
        <h2><em class="color_sky">04-12</em> 기준 <em class="color_sky">90</em>일 후 <br class="v800"><em class="color_red">마감 예정</em>입니다.</h2>
        <h3><em class="color_sky">73</em>일 내 보조금 신청 시 <br class="v800"><em class="color_green">접수 안정권</em> 입니다.</h3>
        <p class="color_gray">* 보조금 신청 접수 예측 트렌드는 통합 누리집 data에 기반하였으며 실제 신청 접수 가능여부는<br>
          지자체 상황에 따라 달라질 수 있습니다.</p>
      </div>
    </div>
  </div>
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

  <!--
  <select v-model="sup_av" @change="select_sup_ab(0, this.sup_show)" >
    <option  v-for="(v, i) in sup_availability" :value="v" :key="i+1">{{v}}</option>
  </select>
  <select v-model="deadline_av" @change="select_sup_ab(1, this.deadline_show, deadline_av)">
    <option v-for="(v, i) in deadline" :value="v" :key="i">{{v}}</option>
  </select>
  <transition>
    <p >지원금 자격 부여 가능성이<span>{{sup_av}}</span>입니다.</p>
  </transition>
  <Transition name="fadeOne">
    <p >지원금 자격 부여 가능성이{{sup_av}}입니다.</p>
  </Transition>
  <transition name="fadeOne">
    <p v-show="!sup_show" class="container">지원금 자격 부여 가능성이 {{sup_av}}입니다.</p>
  </transition>
  <Transition name="fadeTwo" mode="out-in">
    <p v-if="deadline_show" :class="{deadline_red:isRed, deadline_black:isBlack}">{{deadline_av}}</p>
    <p v-else :class="{deadline_red:isRed}">{{deadline_av}}</p>
  </Transition>
  <apexchart class="bar1" type="bar" width="300" height="300" :options="bar1_chartOptions" :series="bar1_series"></apexchart>
  <apexchart class="bar2" type="bar" width="300" height="300" :options="bar2_chartOptions" :series="bar2_series"></apexchart>
  -->

</template>

<script>
import Top_navBar from "../components/Top_navBar"
import {fetch_api} from "../plugin.js"
import {ref} from "vue"
  export default {
    name: "Evsa_sup_current",
    components: {
      Top_navBar
    },
    setup(){
      let sup_availability = ['매우 낮은편', '낮은편', '보통', '높은편', '매우 높은편'];
      let deadline = ['마감여유','마감임박', '마감위험'];
      let deadline_av = '마감여유';
      let isRed = false;
      let isBlack = true;
      let sup_show = true;
      let deadline_show = true;
      let sup_av = '매우 낮은편';
      let  mixed_chartOptions= {
        chart: {
          height: 350,
            type: 'line',
            stacked: false,
        },
        plotOptions: {
          bar: {
            horizontal: false,
              borderRadius: 7,
          },
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: [1, 1, 4]
        },

        xaxis: {
          categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
        },
        yaxis: [
          {
            axisTicks: {
              show: true,
            },
            axisBorder: {
              show: true,
              color: '#008FFB'
            },
            labels: {
              style: {
                colors: '#008FFB',
              }
            },
            tooltip: {
              enabled: true
            }
          },
          {
            seriesName: 'Income',
            opposite: true,
            axisTicks: {
              show: true,
            },
            axisBorder: {
              show: true,
              color: '#00E396',
            },
            labels: {
              style: {
                colors: '#00E396',
              }
            },

          },
          {
            seriesName: 'Revenue',
            opposite: true,
            axisTicks: {
              show: true,
            },
            axisBorder: {
              show: true,
              color: '#FEB019'
            },
            labels: {
              style: {
                colors: '#FEB019',
              },
            },
          },
        ],
          tooltip: {
          fixed: {
            enabled: true,
              position: 'topLeft', // topRight, topLeft, bottomRight, bottomLeft
              offsetY: 30,
              offsetX: 60
          },
        },
        legend: {
          horizontalAlign: 'left',
            offsetX: 40
        },
        responsive:[{
          breakpoint: 450,
          options:{
          }

        }]
      };
      let mixed_series= [{
        name: '접수대수(누적)',
        type: 'column',
        data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6]
      }, {
        name: '출고대수(누적)',
        type: 'column',
        data: [1.1, 3, 3.1, 4, 4.1, 4.9, 6.5, 8.5]
      }, {
        name: '접수대수(일별)',
        type: 'line',
        data: [20, 29, 37, 36, 44, 45, 50, 58]
      }];
      let line_series = [{
        name: "Desktops",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
      },
        {
          name: "Desktops",
          data: [79, 101, 158]
        }
      ];
      let bar1_series= [{
        name: 'Marine Sprite',
        data: [44,]
      }, {
        name: 'Striking Calf',
        data: [53,]
      }
      ];
      let bar1_chartOptions = {
        chart: {
          type: 'bar',
            height: 350,
            stacked: true,
            stackType: '100%',
            width: 200
        },
        plotOptions: {
          bar: {
            horizontal: true,
              borderRadius:5
          },
        },
        stroke: {
          width: 1,
            colors: ['#fff']
        },
        title: {
          text: '100% Stacked Bar'
        },
        xaxis: {
          categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014],
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return val + "K"
            }
          }
        },
        fill: {
          opacity: 1

        },
        legend: {
          position: 'top',
            horizontalAlign: 'left',
            offsetX: 40
        }
      };
      let bar2_series = [{
        name: 'Marine Sprite',
        data: [44,]
      }, {
        name: 'Striking Calf',
        data: [53,]
      }
      ];
      let bar2_chartOptions = {
        chart: {
          type: 'bar',
            height: 350,
            stacked: true,
            stackType: '100%',
            width: 200
        },
        plotOptions: {
          bar: {
            horizontal: true,
              borderRadius:5
          },
        },
        stroke: {
          width: 1,
            colors: ['#fff']
        },
        title: {
          text: '100% Stacked Bar'
        },
        xaxis: {
          categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014],
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return val + "K"
            }
          }
        },
        fill: {
          opacity: 1

        },
        legend: {
          position: 'top',
            horizontalAlign: 'left',
            offsetX: 40
        }
      };
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
      let region_data = ref({});
      let trend_data = ref({});
      let sido = '서울시';
      let region = '서울';
      /*
      http://15.165.32.56:30423/api/v1/subsidy_closing_area?region=${region}&sido=${sido}
      http://15.165.32.56:30423/api/v1/subsidy_accepted?region=${region}&sido=${sido}
      http://15.165.32.56:30423/api/v1/subsidy_info?region=${region}&sido=${sido}
      http://15.165.32.56:30423/api/v1/subsidy_trend
       */
      let url = `http://15.165.32.56:30423/api/v1/ev_subsidy_calculator/?importer=${0}&model=${0}&region=${region}&sido=${sido}`;
      fetch_api(url,(data) => {
        console.log(data);
        region_data = data;
        console.log('getting region data',region_data)
      });
      let url2 = `http://15.165.32.56:30423/api/v1/subsidy_trend`;
      fetch_api(url2, (data) =>{
        trend_data = data
        console.log('트렌드 data',data, trend_data);
      });
      return{
        region_data, sup_availability, deadline, deadline_av, isRed, isBlack, sup_show, deadline_show, sup_av, mixed_chartOptions, mixed_series, line_series, line_chartOptions, bar1_chartOptions, bar1_series, bar2_chartOptions,bar2_series
      }
    },
    methods:{
      select_sup_ab(i, show, deadline){
        if(show && i === 0){
          this.sup_show=false
        }else if(!show && i === 0){
          this.sup_show=true
        }
        if(show && i === 1 ){
          this.deadline_show = false
        }else if(!show && i === 1){
          this.deadline_show = true
        }
        if( i === 1 && deadline === '마감임박'){
          this.isRed = true;
          this.isBlack = false
        }else if( i === 1 && deadline === '마감위험'){
          this.isRed = true;
          this.isBlack = false
        }else if( i === 1 && deadline === '마감여유'){
          this.isRed = false;
          this.isBlack = true
        }
      }
    },
  }
</script>

<style scoped>
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