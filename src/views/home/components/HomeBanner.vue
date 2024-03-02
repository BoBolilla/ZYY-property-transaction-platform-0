<script setup>
defineProps({
  bannerList: {
    type: Object,
    default: () => {}
  }
})
</script>

<template>
  <div class="home-banner">
    <el-carousel height="auto" autoplay>
      <el-carousel-item
        style="height: 35vw; width: 100%"
        v-for="item in bannerList"
        :key="item.id"
      >
        <img :src="item.systemUrl" alt="" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style scoped>
.home-banner {
  width: 100%;
  height: 35vw;
}

img {
  width: 100%;
  height: 100%;
}
</style>
