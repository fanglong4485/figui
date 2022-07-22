<template>
  <div>
    <Chart :cdata="cdata" />
  </div>
</template>

<script>
import Chart from './chart.vue'

export default {
  data () {
    return {
      cdata: {}
    }
  },
  components: {
    Chart,
  },
  // mounted () {
  //   this.setData()
  // },
  created() {
    this.setData()
  },

  methods: {
    setData () {
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
