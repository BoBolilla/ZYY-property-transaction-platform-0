<script setup>
// import NewsHot from '@/views/news/NewsHot.vue'
import { onMounted, ref } from 'vue'
import axios from 'axios'

const props = defineProps({
  news: {
    type: Object,
    default: () => {}
  }
})

let fileContent = ref()
let articleUrl1 = ref(props.news.articleUrl)
console.log(articleUrl1.value)
onMounted(() => {
  // 发送HTTP请求获取文件内容
  axios
    .get(articleUrl1.value)
    .then((response) => {
      fileContent.value = response.data
    })
    .catch((error) => {
      console.error('Error fetching file content:', error)
    })
  console.log('挂载完毕')
  console.log(fileContent.value)
})
</script>
<template>
  <RouterLink :to="`/newsDetail/${news.id}`" class="goods-item">
    <el-image :src="news.articleCoverUrl" lazy />
    <p class="name">
      {{ news.articleTitle }}
    </p>
    <p class="desc" v-html="fileContent"></p>
    <!--    <el-image :src="good.articleUrl" lazy/>-->
    <p
      style="
        text-align: left;
        font-weight: bold;
        font-size: 17px;
        padding-left: 5%;
        margin-top: 40px;
        margin-bottom: 10px;
      "
    >
      更多>>
    </p>
    <p class="time">{{ news.createDate }}</p>
  </RouterLink>
  <!--  <div class="grid-content ep-bg-purple" />-->
</template>
<style scoped lang="scss">
.goods-item {
  box-sizing: border-box;
  display: block;
  border-radius: 12px;
  text-align: center;
  //height: 600px;
  border: #f5f5f5 solid 4px;
  margin-top: 20px;

  &:hover {
    transform: translate3d(0, -3px, 0);
    box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
  }

  .el-image {
    border-radius: 12px 12px 0px 0px !important;
    border-bottom: #333333 solid 1px;
    width: 100%;
    height: 235px;
    box-sizing: border-box;
  }

  .name {
    width: 90%;
    margin: auto;
    box-sizing: border-box;
    font-weight: 540;
    font-size: 25px;
    margin-top: 40px;
    -webkit-line-clamp: 2;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-all;
  }

  .desc {
    font-size: 15px;
    color: #666666;
    width: 90%; /*要显示文字的宽度*/
    margin: auto;
    margin-top: 50px;
    /*让截断的文字显示为点点。还有一个值是clip意截断不显示点点*/
    /*让文字不换行*/
    /*超出要隐藏*/
    height: 40px;
    -webkit-line-clamp: 2;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-all;
  }

  .time {
    box-sizing: border-box;
    text-align: left;
    padding-left: 30px;
    height: 60px;
    line-height: 60px;
    font-weight: 10;
    border-top: #d4d4d4 solid 1px;
  }
}
</style>
