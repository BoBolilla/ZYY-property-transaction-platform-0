<script setup lang="js">
import { getVideoAPI } from '@/api/home.js'
import { ref } from 'vue'
import ViodeoSon from '@/views/home/components/Videoson/ViodeoSon.vue'

let videoList = ref('')
getVideoAPI().then((res) => {
  videoList.value = res.data.data.list
  console.log(videoList.value)
})
</script>

<template>
  <div class="videoSize">
    <div style="margin: 0 auto; padding-top: 15px">
      <div style="text-align: center; font-size: 30px; font-weight: bold">
        活动视频
      </div>
    </div>
    <ul>
      <li v-for="item in videoList" :key="item.id">
        <div class="video">
          <viodeo-son :item="item"></viodeo-son>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="css">
.videoSize {
  width: 1200px;
  margin: 0 auto;
}
.video {
  width: 540px !important;
  height: 303px !important;
}
li {
  display: inline-block;
  margin: 18px;
}
</style>
