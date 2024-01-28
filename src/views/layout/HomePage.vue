<script setup></script>

<template>
  <el-carousel :interval="5000">
    <el-carousel-item v-for="item in 4" :key="item">
      <h3 text="2xl" justify="center">{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
</template>

<style scoped>
.el-carousel {
  margin: 0;
  padding: 0;
}
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #e46841;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #e46741e9;
}
</style>
