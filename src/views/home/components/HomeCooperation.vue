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

                <h4 class="name ellipsis-2">
                  高质量技术要素市场建设暨上海技术交易所成立30周年大会顺利举行
                </h4>
                <RouterLink class="link" to="/">查看更多>></RouterLink>
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
  height: 500px;
  width: 1240px;

  .li-cotent h4 {
    width: 210px;
    height: 40px;
    font-weight: 5px;
    margin: 30px;
  }
  li {
    float: left;
    width: 270px;
    margin-right: 40px;
    // padding-right: 5%;
    height: 400px;
    transition: all 0.5s;
    box-shadow: 0 3px 8px rgb(0 0 0 / 20%);

    &:hover {
      transform: translate3d(0, -3px, 0);
      box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
    }

    img {
      width: 100%;
      height: 180px;
    }

    .link {
      display: block;
      font-size: 10px;
      margin-left: 30px;
      margin-top: 90px;
    }

    .desc {
      margin-top: 10px;
      padding: 10px 30px;
      color: #999;
      font-size: 10px;
      border-top: 1px solid #999;
    }
  }
}
</style>
