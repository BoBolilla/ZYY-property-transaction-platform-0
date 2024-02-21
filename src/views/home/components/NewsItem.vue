<script setup>
defineProps({
  news: {
    type: Object,
    default: () => {}
  }
})
</script>

<template>
  <div class="contain">
    <RouterLink :to="`/newsDetail/${news.id}`" class="news-item">
      <div class="date">{{ news.modifyDate }}</div>
      <div class="name ellipsis">{{ news.articleTitle }}</div>
    </RouterLink>
  </div>
</template>

<style scoped lang="scss">
.contain {
  width: 570px;
  height: 50px;
  border-bottom: 1px dotted;
}
.news-item {
  width: 570px;
  height: 50px;
  transition: all 0.5s;
  background-color: rgb(255, 255, 255);

  div {
    float: left;
    margin-top: 15px;
  }
  .date {
    width: 80px;
    color: #999;
    height: 30px;
    white-space: nowrap;
    overflow: hidden;
  }
  .name {
    margin-left: 10px;
  }

  :hover {
    // transform: translate3d(0, -3px, 0);
    // box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
    color: #e46841;
  }
}
</style>
