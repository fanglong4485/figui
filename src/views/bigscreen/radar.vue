<template>
  <div id="centerLeft1">
    <div class="bg-color-black">
      <div class="d-flex pt-2 pl-2">
        <span>
          <icon name="chart-bar" class="text-icon"></icon>
        </span>
        <div class="d-flex">
          <span class=" text">雷达对比图</span>
          <dv-decoration-3 class="dv-dec-3" />
        </div>
      </div>

        <RadarChart :is-history = "isHistoryObj"/>

<!--      总结文字-->
      <dv-border-box-12 style="height: 330px;width: 300px"  >
        <div class="d-flex pt-2 pl-2">
          <span style="position: relative;top: 6px;left: 20px">分析总结</span>
          <dv-decoration-3 style="position: relative;top: 6px;height: 20px;width: 100px;left: 20px" />
        </div>
        <div v-for="item in summary" :key="item.indx" class="fs-xl text mx-2 p" style="margin: 15px" >
          <span v-text="item.indx + '\t' + item.text"></span>
        </div>
      </dv-border-box-12>


    </div>
  </div>
</template>

<script>
import RadarChart from "@/components/echart/centerLeft/radar"
export default {
  name: 'radar',
  data() {
    return {
      isHistoryObj: {
        date: '2022-03-20',
        isHistoryMode: false
      },
        //这里的总结数据要从后端获取
      summary: [
          {
            indx: 1,
            text: '就过去三天确诊趋势来看，泉州、厦门呈上升趋势，结合迁徙大数据，应注意漳州、三明的防控工作',
          },
          {
            indx: 2,
            text: '目前疫情空间上主要分布在闽南地区，应注意其交往密切城市',
          },
          {
            indx: 3,
            text: '就危险系数来看，作为福建省交通枢纽的泉州，厦门，福州处于危险的情况，此外，南平、宁德、龙岩等地区均发出危险预警',
          },
          {
            indx: 4,
            text: '综上，福建疫情形势严峻，望有关部门齐心协力，共度难关',
          },

        ]
    }
  },
  props: {
    isHistory: {
      type: Object,
      default: () => {},
    },
  },
  watch: {
    isHistory: {
    }
  },
  components: {
    RadarChart
  },
  mounted() {
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
$box-width: 330px;
$box-height: 410px;

#centerLeft1 {
  padding: 16px;
  height: $box-height;
  width: $box-width;
  border-radius: 10px;
  .bg-color-black {
    height: $box-height - 30px;
    border-radius: 10px;
  }
  .text {
    color: #c3cbde;
  }
  .dv-dec-3 {
    position: relative;
    width: 100px;
    height: 20px;
    top: -3px;
  }

  .bottom-data {
    .item-box {
      & > div {
        padding-right: 5px;
      }
      font-size: 14px;
      float: right;
      position: relative;
      width: 50%;
      color: #d3d6dd;
      .dv-digital-flop {
        width: 120px;
        height: 30px;
      }
      // 金币
      .coin {
        position: relative;
        top: 6px;
        font-size: 20px;
        color: #ffc107;
      }
      .colorYellow {
        color: yellowgreen;
      }
      p {
        text-align: center;
      }
    }
  }
}
</style>
