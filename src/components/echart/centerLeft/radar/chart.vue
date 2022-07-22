<template>
  <div>
    <Echart
        id="radarChart"
        ref="radarChartRef"
        :options="options"
        height="220px"
        width="260px"
    ></Echart>
  </div>
</template>

<script>
import Echart from '@/common/echart'
export default {
  name: 'radarChart',
  data () {
    return {
      options: {},
    };
  },

  components: {
    Echart,
  },
  props: {
    cdata: {
      type: Object,
      default: () => ({}),
    },
  },
  watch: {
    cdata: {
      handler(newData) {
        // console.log("centerLeft1 newData=>",newData)
        this.options = {
          color: ['#67F9D8', '#FFE434', '#56A3F1', '#FF917C'],
          // title: {
          //   text: '雷达对比图'
          // },
          legend: {},
          radar: [
            {
              indicator: [
                { text: '新增确诊' },
                { text: '新增本土' },
                { text: '新增境外' },
                { text: '新增无症状' }
              ],
              center: ['50%', '50%'], //图表位置
              radius: 80, //外圆直径
              startAngle: 45, //倾斜角度
              splitNumber: 7, //环数量
              shape: 'circle',
              axisName: {
                formatter: '【{value}】',
                color: '#428BD4'
              },
              splitArea: {
                areaStyle: {
                  color: ['#77EADF', '#26C3BE', '#64AFE9', '#428BD4'],
                  shadowColor: 'rgba(0, 0, 0, 0.2)',
                  shadowBlur: 10
                }
              },
              axisLine: {
                lineStyle: {
                  color: 'rgba(211, 253, 250, 0.8)'
                }
              },
              splitLine: {
                lineStyle: {
                  color: 'rgba(211, 253, 250, 0.8)'
                }
              }
            }
          ],
          series: [
            {
              type: 'radar',
              emphasis: {
                lineStyle: {
                  width: 4 //鼠标悬浮在线上时，线的宽度
                }
              },
              data: [
                {
                  //1：新增确诊 2：新增本土 3：新增境外 4：新增无症状
                  value: newData.todayValue,
                  name: '今日'
                },
                {
                  value: newData.yesterdayValue,
                  name: '昨日',
                  areaStyle: {
                    color: 'rgba(255, 228, 52, 0.6)'//线围成的四边形的颜色
                  }
                }
              ]
            }
          ]
        }
      },
      immediate: true,
      deep: true
    }
  },
};
</script>

<style lang="scss" scoped>
</style>