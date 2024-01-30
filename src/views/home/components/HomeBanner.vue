<script setup>
import { getBannerAPI } from '@/api/home'
import { onMounted, ref } from 'vue'

const bannerList = ref([])

const getBanner = async () => {
  const res = await getBannerAPI()
  //console.log(res)
  bannerList.value = res.data.data.list
  //console.log(bannerList.value)
}

onMounted(() => getBanner())
</script>

<template>
  <div class="home-banner">
    <el-carousel height="500px">
      <el-carousel-item v-for="item in bannerList" :key="item.id">
        <img :src="item.systemUrl" alt="" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style scoped lang="scss">
.home-banner {
  img {
    width: 100%;
    height: 500px;
  }
}
</style>
