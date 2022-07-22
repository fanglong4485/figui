<template>
  <div id="FuzhouChart">
    <div class="bg-color-black">
      <div class="d-flex pt-2 pl-2">
        <span>
          <icon name="chart-pie" class="text-icon"></icon>
        </span>
        <div class="d-flex">
          <span class="fs-xl text mx-2">现有确诊</span>
          <dv-decoration-1 class="dv-dec-1" />
        </div>
      </div>
      <div class="d-flex jc-center">
        <FuzhouChart :is-history = "isHistoryObj" />
      </div>
    </div>
  </div>
</template>

<script>
import FuzhouChart from "@/components/echart/centerRight/curConfirm";
export default {
  components: {
    FuzhouChart
  },
  data() {
    return{
      isHistoryObj: {},
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
      handler(newData){
        // console.log("isHistory属性改变了！=》",newData)
        this.isHistoryObj = newData
      },
      immediate: true,
      deep: true,
    }
  },
};
</script>

<style lang="scss" scoped>
#FuzhouChart {
  $box-width: 300px;
  $box-height: 600px;
  padding: 16px;
  height: $box-height;
  min-width: $box-width;
  border-radius: 5px;
  .bg-color-black {
    height: $box-height - 30px;
    border-radius: 10px;
  }
  .text {
    color: #c3cbde;
  }
  .dv-dec-1 {
    position: relative;
    width: 100px;
    height: 20px;
    top: -3px;
  }
  .chart-box {
    margin-top: 16px;
    width: 170px;
    height: 170px;
    .active-ring-name {
      padding-top: 10px;
    }
  }
}
</style>