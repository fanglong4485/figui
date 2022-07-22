<template>
  <div id="center">
    <div class="up">
      <div
        class="bg-color-black item"
        v-for="item in titleItem"
        :key="item.title"
      >
        <p class="ml-3 colorBlue fw-b fs-xl">{{ item.title }}</p>
        <div>
          <dv-digital-flop
            class="dv-dig-flop ml-1 mt-2 pl-3"
            :config="item.number"
          />
        </div>
      </div>
    </div>
    <div class="down">
      <div class="ranking bg-color-black">
        <span>
          <icon name="chart-pie" class="text-icon"></icon>
        </span>
        <span class="fs-xl text mx-2 mb-1 pl-3">地区新增确诊榜</span>
        <dv-scroll-ranking-board class="dv-scr-rank-board mt-1" :config="ranking" />
      </div>
    </div>
  </div>
</template>

<script>



export default {

  components: {

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

  data() {
    return {
      isHistoryObj: {},
      titleItem: [
        {
          title: "1",
          number: {
            number: [1],
            toFixed: 1,
            textAlign: 'left',
            content: '{nt}',
            style: {
              fontSize: 26
            }
          }
        },
        {
          title: "2",
          number: {
            number: [2],
            toFixed: 1,
            textAlign: 'left',
            content: '{nt}',
            style: {
              fontSize: 26
            }
          }
        },
        {
          title: "3",
          number: {
            number: [3],
            toFixed: 1,
            textAlign: 'left',
            content: '{nt}',
            style: {
              fontSize: 26
            }
          }
        },
        {
          title: "4",
          number: {
            number: [4],
            toFixed: 1,
            textAlign: 'left',
            content: '{nt}',
            style: {
              fontSize: 26
            }
          }
        },
        {
          title: "5",
          number: {
            number: [5],
            toFixed: 1,
            textAlign: 'left',
            content: '{nt}',
            style: {
              fontSize: 26
            }
          }
        },
        {
          title: "6",
          number: {
            number: [6],
            toFixed: 1,
            textAlign: 'left',
            content: '{nt}',
            style: {
              fontSize: 26
            }
          }
        },
        {
          title: "7",
          number: {
            number: [7],
            toFixed: 1,
            textAlign: 'left',
            content: '{nt}',
            style: {
              fontSize: 26
            }
          }
        },
        {
          title: "8",
          number: {
            number: [8],
            toFixed: 1,
            textAlign: 'left',
            content: '{nt}',
            style: {
              fontSize: 26
            }
          }
        },
      ],
      ranking: {
        carousel: 'single',
        unit: '人'
      },
    }
  },

  mounted() {
    this.load()
  },
  methods:{
    load(){
    },
    // 设置数据
    setData (titleDate) {
      this.titleItem.length = 0
      titleDate.map(e => {
        this.titleItem.push({
          title: e.title,
          number: {
            number: [e.number],
            toFixed: 1,
            textAlign: 'left',
            content: '{nt}',
            style: {
              fontSize: 26
            }
          }
        })
      })
    },
    // 设置排名数据,这里设置新值有点不一样，具体看datav文档
    setRankingData (rankingData) {
      if(JSON.stringify(rankingData) !== JSON.stringify(this.ranking.data)){
        this.ranking = {
          data: rankingData ,
          carousel: 'single',
          unit: '人'
        }
      }

    },
  }
}
</script>

<style lang="scss" scoped>
#center {
  display: flex;
  flex-direction: column;
  .up {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    .item {
      border-radius: 6px;
      padding-top: 8px;
      margin-top: 8px;
      width: 25%;//设置item宽度占比
      height: 70px;
      .dv-dig-flop {
        width: 150px;
        height: 30px;
      }
    }
  }
  .down {
    padding: 6px 4px;
    padding-bottom: 0;
    width: 100%;
    display: flex;
    height: 430px;
    justify-content: space-between;
    .bg-color-black {
      border-radius: 5px;
    }
    .ranking {
      padding: 10px;
      width: 100%;
      .dv-scr-rank-board {
        height: 400px;
      }
    }
    .percent {
      width: 40%;
      display: flex;
      flex-wrap: wrap;
      .item {
        width: 50%;
        height: 120px;
        span {
          margin-top: 8px;
          font-size: 14px;
          display: flex;
          justify-content: center;
        }
      }
      .water {
        width: 100%;
        .dv-wa-le-po {
          height: 120px;
        }
      }
    }
  }
}
</style>
