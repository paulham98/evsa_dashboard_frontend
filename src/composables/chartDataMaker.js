const mixed_chart_options = () => {
  return {
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
      categories: [1, 2, 3]
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
    responsive: [{
      breakpoint: 450,
      options: {}

    }]
  }
}

const mixed_series = (trend_chart_accepted, trend_chart_release, trend_chart_recept) => {
  return [{
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
}

export {mixed_chart_options as get_chart_options, mixed_series as get_mixed_series}
