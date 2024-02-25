<script setup>
import NewsHot from '@/views/news/NewsHot.vue'
import { getNewsDetailAPI } from '@/api/news.js'
import { useRoute } from 'vue-router'
import { ref, onMounted } from 'vue'
import axios from 'axios'

const news = ref([])
const article = ref([])
const route = useRoute()
// const getNews = async () => {
//   const res = await getNewsDetailAPI(route.params.id)
//   news.value = res.data.data
//   console.log('新闻信息')
//   console.log(news.value)
// }
onMounted(async () => {
  const res = await getNewsDetailAPI(route.params.id)
  news.value = res.data.data
  console.log('新闻信息')
  console.log(news.value)

  try {
    console.log('尝试')
    console.log(news.value.articleUrl)
    const response = await axios.get(decodeURIComponent(news.value.articleUrl))
    article.value = response.data
    console.log('文章信息')
    console.log(article.value)
  } catch (error) {
    console.error('Error fetching article data: ', error)
  }
})
</script>

<template>
  <div class="container">
    <div class="bg"></div>
    <div class="content">
      <div class="left">
        <h1>{{ news.articleTitle }}</h1>
        <div class="article">
          <div class="dec"></div>
          <div v-html="article"></div>
        </div>
      </div>
      <div class="right"><news-hot></news-hot></div>
    </div>
  </div>
</template>

<style scoped>
.container {
  background: #000;
  /* background-color: gold;
  background: url(@/assets/images/newsDetailBG.png) no-repeat;
  background-size: 100% 250px; */
}
.bg {
  height: 250px;
  background: url(@/assets/images/newsDetailBG.png) no-repeat;
  background-size: 100% 250px;
}

.content {
  margin: -200px auto;
  margin-bottom: 20px;
  width: 1200px;
}

.left {
  float: left;
  width: 900px;
  height: 100%;
}

.left h1 {
  width: 900px;
  min-height: 150px;
  height: auto;
  padding: 30px;
  color: white;
  background-color: transparent;
}
.left .article {
  position: relative;
  width: 900px;
  /* min-height: 90vh;
  height: auto; */
  padding: 40px;
  font-size: 18px;
  background-color: white;
}
.left .article .dec {
  position: absolute;
  top: -15px;
  left: 50px;
  width: 150px;
  height: 30px;
  background-color: rgb(228, 104, 65);
}
.right {
  margin-top: 180px;
  margin-left: 30px;
  float: left;
  width: 270px;
  height: 100%;
}
</style>
