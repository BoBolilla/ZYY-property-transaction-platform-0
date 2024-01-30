<script setup>
defineProps({
  news: {
    type: Object,
    default: () => {}
  }
})
</script>

<template>
  <RouterLink to="/" class="news-item">
    <p class="name ellipsis">{{ news.articleTitle }}</p>
    <p class="desc ellipsis">{{ news.modifyDate }}</p>
    <hr />
  </RouterLink>
</template>

<style scoped lang="scss">
.news-item {
  display: block;
  width: 100%;
  padding: 10px 20px;
  //text-align: center;
  transition: all 0.5s;
  background-color: rgb(255, 255, 255);

  &:hover {
    transform: translate3d(0, -3px, 0);
    box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
  }

  p {
    padding-top: 10px;
  }

  .name {
    font-size: 16px;
  }

  .desc {
    color: #999;
    height: 29px;
  }
}
</style>
