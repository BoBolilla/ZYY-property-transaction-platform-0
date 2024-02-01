<script setup>
defineProps({
  news: {
    type: Object,
    default: () => {}
  }
})
</script>

<template>
  <div class="container">
    <RouterLink :to="`/newsDetail/${news.id}`" class="news-item">
      <p class="name ellipsis">{{ news.articleTitle }}</p>
      <p class="date ellipsis">{{ news.modifyDate }}</p>
    </RouterLink>
  </div>
</template>

<style scoped lang="scss">
.container {
  border-bottom: 1px dotted;
}
.news-item {
  display: block;
  width: 100%;
  // padding: 10px 20px;
  //text-align: center;
  transition: all 0.5s;
  background-color: rgb(255, 255, 255);

  &:hover {
    // transform: translate3d(0, -3px, 0);
    // box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
    color: #e46841;
  }

  p {
    padding-top: 10px;
  }

  .name {
    font-size: 16px;
  }

  .date {
    color: #999;
    height: 29px;
  }
}
</style>
