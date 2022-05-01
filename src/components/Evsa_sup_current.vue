<template>
  <Top_navBar></Top_navBar>
  <select v-model="sup_av" @change="select_sup_ab(0, this.sup_show)" >
    <option  v-for="(v, i) in sup_availability" :value="v" :key="i+1">{{v}}</option>
  </select>
  <select v-model="deadline_av" @change="select_sup_ab(1, this.deadline_show, deadline_av)">
    <option v-for="(v, i) in deadline" :value="v" :key="i">{{v}}</option>
  </select>
  <!--
  <transition>
    <p >지원금 자격 부여 가능성이<span>{{sup_av}}</span>입니다.</p>
  </transition>
  -->
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
        sup_availability: ['매우 낮은편', '낮은편', '보통', '높은편', '매우 높은편'],
        deadline: ['마감여유','마감임박', '마감위험'],
        deadline_av: '마감여유',
        isRed:false,
        isBlack: true,
        sup_show:true,
        deadline_show: true,
        sup_av: '매우 낮은편',
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