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
        //地区
        category: [
          "南平",
          "泉州",
          "宁德",
          "龙岩",
          "厦门",
          "莆田",
          "三明",
          "漳州",
          "福州"
        ],
        //新增
        lineData: [
          2,
          33,
          4,
          5,
          3,
          2,
          34,
          6,
          8
        ],
        //累计
        barData: [
          "0",
          "0",
          "0",
          "0",
          "0",
          "0",
          "0",
          "0",
          "0"
        ],
        //治愈
        rateData: [
          "23",
          "1188",
          "77",
          "6",
          "320",
          "322",
          "15",
          "40",
          "73"
        ]
      },
    };
  },
  components: {
    Chart,
  },
  mounted () {
    // this.setData();
    this.load()
  },
  methods: {
    load(){
    },

    // 根据自己的业务情况修改
    // setData () {
    //   for (let i = 0; i < this.cdata.barData.length -1; i++) {
    //     let rate = this.cdata.barData[i] / this.cdata.lineData[i];
    //     this.cdata.rateData.push(rate.toFixed(2));
    //   }
    // },
  }
};
</script>

<style lang="scss" scoped>
</style>
