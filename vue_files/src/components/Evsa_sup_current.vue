<template>
  <Top_navBar></Top_navBar>
  <apexchart class="bar1" type="bar" width="300" height="300" :options="bar1_chartOptions" :series="bar1_series"></apexchart>
  <apexchart class="bar2" type="bar" width="300" height="300" :options="bar2_chartOptions" :series="bar2_series"></apexchart>
  <ApexCharts></ApexCharts>
</template>

<script>
  import Top_navBar from "./Top_navBar"
  import ApexCharts from "./ApexCharts"
  export default {
    name: "Evsa_sup_current",
    components: {
      Top_navBar,
      ApexCharts
    },
    data(){
      return{
        bar1_series: [{
          name: 'Marine Sprite',
          data: [44,]
        }, {
          name: 'Striking Calf',
          data: [53,]
        }
        ],
        bar1_chartOptions: {
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
        },
        bar2_series: [{
          name: 'Marine Sprite',
          data: [44,]
        }, {
          name: 'Striking Calf',
          data: [53,]
        }
        ],
        bar2_chartOptions: {
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
        }
      }
    }
  }
</script>

<style scoped>

</style>