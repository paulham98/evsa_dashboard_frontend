let mixed_chart_options = (close,dates) => {
  return {
    chart: {
      width: '100%',
      type: 'line',
      stacked: false,
    },
    annotations:{
      yaxis:[{
        y: [0, close, 0, 0],
        borderColor: '#cd39ae',
        label: {
          borderColor: 'black',
          style: {
            color: 'black',
            background: '#fff',
          },
          text: '접수 마감선',
        }
      }]
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
      width: [1, 1, 1],
      // dashArray: [0,7,0]
    },
    xaxis: {
      categories: dates
    },
    yaxis: [
      {
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
          color: '#2c51b4',
        },
        labels: {
          style: {
            colors: '#2c51b4',
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
          color: '#cd39ae',
        },
        labels: {
          offsetX: -65,
          style: {
            colors: '#cd39ae',
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
          color: '#bea1d8'
        },
        labels: {
          offsetX: 55,
          style: {
            colors: '#bea1d8',
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
    // responsive: [{
    //   breakpoint: 450,
    //   options: {}
    //
    // }]
  }
}
/*
#2c51b4 남색
#cd39ae 진한 핑크
#bea1d8 연보라
#efb9db 연한 핑크
     */
let mixed_series = (trend_chart_close,trend_chart_accepted, trend_chart_release, trend_chart_recept) => {
  return [{
    name: '접수대수(누적)',
    type: 'column',
    data: trend_chart_accepted,
    color: '#2c51b4'
  },
  //   {
  //   name: '접수 마감선',
  //   type: 'line',
  //   data: trend_chart_close,
  //   color: '#cd39ae',
  //   dashArray: 2
  // },
    {
    name: '출고대수(누적)',
    type: 'column',
    data: trend_chart_release,
    color: '#bea1d8'
  }, {
    name: '접수대수(일별)',
    type: 'line',
    data: trend_chart_recept,
    color: '#cd39ae'
  }];
}

export {mixed_chart_options as get_chart_options, mixed_series as get_mixed_series}
