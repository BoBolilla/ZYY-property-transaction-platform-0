<script setup>
import achievementItem from './achievementItem.vue'
</script>

<template>
  <div class="container">
    <div class="content" v-for="item in 4" :key="item">
      <achievementItem></achievementItem>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  margin-top: 50px;
  display: flex;
  //挤不下换行
  flex-wrap: wrap;
  //展开铺满，justify-content:center;则代表居中
  justify-content: center;
}

.content {
  margin: 20px;
}
</style>
