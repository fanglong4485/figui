<template>
  <div id="DangerLevelChart" >
    <div class="bg-color-black">
      <div class="d-flex pt-2 pl-2">
        <span>
          <icon name="chart-pie" class="text-icon"></icon>
        </span>
        <div style="display: flex">
          <span class="fs-xl text mx-2">危险等级</span>
          <dv-decoration-1 class="dv-dec-1" />
        </div>
      </div>
      <div class="d-flex jc-center">
        <DangerLevelChart :is-history="isHistoryObj"/>
      </div>
    </div>
  </div>
</template>

<script>
import DangerLevelChart from "@/components/echart/center/dangerLevel";
export default {
  components: {
    DangerLevelChart
  },
  data(){
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
#DangerLevelChart {
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
