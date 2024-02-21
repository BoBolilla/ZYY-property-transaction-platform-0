<script setup>
import homePanel from './HomePanel.vue'
</script>

<template>
  <div class="w">
    <homePanel title="交流合作">
      <template #main>
        <ul class="goods-list">
          <li v-for="item in 4" :key="item">
            <div class="li-cotent">
              <RouterLink to="/">
                <img src="@/assets/images/test.png" alt="" />

                <p class="name ellipsis-2">
                  高质量技术要素市场建设暨上海技术交易所成立30周年大会顺利举行
                </p>
                <p class="desc">2024年1月1日</p>
              </RouterLink>
            </div>
          </li>
        </ul>
      </template>
    </homePanel>
  </div>
</template>
<style scoped lang="scss">
.goods-list {
  justify-content: space-between;
  height: 400px;
  width: 1240px;
  .li-cotent {
  }
  li {
    float: left;
    width: 270px;
    margin-right: 40px;
    // padding-right: 5%;
    height: 350px;
    transition: all 0.5s;

    &:hover {
      transform: translate3d(0, -3px, 0);
      box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
    }

    img {
      width: 100%;
      height: 180px;
    }

    p {
      font-size: 20px;
      padding-top: 20px;
    }

    .desc {
      color: #999;
      font-size: 18px;
    }
  }
}
</style>
