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
    <RouterLink to="" class="news-item">
      <div class="date">2023年3月</div>
      <div class="name ellipsis">
        明月几时有，把酒问青天，不知天上宫阙，今夕是何年
      </div>
    </RouterLink>
  </div>
</template>

<style scoped lang="scss">
.contain {
  margin: 0 auto;
  width: 900px;
  height: 60px;
  border-bottom: 1px #797979 dashed;
}
.news-item {
  width: 900px;
  height: 60px;
  transition: all 0.5s;
  background-color: rgb(255, 255, 255);

  div {
    float: left;
    margin-top: 15px;
  }
  .date {
    float: right;
    width: 80px;
    color: #999;
    height: 30px;
    white-space: nowrap;
    overflow: hidden;
  }
  .name {
    color: #797979;
    margin-left: 10px;
  }

  :hover {
    // transform: translate3d(0, -3px, 0);
    // box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
    color: #e46841;
  }
}
</style>
