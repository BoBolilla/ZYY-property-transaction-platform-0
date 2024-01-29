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
  <HomeNews />
  <HomeWork />
  <HomeAchievement />
  <HomeOrganization />
  <HomeCooperation />
</template>
