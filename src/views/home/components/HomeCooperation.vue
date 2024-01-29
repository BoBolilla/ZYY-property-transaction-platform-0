<script setup>
import homePanel from './HomePanel.vue'
</script>

<template>
  <div>
    <homePanel title="交流合作">
      <template #main>
        <ul class="goods-list">
          <li v-for="item in 4" :key="item">
            <RouterLink to="/">
              <img src="@/assets/images/test.png" alt="" />
              <p class="name">
                高质量技术要素市场建设暨上海技术交易所成立30周年大会顺利举行
              </p>
              <p class="desc">2024年1月1日</p>
            </RouterLink>
          </li>
        </ul>
      </template>
    </homePanel>
  </div>
</template>
<style scoped lang="scss">
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 426px;

  li {
    width: 306px;
    height: 406px;
    transition: all 0.5s;

    &:hover {
      transform: translate3d(0, -3px, 0);
      box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
    }

    img {
      width: 306px;
      height: 200px;
    }

    p {
      font-size: 22px;
      padding-top: 12px;
      text-align: center;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }

    .desc {
      color: #999;
      font-size: 18px;
    }
  }
}
</style>
