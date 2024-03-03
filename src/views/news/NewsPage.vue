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
    <div>
      <img
        src="../../assets/images/newsPageBG.png"
        alt=""
        style="width: 100%"
      />
    </div>
    <el-row :gutter="20">
      <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4">
        <div class="grid-content ep-bg-purple" />
      </el-col>
      <el-col
        :xs="12"
        :sm="12"
        :md="12"
        :lg="12"
        :xl="12"
        class="centerneirong"
      >
        <el-menu
          :default-active="$route.path"
          class="el-menu-demo el-bgcolor"
          mode="horizontal"
          @select="handleSelect"
          text-color="#fff"
          active-text-color=" #6277c4"
          router
          style="margin-bottom: 60px"
        >
          <div class="xiwnen">新闻中心</div>
          <el-menu-item
            index="/news/current"
            class="el-bgc"
            style="margin-left: 20px"
            >时事新闻</el-menu-item
          >
          <el-menu-item index="/news/work" class="el-bgc"
            >工作状态</el-menu-item
          >
          <el-menu-item index="/news/media" class="el-bgc"
            >媒体发布</el-menu-item
          >
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
.centerneirong {
  margin-top: -200px;
}
.el-bgcolor {
  background-color: rgb(255, 223, 233, 0);
  border-bottom: none;
}
.el-bgc {
  width: auto !important;
  background-color: rgb(255, 223, 233, 0) !important;
  border-bottom: none !important;
  font-size: 18px;
}
.el-bgc:hover {
  color: #6277c4 !important;
  border-bottom: none;
  background-color: rgb(255, 223, 233, 0) !important;
}

.xiwnen {
  color: #fff;
  font-size: 32px;
  margin-left: 20px;
}
</style>
