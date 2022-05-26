<template>
  <div class="border_b">
    <div class="inner">
      <p class="tit">보조금 신청 접수 일별 트렌드</p>
      <div class="area1">
        <apexchart class="chart"  type="line" height="520" style="padding-top: 10px;" :options="mixed_chartOptions" :series="mixed_series" ></apexchart>
      </div>
    </div>
    <a href="#" class="banner"><img src="images/mid_banner.png" alt=""></a>
    <div class="inner">
      <p class="tit">보조금 신청 접수예측별 트렌드</p>
      <div class="area2">
        <apexchart class="chart" type="line" height="520" :options="line_chartOptions" :series="line_series"></apexchart>
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
</template>

<script>
import {onMounted,onUpdated, ref} from 'vue'
import {fetch_api} from "../plugin.js"
  export default {
    name: "Sup_trend",
    props:{
      sido: String,
      region: String,
      category: String
    },
    setup(props){
      onUpdated(() =>{
        mixed_chartOptions.value = {
          chart: {
            width: '100%',
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
            categories: trend_chart_date
          },
          yaxis: [
            {
              axisTicks: {
                show: true,
              },
              axisBorder: {
                show: true,
                color: '#008FFB',
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
              opposite: true,
              axisTicks: {
                show: true,
              },
              axisBorder: {
                show: true,
                color: '#00E396',
              },
              labels: {
                offsetX: -55,
                style: {
                  colors: '#00E396',
                }
              },
            },
            {
              opposite: true,
              axisTicks: {
                show: true,
              },
              axisBorder: {
                show: true,
                color: '#FEB019'
              },
              labels: {
                offsetX: 10,
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
        mixed_series.value = [{
          name: '접수대수(누적)',
          type: 'column',
          data: trend_chart_accepted,
        }, {
          name: '출고대수(누적)',
          type: 'column',
          data: trend_chart_release,
        }, {
          name: '접수대수(일별)',
          type: 'line',
          data: trend_chart_recept
        }];
        console.log(mixed_chartOptions.value, mixed_series.value)
      });
      console.log('sup trend data', props.sido, props.region, props.category);
      let my_date = new Date();
      let yy = String(my_date.getFullYear());
      let mm = my_date.getMonth() + 1;
      let dd = String(my_date.getDate() < 10 ? '0' + my_date.getDate() : my_date.getDate())
      let trend_date = yy + '-' + mm +'-' + dd;
      // 하드코딩된거 바꿔주기
      // let url2 = `http://15.165.32.56:30423/api/v1/subsidy_trend?category2=${props.category}&date1=${trend_date-7}&date2=${trend_date}&region=${props.region}&sido=${props.sido}`;
      let url2 = `http://15.165.32.56:30423/api/v1/subsidy_trend?category2=${props.category}&date1=2022-05-13&date2=2022-05-20&region=${props.region}&sido=${props.sido}`;
      // let trend_data = ref([]);
      let trend_chart_date = [];
      let trend_chart_accepted = [];
      let trend_chart_release = [];
      let trend_chart_recept = [];
      fetch_api(url2, (data) =>{
        // trend_data.value = data;
        console.log('트렌드 data', data);
        for(let item of data[0].slice(1)){
          trend_chart_date.push(item)
          // console.log(item, parseInt(item))
        }
        for(let item of data[2].slice(1)){
          trend_chart_accepted.push(parseInt(item))
        }
        for(let item of data[3].slice(1)){
          trend_chart_release.push(parseInt(item))
        }
        for(let item of data[4].slice(1)){
          trend_chart_recept.push(parseInt(item))
        }
        console.log(trend_chart_date, trend_chart_accepted, trend_chart_release, trend_chart_recept)
      });
      let mixed_chartOptions = ref({});
      let mixed_series = ref([]);
      mixed_chartOptions.value = {
        chart: {
          width: '130%',
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
          categories: trend_chart_date
        },
        yaxis: [
          {
            axisTicks: {
              show: true,
            },
            axisBorder: {
              show: true,
              color: '#008FFB',
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
            opposite: true,
            axisTicks: {
              show: true,
            },
            axisBorder: {
              show: true,
              color: '#00E396',
            },
            labels: {
              offsetX: -55,
              style: {
                colors: '#00E396',
              }
            },
          },
          {
            opposite: true,
            axisTicks: {
              show: true,
            },
            axisBorder: {
              show: true,
              color: '#FEB019'
            },
            labels: {
              offsetX: 10,
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
      mixed_series.value = [{
        name: '접수대수(누적)',
        type: 'column',
        data: trend_chart_accepted,
      }, {
        name: '출고대수(누적)',
        type: 'column',
        data: trend_chart_release,
      }, {
        name: '접수대수(일별)',
        type: 'line',
        data: trend_chart_recept
      }];
      console.log(mixed_chartOptions.value, mixed_series.value)
      //
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
      onMounted(()=>{
      });
      return{trend_date,mixed_chartOptions, mixed_series, line_series, line_chartOptions, bar1_chartOptions, bar1_series, bar2_chartOptions,bar2_series}
    }
  }
</script>

<style scoped>

</style>
