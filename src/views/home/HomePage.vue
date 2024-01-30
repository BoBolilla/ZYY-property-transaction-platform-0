<script setup>
import HomeAchievement from './components/HomeAchievement.vue'
import HomeBanner from './components/HomeBanner.vue'
import HomeNews from './components/HomeNews.vue'
import HomeWork from './components/HomeWork.vue'
import HomeOrganization from './components/HomeOrganization.vue'
import HomeCooperation from './components/HomeCooperation.vue'
</script>

<template>
  <div class="container">
    <HomeBanner />
  </div>
  <el-row>
    <el-col :span="3"><div class="grid-content ep-bg-purple" /></el-col>
    <el-col :span="18"
      ><div class="grid-content ep-bg-purple" />

      <HomeNews />
      <HomeWork />
      <HomeAchievement />
      <HomeOrganization />
      <HomeCooperation />
    </el-col>
    <el-col :span="3"><div class="grid-content ep-bg-purple" /></el-col>
  </el-row>
</template>
