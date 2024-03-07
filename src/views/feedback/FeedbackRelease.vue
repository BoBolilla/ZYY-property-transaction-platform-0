<script setup>
import FeedbackItem from '@/views/feedback/components/feedbackItem.vue'

// do not use same name with ref
</script>

<template>
  <div class="banner1">
    <div class="feedbackHead"></div>
    <div class="feedbackHead1"></div>
    <div class="feedbackFoot">
      <h1>处理公示</h1>
      <div class="feedbackHeadInner" style="overflow: hidden">
        <FeedbackItem></FeedbackItem>
        <FeedbackItem></FeedbackItem>
        <FeedbackItem></FeedbackItem>
        <FeedbackItem></FeedbackItem>
        <FeedbackItem></FeedbackItem>
        <FeedbackItem></FeedbackItem>
        <FeedbackItem></FeedbackItem>
        <FeedbackItem></FeedbackItem>
      </div>
      <div>
        <el-pagination
          background
          layout="prev, pager, next"
          :total="1000"
          class="page"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.page {
  position: absolute;
  margin-top: -218px;
  left: 50%;
  margin-left: -178px;
}

.banner1 {
  position: relative;
  width: 100%;
  height: 1000px;
}

.feedbackFoot {
  position: absolute;
  z-index: 999;
  margin-top: 170px;
  left: 50%;
  margin-left: -500px;
  width: 1000px;
  height: 500px;

  color: white;
  text-align: center;
}

.feedbackHead {
  position: absolute;
  width: 100%;
  height: 300px;
  background-color: black;
  background-image: url('../../assets/images/feedback.png');
}

.feedbackHead1 {
  position: absolute;
  margin-top: 300px;
  width: 100%;
  height: 300px;
  background-color: black;
  background-image: url('../../assets/images/feedback1.png');
}

.feedbackHeadInner {
  width: 100%;
  margin-top: 35px;
  height: 750px;
  background-color: white;
}
</style>
