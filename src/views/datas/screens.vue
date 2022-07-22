<template>
  <el-button type="primary" style="width: auto;" @click="openScreen">福建疫情大屏</el-button>
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
    }
  }
}
</script>

<style scoped>

</style>
