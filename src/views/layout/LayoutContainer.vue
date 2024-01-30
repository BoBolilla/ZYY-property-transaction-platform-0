<script setup>
import { useNewsStore } from '@/stores'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import { onMounted } from 'vue'
const newsStore = useNewsStore()

onMounted(() => {
  newsStore.getCurrentNews()
})
</script>

<template>
  <div class="layout-container">
    <!-- <el-container> -->
    <!-- <el-header class="container-top"> -->
    <LayoutHeader />
    <!-- </el-header> -->
    <!-- 顶栏 -->

    <!-- <el-main class="main"> -->
    <router-view></router-view>
    <!-- </el-main> -->
    <!-- 二级路由出口 -->

    <LayoutFooter />

    <!-- 底栏 -->
    <!-- </el-container> -->
  </div>
</template>

<style lang="scss" scoped>
.layout-container {
  background-color: white;
  margin: 0;
  padding: 0;
}

.main {
  padding: 0;
}
</style>
