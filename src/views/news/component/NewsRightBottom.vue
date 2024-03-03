<script setup>
// import NewsHot from '@/views/news/NewsHot.vue'

defineProps({
  news: {
    type: Object,
    default: () => {}
  }
})
</script>

<template>
  <RouterLink
    :to="`/newsDetail/${news.id}`"
    :key="$route.fullPath"
    class="goods-item"
  >
    <el-image :src="news.articleCoverUrl" lazy />
    <p class="name">{{ news.articleTitle }}</p>
    <!--    <p class="time">2023年12月10日</p>-->
  </RouterLink>
  <!--  <div class="grid-content ep-bg-purple" />-->
</template>
<style scoped lang="scss">
.goods-item {
  box-sizing: border-box;
  display: block;
  border-radius: 12px;
  text-align: center;

  // margin-top: 20px;

  &:hover {
    transform: translate3d(0, -3px, 0);
    box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
  }

  .el-image {
    border-radius: 12px 12px 0px 0px !important;
    border-bottom: #333333 solid 1px;
    width: 100%;
    height: 40%;
    box-sizing: border-box;
  }

  p {
    box-sizing: border-box;
    padding: 20px 20px 30px 30px;
  }

  .name {
    box-sizing: border-box;
    height: 20%;
    font-weight: bold;
    font-size: 20px;
  }

  .time {
    box-sizing: border-box;
    text-align: left;
    padding-left: 30px;
    height: 15%;
    line-height: 15%;
    font-weight: 10;
  }
}
</style>
