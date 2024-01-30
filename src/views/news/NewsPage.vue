<script setup>
// import { ref,  } from 'vue'
import NewsHot from '@/views/news/NewsHot.vue'

// eslint-disable-next-line no-unused-vars

// const activeIndex = ref('/news/current')
// const handleSelect = (key, keyPath) => {
//   console.log(key, keyPath)
// }
</script>

<template>
  <div class="newsCurrent">
    <el-row :gutter="20">
      <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4">
        <div class="grid-content ep-bg-purple" />
      </el-col>
      <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
        <el-menu
          :default-active="$route.path"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          router
        >
          <el-menu-item index="/news/current">时事新闻</el-menu-item>
          <el-menu-item index="/news/work">工作状态</el-menu-item>
          <el-menu-item index="/news/media">媒体发布</el-menu-item>
        </el-menu>
        <div class="h-6" />
        <router-view></router-view>

        <div class="grid-content ep-bg-purple" />
      </el-col>
      <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4"
        ><news-hot></news-hot>
        <div class="grid-content ep-bg-purple-light" />
      </el-col>
      <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4">
        <div class="grid-content ep-bg-purple-light" />
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.newsCurrent {
  width: 100%;
  margin: 0 auto;
}

.li {
  width: 45%;
  box-sizing: border-box;
}

.news-list {
  display: flex;
  flex-wrap: wrap;
}

li {
  width: 240px;
  height: 300px;
  margin-right: 10px;
  margin-bottom: 10px;
}
</style>
