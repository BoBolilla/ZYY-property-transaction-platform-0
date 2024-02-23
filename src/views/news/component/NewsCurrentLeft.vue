<script setup>
// import NewsHot from '@/views/news/NewsHot.vue'
import { onMounted, ref } from 'vue'
import axios from 'axios'

const props = defineProps({
  good: {
    type: Object,
    default: () => {}
  }
})

let fileContent = ref()
let articleUrl1 = ref(props.good.articleUrl)
console.log(articleUrl1.value)
onMounted(() => {
  // 发送HTTP请求获取文件内容
  axios
    .get(
      'https://zyychanquanjiaoyi.oss-cn-beijing.aliyuncs.com/2024/02/23/%E5%AE%9E%E6%97%B6%E6%96%B0%E9%97%BB/%E6%96%87%E7%AB%A0/81442bdc2b95434cbc4871ee657a1e0c?Expires=2024042466&OSSAccessKeyId=LTAI5t6LqCyho9Eb782DEvVG&Signature=1MbfmUTigY%2FXXZDhJ6PrDZGopiY%3D'
    )
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
  <RouterLink to="/" class="goods-item">
    <el-image :src="good.articleCover" lazy />
    <p class="name">
      明月几时有，把酒问青天，不知天上宫阙，今夕是何年，我欲乘风过去，油孔琼楼玉宇，明
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
    <p class="time">2023年12月10日</p>
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
