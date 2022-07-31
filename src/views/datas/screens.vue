<template>
  <div>
    <el-button type="primary" style="width: auto;" @click="openScreen">福建疫情大屏</el-button>
    <el-button @click="mapTest" >第一个三维地图</el-button>
  </div>

</template>

<script>
export default {
  name: "screens",
  methods:{
    openScreen(){
      this.$router.push({
        path: '/bigscreen/index',
        query: undefined
      }).catch(() => {});
    },
    mapTest(){
      this.$router.push({
        path: '/mjmap/maptest/index',
        query: undefined
      }).catch(() => {});
    },
  }
}
</script>

<style scoped>

</style>
