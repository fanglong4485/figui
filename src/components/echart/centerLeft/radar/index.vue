<template>
  <div>
    <Chart :cdata="cdata" />
  </div>
</template>

<script>
import Chart from './chart.vue';

export default {
  data () {
    return {
      isHistoryObj: {},
      cdata: {
        todayValue: [2,3,2,2],
        yesterdayValue: [2,2,2,2]
      }
    }
  },
  components: {
    Chart,
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
      },
      immediate: true,
      deep: true,
    }
  },
  mounted () {

  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
</style>
