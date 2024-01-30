<script setup>
import { ref, onMounted } from 'vue'
import NewsCurrentLeft from '@/views/news/component/NewsCurrentLeft.vue'
import { getNews } from '@/api/news.js'
// eslint-disable-next-line no-unused-vars
const currentNews = ref([])
const getCurrentNews = async () => {
  const res = await getNews()
  // this.articleFunctionTag,
  // this.articleStatus,
  // this.pageNum,
  // this.pageSize
  console.log(res.data.data.list)
  currentNews.value = res.data.data.list
  console.log(currentNews.value)
}
onMounted(() => getCurrentNews())
</script>

<template>
  <ul class="news-list">
    <el-row :gutter="10">
      <el-col
        :xs="12"
        :sm="12"
        :md="12"
        :lg="12"
        :xl="12"
        v-for="good in currentNews"
        :key="good.id"
      >
        <li class="li">
          <NewsCurrentLeft :good="good"></NewsCurrentLeft>
          <NewsCurrentLeft :good="good"></NewsCurrentLeft>
        </li>
        <div class="grid-content ep-bg-purple-light" />
      </el-col>
    </el-row>
  </ul>
  <div class="end">
    <el-pagination background layout="prev, pager, next" :total="1000" />
  </div>
</template>

<style scoped>
el-col {
  border-radius: 4px;
}

.end {
  height: 80px;
  width: 80%;
  margin-left: 250px;
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
  margin-top: 20px;
  width: 100%;
  box-sizing: border-box;
  display: inline-block;
}

.news-list {
  //height: 1100px;
  display: flex;
  flex-wrap: wrap;
  //justify-content: space-between;
}

li {
  //width: 400px;
  //height: 300px;
  //margin-right: 10px;
  margin-bottom: 10px;
}
</style>
