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
  <div>
    <h2 style="margin-top: 10px">HOT NEWS</h2>
    <div class="image" style="margin-top: 25px">
      <div v-for="(news, index) in newsStore.currentHotNewsList" :key="news.id">
        <div v-if="index === 0">
          <RouterLink class="cover" :to="`/newsDetail/${news.id}`">
            <el-image :src="news.articleCoverUrl" lazy style="height: 15vw">
            </el-image>
            <strong class="label" v-if="index === 0">
              <p>{{ news.articleTitle }}</p>
              <p style="margin-top: 3vw; text-align: left">
                {{ news.createDate }}
              </p>
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
      <h2 style="margin-bottom: -30px; margin-top: 30px">Important NEWS</h2>
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
  </div>
</template>

<style scoped lang="scss">
@media only screen and (max-width: 1600px) {
  .label p:first {
    font-size: 13px !important;
  }
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
      bottom: 0;
      width: 100%;
      //padding: 2px;WW
      height: 8vw;
      //height: 66px;
      display: block;
      font-size: 18px;
      color: #fff;
      // transform: translate3d(0, -50%, 0);
      background-color: rgb(235, 234, 234, 0.3);

      :hover {
        &:first-child {
          color: #b46741;
        }
      }

      p {
        width: 90%;
        margin: auto;
        text-align: center;

        &:first-child {
          width: 90%;
          text-align: center;
          font-weight: 600;
        }

        &:last-child {
          width: 90%;
          //margin-top: 30px;
          text-align: center;
          font-weight: 400;
          flex: 1;
          font-size: 15px;
        }
      }
    }
  }
}
</style>
