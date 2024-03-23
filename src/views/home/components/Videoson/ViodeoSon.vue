<script setup>
let a = defineProps({
  item: {
    type: Object,
    default: () => {}
  }
})
import Player from 'xgplayer'
import 'xgplayer/dist/index.min.css'
import { onMounted } from 'vue'
import 'xgplayer/dist/index.min.css'


console.log(a.item.systemUrl, 123)
const playerOpts = {
  id: a.item.id, //元素id
  url: a.item.systemUrl, //视频地址
  poster: 'https://zyychanquanjiaoyi.oss-cn-beijing.aliyuncs.com/2024/03/21/%E8%BD%AE%E6%92%AD%E5%9B%BE/%E5%9B%BE%E7%89%87/19b8a84bd0074881a18b6e8c26d460cb.jpg?Expires=2026360707&OSSAccessKeyId=LTAI5t6LqCyho9Eb782DEvVG&Signature=6izBGRuD1a7PaFBN9JW9g%2BtgJ4Q%3D', //封面图
  lang: 'zh-cn', //设置中文
  lastPlayTime: 0, //视频起播时间（单位：秒）
  lastPlayTimeHideDelay: 5, //提示文字展示时长（单位：秒）
  closeVideoClick: false, // true - 禁止pc端单击暂停，反之
  closeVideoTouch: true, // true - 禁止移动端单击暂停，反之
  videoInit: true,
  fluid: true, //填满屏幕
  autoplay: false, //自动播放
  loop: false, //循环播放
  pip: true,
  volume: 1, //音量 0 -  1
  playbackRate: [0.5, 0.75, 1, 1.5, 2], //传入倍速可选数组
  // 删除控件
  // ignores: ['time', 'definition', 'error', 'fullscreen', 'i18n', 'loading', 'mobile', 'pc', 'play', 'poster', 'progress', 'replay', 'volume'],
  ignores: ['volume'],
  rotateFullscreen: true
}

//  播放器
let player = null

// 必须在onMounted 或 nextTick实例Xgplayer播放器
onMounted(() => {
  player = new Player(playerOpts)
})
</script>

<template>
  <div :id="a.item.id" class="size" ref="RefPlayer"></div>
</template>

<style scoped lang="scss"></style>
