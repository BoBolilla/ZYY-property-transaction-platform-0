<script setup>
import { ref } from 'vue'
import NewsCurrentLeft from '@/views/news/component/NewsCurrentLeft.vue'
import { onMounted } from 'vue'
import { getNewsAPI } from '@/api/news.js'
// eslint-disable-next-line no-unused-vars
const currentNewsList = ref([])

const currentPage = ref(1)
const total = ref(0)
const limit = ref(6)
import AOS from 'aos'

onMounted(() => {
  AOS.init()
})
function getData(p = null) {
  if (typeof p == 'number') {
    currentPage.value = p
    console.log(p)
  }
  const getCurrentNews = async () => {
    const res = await getNewsAPI(currentPage.value)
    total.value = res.data.data.total
    currentNewsList.value = res.data.data.list
    // console.log(currentNewsList.value)
  }
  // onMounted(() => getCurrentNews())
  getCurrentNews()
}

getData(1)
</script>

<template>
  <ul class="news-list">
    <el-row :gutter="20">
      <el-col
        :xs="12"
        :sm="12"
        :md="12"
        :lg="12"
        :xl="12"
        v-for="news in currentNewsList"
        :key="news.id"
      >
        <li class="li" data-aos="zoom-in">
          <NewsCurrentLeft :news="news"></NewsCurrentLeft>
          <!--          <NewsCurrentLeft :good="good"></NewsCurrentLeft>-->
        </li>
        <div class="grid-content ep-bg-purple-light" />
      </el-col>
    </el-row>
  </ul>
  <div class="end">
    <el-pagination
      background
      layout="prev, pager, next"
      :total="total"
      :current-page="currentPage"
      :page-size="limit"
      @current-change="getData"
    />
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
}
</style>
