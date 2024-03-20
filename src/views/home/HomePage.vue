<script setup>
import HomeAchievement from './components/HomeAchievement.vue'
import HomeBanner from './components/HomeBanner.vue'
import HomeNews from './components/HomeNews.vue'
import HomeWork from './components/HomeWork.vue'
import HomeOrganization from './components/HomeOrganization.vue'
import HomeCooperation from './components/HomeCooperation.vue'
import { onMounted, ref } from 'vue'
import { getBannerAPI } from '@/api/home.js'
import Chanyexhuanban from '@/views/home/components/Chanyexhuanban.vue'

const bannerList = ref([])

function getBanner() {
  getBannerAPI().then((res) => {
    bannerList.value = res.data.data.list
    console.log(bannerList.value)
  })
}

onMounted(() => {
  getBanner()
})
</script>

<template>
  <div class="container">
    <HomeBanner :bannerList="bannerList" />
  </div>
  <div class="show">
    <div class="yj">
      <img src="@/assets/images/yj.png" />
      <h3>愿景</h3>
      <p>
        以优质服务赢得企业满意，以优秀业绩赢得行 业领先
        引领着创业幼苗沐浴党和政府的阳光，承载时 代重任.
      </p>
    </div>
    <div class="shim">
      <img src="@/assets/images/shim.png" />
      <h3>使命</h3>
      <p>
        发展高科技，促进产业化 通过“联络员+辅导员+创业导师"的三级辅导
        体系和十多个专业服务平台。
      </p>
    </div>
  </div>
  <HomeAchievement />
  <div class="news">
    <HomeNews />
  </div>
  <HomeOrganization />
  <div>
    <Chanyexhuanban />
  </div>

  <HomeCooperation />

  <div class="cooper">
    <HomeWork />
  </div>
</template>

<style scoped>
.cooper {
  background-color: #f4f4f4;

  padding-top: 20px;
}

.news {
  background-color: #f4f4f4;

  padding: 20px;
}

.show {
  position: absolute;
  top: 35vw;
  left: 55vw;
  width: 500px;
  height: 250px;
  color: white;
}

.show img {
  margin: 10px;
  margin-top: 30px;
}

.show .yj {
  padding: 20px;
  float: left;
  width: 250px;
  height: 250px;
  background-color: #235db6;
}

.show .shim {
  padding: 20px;
  float: left;
  width: 250px;
  height: 250px;
  background-color: #e46841;
}
</style>
