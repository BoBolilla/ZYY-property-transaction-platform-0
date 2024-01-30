<script setup>
// import NewsHot from '@/views/news/NewsHot.vue'

defineProps({
  good: {
    type: Object,
    default: () => {}
  }
})
</script>

<template>
  <RouterLink to="/" class="goods-item">
    <el-image :src="good.articleCover" lazy />
    <p class="name">高质量技术市场建设在上海技术交易所成的30周年大会春丽举行</p>
    <p class="desc">
      564789512月8日高质量技术市场建设在上海技术交易所成的30周年大会春丽举行
    </p>
    <p
      style="
        text-align: left;
        padding-top: 20px;
        font-weight: bold;
        font-size: 17px;
        height: 10%;
        box-sizing: border-box;
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

  border: #999999 solid 1px;
  margin-top: 20px;

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

  .desc {
    box-sizing: border-box;
    height: 15%;
    font-size: 15px;
    line-height: 15%;
    width: 80%; /*要显示文字的宽度*/
    text-overflow: ellipsis; /*让截断的文字显示为点点。还有一个值是clip意截断不显示点点*/
    white-space: nowrap; /*让文字不换行*/
    overflow: hidden; /*超出要隐藏*/
  }

  .time {
    box-sizing: border-box;
    text-align: left;
    padding-left: 30px;
    height: 15%;
    line-height: 15%;
    font-weight: 10;
    border-top: #999999 solid 1px;
  }
}
</style>
