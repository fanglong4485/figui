<template>
  <div id="index" ref="bigScreenRef">
    <div class="bg">
      <dv-loading v-if="loading">Loading...</dv-loading>
      <div v-else class="host-body" >
<!--        第一行-->
        <div style="display: flex">
          <dv-decoration-10 class="dv-dec-10" />
          <div class="d-flex" style="width: 35%;height: 20%;margin: 0 auto;display: flex">
            <dv-decoration-8 :color="decorationColor" style="width: 200px;height: 50px;"/>
            <div class="title">
              <span class="title-text">大数据可视化台</span>
              <dv-decoration-6
                class="dv-dec-6"
                :reverse="true"
                :color="['#50e3c2', '#67a1e5']"
              />
            </div>
            <dv-decoration-8
              style="width: 200px;height: 50px;"
              :reverse="true"
              :color="decorationColor"
            />
          </div>
          <dv-decoration-10 class="dv-dec-10-s" />
        </div>

        <!-- 第二行 -->
<!--        <div class="d-flex jc-between px-2">-->
          <div style="display: flex">
          <div style="display: flex;width: 40%;">
            <div class="react-left ml-4 react-l-s">
              <span class="react-left"></span>
              <span class="text">数据分析1</span>
            </div>
            <div class="react-left ml-3">
              <span class="text" style="color: #2d8cf0">数据分析2</span>
            </div>
          </div>
          <div style="display: flex; position: absolute; right: 10px">
            <div class="react-right mr-3" style="background-color: #1a5cd7;">
              <span class="text fw-b">vue-big-screen</span>
            </div>
            <div class="react-right mr-4 react-l-s">
              <span class="react-after"></span>
              <span class="text"
                >{{ dateYear }} {{ dateWeek }} {{ dateDay }}</span
              >
            </div>
          </div>
        </div>




        <div class="body-box">
          <!-- 第三行数据 -->
          <div class="content-box">
            <!-- 这里的content-box是表格布局样式，当地图的高度变长了，整行表格的高度也会变 -->
            <div>
              <!--数据概览-->
              <dv-border-box-12 style="width: 385px">
                <center />
              </dv-border-box-12>
            </div>
            <div>
              <!--雷达图、分析报告-->
              <dv-border-box-13>
                <radar />
              </dv-border-box-13>
            </div>
            <div>
              <!--危险等级-->
              <dv-border-box-12 >
                  <dangerLevel />
              </dv-border-box-12>
            </div>
            <div>
              <!--现有确诊-->
              <dv-border-box-13>
                <fuzhou />
              </dv-border-box-13>
            </div>


          </div>

          <!-- 第四行数据 -->
          <div class="bottom-box">
            <dv-border-box-13>
              <bottomLeft />
            </dv-border-box-13>
            <dv-border-box-12>
              <bottomRight />
            </dv-border-box-12>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import drawMixin from "@/util/drawMixin";
import { formatTime } from '@/util'
import radar from './radar'
import fuzhou from "./fuzhou"
import dangerLevel from './DangerLevel'
import center from './center'
import bottomLeft from './bottomLeft'
import bottomRight from './bottomRight'

export default {
  name: 'index',
  mixins: [ drawMixin ],
  data() {
    return {
      timing: null,
      loading: true,
      dateDay: null,
      dateYear: null,
      dateWeek: null,
      weekday: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
      decorationColor: ['#568aea', '#000000']
    }
  },
  components: {
    radar,
    dangerLevel,
    center,
    fuzhou,
    bottomLeft,
    bottomRight
  },
  mounted() {
    this.timeFn()
    this.cancelLoading()
  },
  beforeDestroy () {
    clearInterval(this.timing)
  },
  methods: {
    timeFn() {
      this.timing = setInterval(() => {
        this.dateDay = formatTime(new Date(), 'HH: mm: ss')
        this.dateYear = formatTime(new Date(), 'yyyy-MM-dd')
        this.dateWeek = this.weekday[new Date().getDay()]
      }, 1000)
    },
    cancelLoading() {
      setTimeout(() => {
        this.loading = false
      }, 500)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/index.scss';
</style>
