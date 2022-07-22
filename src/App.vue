<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {}
    },
    watch: {},
    created() {
    },
    methods: {},
    computed: {}
  }
</script>
<style lang="scss" scoped>
  #app {
    width: 100%;
    height: 100%;
    //width: 100vw;
    //height: 100vh;
    overflow: hidden;
  }
</style>
