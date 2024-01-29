<script setup>
import HomeAchievement from './components/HomeAchievement.vue'
import HomeBanner from './components/HomeBanner.vue'
import HomeNews from './components/HomeNews.vue'
import HomeWork from './components/HomeWork.vue'
import HomeOrganization from './components/HomeOrganization.vue'
</script>

<template>
  <div class="container">
    <HomeBanner />
  </div>
  <HomeNews />
  <HomeWork />
  <HomeAchievement />
  <HomeOrganization />
</template>
