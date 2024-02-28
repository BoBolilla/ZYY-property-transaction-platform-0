<script setup>
import { onMounted } from 'vue'

import NewsRightTop from '@/views/news/component/NewsRightTop.vue'
import NewsRightBottom from '@/views/news/component/NewsRightBottom.vue'
import { useNewsStore } from '@/stores'

const newsStore = useNewsStore()
onMounted(() => {
  newsStore.getHotCurrentNews()
  newsStore.getImportCurrentNews()
})

// eslint-disable-next-line no-unused-vars
</script>

<template>
  <h2 style="margin-bottom: 15px">HOT NEWS</h2>
  <div class="image">
    <div v-for="(news, index) in newsStore.currentHotNewsList" :key="news.id">
      <div v-if="index === 0">
        <RouterLink class="cover" :to="`/newsDetail/${news.id}`">
          <el-image :src="news.articleCoverUrl" lazy></el-image>
          <strong class="label" v-if="index === 0">
            <p>{{ news.articleTitle }}</p>
            <p>{{ news.createDate }}</p>
          </strong>
        </RouterLink>
      </div>
    </div>
    <ul class="news-list">
      <li
        v-for="news in newsStore.currentHotNewsList"
        :key="news.id"
        class="li"
      >
        <NewsRightTop :news="news"></NewsRightTop>
      </li>
    </ul>
    <h2 style="margin-bottom: -30px">Important NEWS</h2>
    <ul class="news-list" style="margin-top: 50px">
      <li
        v-for="news in newsStore.currentImportNewsList"
        :key="news.id"
        class="li"
      >
        <NewsRightBottom :news="news"></NewsRightBottom>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
h2 {
  margin-top: 20px;
  margin-left: 35px;
}

.li {
  margin-top: 20px;
  width: 100%;
  box-sizing: border-box;
}

.news-list {
  display: block;
  //display: flex;
  //flex-wrap: wrap;
  //justify-content:space-between;
}

.image {
  width: 100%;
  box-sizing: border-box;
  //display: flex;

  .cover {
    position: relative;
    display: block;
    width: 100%;
    //height: 280px;
    margin-right: 10px;
    border-radius: 20px;

    img {
      background-color: burlywood;
      border-radius: 20px;
      border: #27ba9b solid 1px;
      width: 100%;
      height: 100%;
    }

    .label {
      position: absolute;
      left: 0;
      bottom: 1%;
      //padding: 2px;
      width: 100%;
      //height: 66px;
      display: block;
      font-size: 18px;
      color: #fff;
      font-weight: normal;
      transform: translate3d(0, -50%, 0);

      :hover {
        &:first-child {
          color: #b46741;
        }
      }

      p {
        width: 100%;
        text-align: center;

        &:first-child {
          width: 100%;
          background: rgb(16, 8, 8);
        }

        &:last-child {
          width: 100%;
          //margin-top: 30px;
          flex: 1;
          background: rgba(0, 0, 0, 0.7);
          font-size: 15px;
        }
      }
    }
  }
}
</style>
