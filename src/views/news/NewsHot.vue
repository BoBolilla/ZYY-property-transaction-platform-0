<script setup>
import { ref, onMounted } from 'vue'

import NewsRightTop from '@/views/news/component/NewsRightTop.vue'
import NewsRightBottom from '@/views/news/component/NewsRightBottom.vue'
import { getNewsAPI } from '@/api/news.js'
// eslint-disable-next-line no-unused-vars
const currentNewsList = ref([])
const getCurrentNews = async () => {
  const res = await getNewsAPI()
  // this.articleFunctionTag,
  // this.articleStatus,
  // this.pageNum,
  // this.pageSize
  //console.log(res.data.data.list)
  currentNewsList.value = res.data.data.list
  //console.log(currentNewsList.value)
  //console.log(currentNewsList.value[0])
}
onMounted(() => getCurrentNews())
// let { articleCover } = toRef(currentNewsList.value[0], 'articleCover')
</script>

<template>
  <h2>HOT NEWS</h2>
  <div class="image">
    <RouterLink class="cover" to="/">
      <el-image
        src="https://zyychanquanjiaoyi.oss-cn-beijing.aliyuncs.com/2023/12/09/%E5%B0%81%E9%9D%A2/%E5%9B%BE%E7%89%87/dd062aae2b134e04b923e49377f60333.jpg?Expires=2017497444&OSSAccessKeyId=LTAI5t6LqCyho9Eb782DEvVG&Signature=P%2FQMFPISK%2BMzbDzdemtJI%2F7l%2BPY%3D"
        lazy
      >
      </el-image>
      <strong class="label">
        <p>高质量技术市场建设在上海交易所行成城市地位</p>
        <p>2023年3月</p>
      </strong>
    </RouterLink>
    <ul class="news-list">
      <li v-for="good in currentNewsList" :key="good.id" class="li">
        <NewsRightTop :good="good"></NewsRightTop>
      </li>
    </ul>
    <ul class="news-list" style="margin-top: 50px">
      <li v-for="good in currentNewsList" :key="good.id" class="li">
        <NewsRightBottom :good="good"></NewsRightBottom>
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
