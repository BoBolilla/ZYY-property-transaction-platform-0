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
import HomeVideo from '@/views/home/components/HomeVideo.vue'

const bannerList = ref([])

import AOS from 'aos'

onMounted(() => {
  AOS.init()
})

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

  <div class="show animate__animated animate__fadeInDownBig">
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
  <!--  新闻-->
  <div class="news" data-aos="zoom-in">
    <HomeNews />
  </div>
  <!--  机构信息-->
  <div data-aos="fade-left">
    <HomeOrganization />
  </div>
  <!--  产业模块-->
  <div data-aos="fade-right">
    <Chanyexhuanban />
  </div>
  <!--  交流合作-->
  <div data-aos="zoom-out-up">
    <HomeCooperation />
  </div>
  <!--  视频-->
  <div class="video" data-aos="zoom-in">
    <home-video></home-video>
  </div>
  <!--业务模块-->
  <div class="cooper" data-aos="zoom-in">
    <HomeWork />
  </div>
</template>

<style scoped>
.video {
  width: 100%;
  margin: 0 auto;
  background-color: #f4f4f4;
}

.cooper {
  padding-top: 20px;
}

.news {
  background-color: #f4f4f4;

  padding: 20px;
}

.show {
  float: right;
  margin-top: -90px;
  margin-right: 15%;
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
