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
      <p class="tit">보조금 신청 접수 일별 트렌드</p>
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
  export default {
    name: "Sup_trend",
    setup(){
      let  mixed_chartOptions= {
        chart: {
          width: '130%',
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
              offsetX: -80,
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
      let mixed_series= [{
        name: '접수대수(누적)',
        type: 'column',
        data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6],
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
      return{mixed_chartOptions, mixed_series, line_series, line_chartOptions, bar1_chartOptions, bar1_series, bar2_chartOptions,bar2_series}
    }
  }
</script>

<style scoped>

</style>