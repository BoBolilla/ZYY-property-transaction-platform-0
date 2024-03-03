<script setup>
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
    <el-image :src="news.articleCoverUrl" lazy style="width: 50%" />
    <!--    <img v-img-lazy="good.articleCoverUrl" alt=""  :src="good.articleCoverUrl"/>-->
    <div class="img-right">
      <p class="name">{{ news.articleTitle }}</p>
      <p class="time">{{ news.createDate }}</p>
    </div>
  </RouterLink>
</template>

<style scoped lang="scss">
.goods-item {
  display: flex;
  text-align: center;
  height: 85px;
  margin-top: 20px;

  &:hover {
    transform: translate3d(0, -3px, 0);
    box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
  }

  .img-right {
    width: 60%;
    //height: 85px;
  }

  img {
    border-radius: 12px 12px 0px 0px;
    border-bottom: #333333 solid 1px;
    width: 40%;
    height: 200px;
  }

  p {
    padding-left: 10px;
  }

  .name {
    width: 100%;
    height: 75%;
    font-weight: bold;
    font-size: 15px;
    text-align: left;
  }

  .time {
    width: 100%;
    font-size: 10px;
    text-align: left;
    padding-left: 10px;
    height: 25%;
    line-height: 25%;
    font-weight: 10;
    margin-top: 10px;
    padding-bottom: 10px;
    margin-bottom: 10px;
  }
}
</style>
