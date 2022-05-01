<template>
  <div>
    <apexchart width="500" type="line" height="350" :options="mixed_chartOptions" :series="mixed_series" ></apexchart>
    <div>
      <apexchart type="line" height="350" :options="line_chartOptions" :series="line_series"></apexchart>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ApexCharts",
    components: {

    },
    data(){
      return{
        mixed_chartOptions: {
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
          title: {
            text: '보조금 접수 일별 트렌드(최근 1개월)',
            align: 'left',
            offsetX: 110
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
              title: {
                text: "Income (thousand crores)",
                style: {
                  color: '#008FFB',
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
              title: {
                text: "Operating Cashflow (thousand crores)",
                style: {
                  color: '#00E396',
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
              title: {
                text: "Revenue (thousand crores)",
                style: {
                  color: '#FEB019',
                }
              }
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
          }
        },
        mixed_series: [{
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
        }],
        line_series: [{
          name: "Desktops",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        },
          {
            name: "Desktops",
            data: [79, 101, 158]
          }
        ],
        line_chartOptions: {
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
          }
        },
      }
     },
  }

</script>

<style scoped>

</style>