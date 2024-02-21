<script setup>
import homePanel from './HomePanel.vue'
import WorkItem from './WorkItem.vue'
</script>

<template>
  <div class="w">
    <homePanel title="业务模块">
      <template #main>
        <div class="container">
          <div class="content" v-for="item in 4" :key="item">
            <WorkItem></WorkItem>
          </div>
        </div>
      </template>
    </homePanel>
  </div>
</template>

<style scoped lang="scss">
.container {
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
