<template>
  <div id="tindex" >
    <div class="bg">
      <dv-loading v-if="loading">Loading...</dv-loading>
       <div v-else class="host-body">
        <!-- jc-center 这个样式没找到 -->
         <div class="d-flex jc-center">
           <dv-decoration-10 class="dv-dec-10" />
         </div>
       </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "test",
  data(){
    return {
      loading: true,
      tt: "sdfsd"
    }
  },
  mounted() {
    this.cancelLoading()
  },
  methods:{
    cancelLoading() {
      setTimeout(() => {
        this.loading = false
      }, 1000)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
