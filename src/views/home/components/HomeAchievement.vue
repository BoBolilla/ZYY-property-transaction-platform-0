<script setup>
import achievementItem from './achievementItem.vue'
import { ref } from 'vue'

let items = ref([
  { number: 92.15, detail: '2024年累计成交金额/亿元' },
  { number: 125, detail: '2024年进场成果数/个' },
  { number: 126.33, detail: '知识产权质押融资累计金额/亿元' },
  { number: 192.78, detail: '累计成交金额/亿元' },
  { number: 78.65, detail: '累计进场成果数/个' },
  { number: 98, detail: '知识产权质押融资累计项目数' }
])
</script>

<template>
  <div class="container w">
    <div class="ach">
      <achievementItem
        v-for="item in items"
        :key="item"
        :item="item"
      ></achievementItem>
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
  margin-bottom: 20px;
}

.ach {
  margin-top: 20px;
  margin-bottom: 20px;
  height: 300px;
  width: 640px;
}
</style>
