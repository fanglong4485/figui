<template>
  <div class="execution">
    <basic-container>
      <div v-text="text"/>
    </basic-container>
  </div>

</template>

<script>
export default {
  name: "index",
  data(){
    return{
      text: '我是一个地图！！'
    }
  }
}
</script>

<style scoped>

</style>
