<script setup>
import achievementItem from './achievementItem.vue'
</script>

<template>
  <div class="container w">
    <div class="ach">
      <achievementItem v-for="item in 6" :key="item"></achievementItem>
    </div>
  </div>
  <!-- <div class="container">
    <div class="content" v-for="item in 4" :key="item">
      <achievementItem></achievementItem>
    </div>
  </div> -->
</template>

<style scoped lang="scss">
.container {
  height: 300px;
}

.ach {
  height: 300px;
  width: 640px;
}
</style>
