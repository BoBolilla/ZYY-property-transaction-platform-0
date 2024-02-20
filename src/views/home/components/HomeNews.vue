<script setup>
import homePanel from './HomePanel.vue'
import NewsItem from './NewsItem.vue'
import { useNewsStore } from '@/stores'
const newsStore = useNewsStore()
</script>

<template>
  <div>
    <homePanel title="时事新闻">
      <template #main>
        <el-row :gutter="20">
          <el-col :span="12"
            ><div class="banner">
              <el-carousel :interval="5000">
                <el-carousel-item
                  v-for="item in newsStore.currentNewsList"
                  :key="item.id"
                >
                  <!-- <div class="news-banner"> -->
                  <img :src="item.articleCover" alt="" />
                  <h3>{{ item.articleTitle }}</h3>
                  <!-- </div> -->

                  <!-- <h3>
                    高质量技术要素市场建设暨上海技术交易所成立30周年大会顺利举行高质量技术要素市场建设暨上海技术交易所成立30周年大会顺利举行高质量技术要素市场建设暨上海技术交易所成立30周年大会顺利举行
                  </h3> -->
                </el-carousel-item>
              </el-carousel>
            </div></el-col
          >
          <el-col :span="12">
            <div class="title-right">
              <RouterLink :to="`/news`" class="arrow">+更多</RouterLink>
            </div>
            <ul class="news-list">
              <li v-for="news in newsStore.currentNewsList" :key="news">
                <NewsItem :news="news"></NewsItem>
              </li>
            </ul>
          </el-col>
        </el-row>
      </template>
    </homePanel>
  </div>
</template>

<style scoped lang="scss">
.banner {
  position: relative;
  // height: 100%;
}
.banner:hover {
  cursor: pointer;
}

// pic_item 这个整体 div 样式的时候，其中的 h3 的标签的样式
// 也就是显示在走马灯上的字体

.banner h3 {
  /* position: relative; */
  /* width: 864px;
  height: 168px; */
  position: absolute;
  left: 0%;
  bottom: 0%;
  // font-size: 25px;
  color: white;
  line-height: 116%;
  flex: none;
  order: 1;
  align-self: stretch;

  background-color: rgba(0, 0, 0, 0.3); /* 设置透明的背景颜色 */
  padding: 10px; /* 添加内边距以增加可读性 */
  overflow: hidden; /* 隐藏超出元素的内容 */
  text-overflow: ellipsis; /* 超出部分显示省略号 */
  white-space: nowrap; /* 强制文本在一行内显示，避免换行 */
  // max-width: 100%; /* 限制文本宽度不超过父容器的宽度 */
  max-width: 100%;
}

.title-right {
  height: 35px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-left: 6px solid #e46841;
  background-color: #ecf5ff;
}
.arrow {
  font-size: 20px;
  color: gray;
  font-weight: bold;
  margin-right: 3%;

  &:hover {
    // transform: translate3d(0, -3px, 0);
    // box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
    color: #e46841;
  }
}
</style>
