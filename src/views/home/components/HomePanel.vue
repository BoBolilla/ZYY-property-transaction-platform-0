<script setup>
defineProps({
  title: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div class="home-panel">
    <div class="container">
      <div class="head">
        <!-- 主标题和副标题 -->
        <h3>
          {{ title }}
        </h3>
      </div>
      <!-- 主体内容区域 -->
      <slot name="main" />
    </div>
    <hr />
  </div>
</template>

<style scoped lang="scss">
.home-panel {
  background-color: #fff;

  .head {
    padding: 40px 0;
    display: flex;
    align-items: flex-end;
    //justify-content: center; // 将内容水平居中

    h3 {
      text-align: center;
      flex: 1;
      font-size: 28px;
      font-weight: normal;
      margin-left: 6px;
      height: 35px;
      line-height: 35px;
    }
  }
}
</style>
