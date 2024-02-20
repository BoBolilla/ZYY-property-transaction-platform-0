<script setup>
import { Search } from '@element-plus/icons-vue'
</script>

<template>
  <el-menu
    :default-active="$route.path"
    class="nav"
    mode="horizontal"
    :ellipsis="false"
    @select="handleSelect"
    router
  >
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

    <div class="logo" title="中医药知识产权交易平台">
      <h1>
        <RouterLink class="link" :to="`/home`"
          >中医药知识产权交易平台</RouterLink
        >
      </h1>
    </div>

    <div class="flex-grow" />
    <el-menu-item index="/transaction">交易大厅</el-menu-item>
    <div class="search">
      <el-input
        v-model="input3"
        placeholder="请输入内容"
        class="input-with-select"
      >
        <template #append>
          <el-button :icon="Search" />
        </template>
      </el-input>
    </div>
  </el-menu>
</template>

<style scoped lang="scss">
.logo {
  width: 200px;
  height: 100%;
  position: absolute;
  left: 50%;
  margin: 0 -100px;
  background-size: cover;
  background: url(@/assets/images/logo.png) no-repeat;
}
.logo .link {
  display: block;
  font-size: 0;
}
.flex-grow {
  flex-grow: 1;
}
.search {
  margin: auto;
  margin-right: 10px;
}
</style>
