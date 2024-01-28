<script setup>
import { Search } from '@element-plus/icons-vue'
</script>

<template>
  <div class="layout-container">
    <el-container>
      <el-header class="container-top" height="70px">
        <el-menu
          :default-active="$route.path"
          class="el-menu"
          mode="horizontal"
          :ellipsis="false"
          background-color="#FFFEFE"
          text-color="#606266"
          active-text-color="#E46841"
          @select="handleSelect"
          router
        >
          <div class="flex-grow" />
          <el-menu-item index="/home">首页</el-menu-item>
          <el-sub-menu index="/news">
            <template #title>新闻</template>
            <el-menu-item index="/news/current">时事新闻</el-menu-item>
            <el-menu-item index="/news/work">工作状态</el-menu-item>
            <el-menu-item index="/news/media">媒体发布</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index=" /organization">
            <template #title>机构</template>
            <el-menu-item index="/organization/history">历史</el-menu-item>
            <el-menu-item index="/organization/capital">注册资本</el-menu-item>
            <el-menu-item index="/organization/culture">文化</el-menu-item>
            <el-menu-item index="/organization/philosophy">宗旨</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="/feedback">
            <template #title>反馈</template>
            <el-menu-item index="/feedback/submit">意见提交</el-menu-item>
            <el-menu-item index="/feedback/release">处理公示</el-menu-item>
          </el-sub-menu>
          <div class="flex-grow1" />

          <div class="logo">
            <img
              style="width: 190px"
              src="../../assets/ZYY-logo.png"
              alt="logo"
            />
          </div>

          <div class="flex-grow2" />
          <el-menu-item index="/transaction">交易大厅</el-menu-item>
          <div class="search">
            <el-input
              v-model="input3"
              placeholder="Please input"
              class="input-with-select"
            >
              <template #append>
                <el-button :icon="Search" />
              </template>
            </el-input>
          </div>
        </el-menu>
      </el-header>
      <!-- 顶栏 -->
      <el-main
        ><div><router-view></router-view></div
      ></el-main>
      <!-- 二级路由出口 -->
      <el-footer class="container-bottom">
        <div class="footer1">
          <el-row :gutter="20">
            <el-col :span="1.5"></el-col>
            <el-col :span="7"
              ><div class="grid-content ep-bg-purple" />
              <div>关于我们</div>
              <div>
                <img
                  style="width: 190px"
                  src="../../assets/ZYY-logo.png"
                  alt="logo"
                /></div
            ></el-col>
            <el-col :span="7"
              ><div class="grid-content ep-bg-purple" />
              <div>联系我们</div>
              <div>Tel：188 8888 8888</div>
              <div>Add：开封市顺河回族区明伦街85号</div>
              <div>P.C：475001</div>
              <div>E-Mail：1329300101@jsyyx.com</div></el-col
            >
            <el-col :span="7"
              ><div class="grid-content ep-bg-purple" />
              使用教程</el-col
            >
            <el-col :span="1.5"></el-col>
          </el-row>
        </div>
        <div class="footer2">
          <div class="row">
            <div class="content">法律支持</div>
          </div>
          <div class="row">
            <div class="content">
              豫公网安备41000000000000号 豫ICP备05000000号-1 版权所有 Copyright
              © 2024
            </div>
          </div>
        </div>
      </el-footer>
      <!-- 底栏 -->
    </el-container>
  </div>
</template>

<style lang="scss" scoped>
.search {
  margin: 13px;
}
.layout-container {
  margin: 0;
  padding: 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
.container-top {
  margin: 0;
  padding: 0;
}

.logo {
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}
.container-bottom {
  margin: 0;
  padding: 0;
}
.footer1 {
  margin: 0;
  padding: 0;
  height: 200px;
  color: white;
  background-color: #333333;
}
.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.footer2 {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  height: 70px;
  background-color: black;
}

.row {
  display: flex;
  margin: 5px;
}

.content {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
