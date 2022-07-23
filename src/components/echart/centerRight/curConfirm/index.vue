<template>

  <div>
<!--    <dv-flyline-chart-enhanced :config="config" :dev="true" style="width:550px;height:550px;" >-->
    <Chart :cdata="cdata" />
<!--    </dv-flyline-chart-enhanced>-->
  </div>

</template>

<script>
import Chart from "./chart.vue";
import {getCoord} from "@/util/getCoord";
export default {
  name: 'fuzhouIndex',
  data () {
    return {
      isHistoryObj: {},
      cdata: {
        mapDataArr:  [
          {
            // 名字需要与 “common/map/maps.js” 地图数据文件里面定义的一一对应，不能是 “福州” 或者 “闽” 之类的缩写
            name: '福州市',
            value: 999,
            elseData:{
              // 这里放置地图 tooltip 里想显示的数据
            }
          },
          {
            name: '厦门市',
            value: 9,
          },
          {
            name: '漳州市',
            value: 8,
          },
          {
            name: '泉州市',
            value: 7,
          },
          {
            name: '三明市',
            value: 6,
          },
          {
            name: '莆田市',
            value: 5,
          },
          {
            name: '南平市',
            value: 4,
          },
          {
            name: '龙岩市',
            value: 3,
          },
          {
            name: '宁德市',
            value: 2,
          }
        ],
        lineStyleArr: [],
        lineDataArr: [
          {
            targetCity: "福州",
            cityName: "莆田市",
            value: 14.91000,
          },
          {
            targetCity: "福州",
            cityName: "厦门市",
            value: 12.58000,
          },
          {
            targetCity: "福州",
            cityName: "南平市",
            value: 11.55000,
          },
          {
            targetCity: "福州",
            cityName: "三明市",
            value: 9.25000,
          },
          {
            targetCity: "福州",
            cityName: "泉州市",
            value: 7.19000,
          },
          {
            targetCity: "福州",
            cityName: "漳州市",
            value: 5.83000,
          },
          {
            targetCity: "福州",
            cityName: "宁德市",
            value: 5.32000,
          },
          {
            targetCity: "福州",
            cityName: "龙岩市",
            value: 3.22000,
          },
          {
            targetCity: "莆田",
            cityName: "福州市",
            value: 39.79000,
          },
          {
            targetCity: "莆田",
            cityName: "泉州市",
            value: 20.24000,
          },
          {
            targetCity: "莆田",
            cityName: "厦门市",
            value: 10.78000,
          },
          {
            targetCity: "莆田",
            cityName: "漳州市",
            value: 3.39000,
          }
        ]
      }
    }
  },
  //自定义isHistory属性，用于监听日期的变化
  props: {
    isHistory: {
      type: Object,
      default: () => {},
    },
  },
  watch: {
    isHistory: {
      handler(newData){
        // console.log("isHistory属性改变了！=》",newData)
        this.isHistoryObj = newData
      },
      immediate: true,
      deep: true,
    }
  },
  components: {
    Chart,
  },
  mounted() {
    for(let item of this.cdata.lineDataArr){
      this.cdata.lineStyleArr.push({
        type: 'lines',
        coordinateSystem: 'geo',
        zlevel: 2,
        //箭头图标
        effect: {
          show: true,
          period: 10, //箭头指向速度，值越小速度越快
          trailLength: 0.1, //特效尾迹长度[0,1]值越大，尾迹越长重
          symbol: 'arrow', //箭头图标
          symbolSize: item.value / 3 , //图标大小
          color: 'rgba(245,225,17,0.5)', // 图标颜色
        },
        lineStyle: {
          normal: {
            show: true,
            width: 2, //尾迹线条宽度
            opacity: 0.2, //尾迹线条透明度
            curveness: 0.3, //尾迹线条曲直度
            color: 'rgba(238,214,15,0.5)', // 飞线颜色
          },
          color: '#ff0000',//这个属性好像没啥用
        },
        // 应该是传入全国数据集
        //每个元素是一个数组，每个数组有出发点对象和目的点对象,第一个是出发点
        data: [
          [{coord: getCoord(item.cityName)},//泉州到福州
            {coord: getCoord(item.targetCity)}
          ]
        ],

      })
    }
  },
  methods: {
    setCdata(){

    }
  },
};
</script>

<style lang="scss" scoped>
</style>
