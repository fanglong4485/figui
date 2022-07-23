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
      cdata: {
          "福州": [
            "0",
            "0",
            "0"
          ],
          "date": [
            "2022-07-01",
            "2022-07-06",
            "2022-07-13"
          ],
          "龙岩": [
            "0",
            "0",
            "0"
          ],
          "漳州": [
            "0",
            "0",
            "1"
          ],
          "南平": [
            "0",
            "0",
            "0"
          ],
          "厦门": [
            "0",
            "0",
            "1"
          ],
          "泉州": [
            "0",
            "0",
            "0"
          ],
          "莆田": [
            "0",
            "0",
            "0"
          ],
          "三明": [
            "0",
            "0",
            "0"
          ],
          "宁德": [
            "0",
            "9",
            "16"
          ]

      }
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
