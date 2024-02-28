<script setup>
import NewsItem from './NewsItem.vue'
import { useNewsStore } from '@/stores'
const newsStore = useNewsStore()
</script>

<template>
  <div class="container w">
    <div class="left">
      <div class="title">
        <h3>时事新闻</h3>
        <RouterLink :to="`/news`" class="arrow">></RouterLink>
      </div>
      <div class="content-left">
        <el-carousel :interval="5000">
          <el-carousel-item
            v-for="item in newsStore.currentNewsList"
            :key="item.id"
          >
            <img :src="item.articleCoverUrl" alt="" />
            <div class="newstitle-left">
              <h3 class="ellipsis">{{ item.articleTitle }}</h3>
            </div>
            <!-- <h3>
                    高质量技术要素市场建设暨上海技术交易所成立30周年大会顺利举行高质量技术要素市场建设暨上海技术交易所成立30周年大会顺利举行高质量技术要素市场建设暨上海技术交易所成立30周年大会顺利举行
                  </h3> -->
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <div class="right">
      <div class="title">
        <h3>时事新闻</h3>
        <RouterLink :to="`/news`" class="arrow">></RouterLink>
      </div>
      <div class="content-right">
        <ul class="news-list">
          <li v-for="news in newsStore.currentNewsList" :key="news">
            <NewsItem :news="news"></NewsItem>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  height: 350px;
  margin-top: 50px;
  margin-bottom: 50px;

  .left {
    float: left;
    width: 570px;
    height: 350px;
    margin-right: 60px;
    background-color: grey;
  }
  .right {
    float: left;
    width: 490px;
    height: 350px;
  }
}

.title {
  width: 570px;
  height: 50px;
  border-left: #e46841 solid 3px;
  background-color: #ecf5ff;
}
.title h3 {
  float: left;
  margin: 13px;
}

.title .arrow {
  float: right;
  margin: 10px;
}
img {
  width: 100%;
  height: 100%;
}
.content-left {
  position: relative;
}
.newstitle-left {
  position: absolute;
  z-index: 1;
  bottom: 0;
  width: 570px;
  height: 60px;
  background-color: rgb(0, 0, 0, 0.5);
  color: white;
}
.newstitle-left h3 {
  margin: 10px;
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
