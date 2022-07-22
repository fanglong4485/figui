<template>
  <div>
    <Echart
        :options="options"
        id="centreLeft1Chart"
        height="300px"
        width="100%"
    ></Echart>
  </div>
</template>

<script>
import Echart from '@/common/echart'

export default {
  data() {
    return {
      options: {},

      // 定义颜色
      colorList: {
        linearYtoG: {
          type: "linear",
          x: 0,
          y: 0,
          x2: 1,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: "#f5b44d"
            },
            {
              offset: 1,
              color: "#28f8de"
            }
          ]
        },
        linearGtoB: {
          type: "linear",
          x: 0,
          y: 0,
          x2: 1,
          y2: 0,
          colorStops: [
            {
              offset: 0,
              color: "#43dfa2"
            },
            {
              offset: 1,
              color: "#28f8de"
            }
          ]
        },
        linearBtoG: {
          type: "linear",
          x: 0,
          y: 0,
          x2: 1,
          y2: 0,
          colorStops: [
            {
              offset: 0,
              color: "#1c98e8"
            },
            {
              offset: 1,
              color: "#28f8de"
            }
          ]
        },
        areaBtoG: {
          type: "linear",
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: "rgba(35,184,210,.2)"
            },
            {
              offset: 1,
              color: "rgba(35,184,210,0)"
            }
          ]
        }
      }
    };
  },
  components: {
    Echart,
  },
  props: {
    cdata: {
      type: Object,
      default: () => ({
        date: [],
        asymptomatic: [],
        died: [],
        confirmed: []
      })
    },
  },
  watch: {
    cdata: {
      handler(newData) {
        console.log("bottomRight new data=>",newData)
        this.options = {
          title: {
            text: ''
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {},
          toolbox: {
            show: true,
            feature: {
              // dataZoom: {
              //   yAxisIndex: 'none'
              // },
              // dataView: { readOnly: false },
              magicType: {type: ['line', 'bar']},
              restore: {},
              saveAsImage: {},

            }
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: newData.date//横坐标数据
          },
          yAxis: {
            type: 'value',
            axisLabel: {
              formatter: '{value} 人'
            }
          },
          series: [
            {
              name: '福州',
              type: 'line',
              data: newData.福州,
              // markPoint: {
              //   data: [{name: '周最低', value: -2, xAxis: 1, yAxis: -1.5}]
              // },
              // markLine: {
              //   data: [
              //     {type: 'average', name: 'Avg'},
              //     [
              //       {
              //         symbol: 'none',
              //         x: '90%',
              //         yAxis: 'max'
              //       },
              //       {
              //         symbol: 'circle',
              //         label: {
              //           position: 'start',
              //           formatter: 'Max'
              //         },
              //         type: 'max',
              //         name: '最高点'
              //       }
              //     ]
              //   ]
              // }
            },
            {
              name: '厦门',
              type: 'line',
              data: newData.厦门,
              // markPoint: {
              //   data: [{name: '周最低', value: -2, xAxis: 1, yAxis: -1.5}]
              // },
              // markLine: {
              //   data: [
              //     {type: 'average', name: 'Avg'},
              //     [
              //       {
              //         symbol: 'none',
              //         x: '90%',
              //         yAxis: 'max'
              //       },
              //       {
              //         symbol: 'circle',
              //         label: {
              //           position: 'start',
              //           formatter: 'Max'
              //         },
              //         type: 'max',
              //         name: '最高点'
              //       }
              //     ]
              //   ]
              // }
            },
            {
              name: '泉州',
              type: 'line',
              data: newData.泉州,
              // markPoint: {
              //   data: [
              //     {type: 'max', name: 'Max'},
              //     {type: 'min', name: 'Min'}
              //   ]
              // },
              // markLine: {
              //   data: [{type: 'average', name: 'Avg'}]
              // }
            },
            {
              name: '漳州',
              type: 'line',
              data: newData.漳州,
              // markPoint: {
              //   data: [
              //     {type: 'max', name: 'Max'},
              //     {type: 'min', name: 'Min'}
              //   ]
              // },
              // markLine: {
              //   data: [{type: 'average', name: 'Avg'}]
              // }
            },
            {
              name: '莆田',
              type: 'line',
              data: newData.莆田,
            },
            {
              name: '南平',
              type: 'line',
              data: newData.南平,
            },
            {
              name: '龙岩',
              type: 'line',
              data: newData.龙岩,
            },
            {
              name: '三明',
              type: 'line',
              data: newData.三明,
            },
            {
              name: '宁德',
              type: 'line',
              data: newData.宁德,
            },
          ]
        };
      },
      immediate: true,
      deep: true
    }
  }
};
</script>