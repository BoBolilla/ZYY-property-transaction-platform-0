<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { ShoppingBag, Document } from '@element-plus/icons-vue'
const input = ref('')

const router = useRouter()
const handleButtonClick = () => {
  router.push('/search')
}
</script>

<template>
  <div class="all">
    <div class="box w">
      <div class="zr">
        <div class="title">
          <el-icon style="font-size: 30px; color: #165dff"
            ><ShoppingBag
          /></el-icon>
          <h1 style="margin-left: 10px">我要转让</h1>
        </div>
        <input class="input" v-model="input" placeholder="请输入关键字" />
        <el-button
          style="
            margin-top: -1.5px;
            background-color: #165dff;
            border-color: #165dff;
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
            width: 130px;
            height: 50px;
            font-size: 17px;
            margin-left: 5px;
          "
          type="primary"
          @click="handleButtonClick"
          >搜索专利</el-button
        >
        <p>计算机，松茸，生物医药，汽车</p>
      </div>
      <div class="sr">
        <div class="title">
          <el-icon style="font-size: 30px; color: #27ae60"
            ><Document
          /></el-icon>
          <h1 style="margin-left: 10px">我要受让</h1>
        </div>
        <el-button
          style="width: 290px; height: 50px; margin-left: 30px; font-size: 17px"
          type="success"
          >我要转让</el-button
        >
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.all {
  height: 500px;
}
.box {
  margin-top: 20px;
  margin-bottom: 20px;
  width: 1200px;
  height: 220px;
  border-radius: 15px;
  box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
}

.zr {
  float: left;
  width: 850px;
  height: 220px;
}

.sr {
  float: left;
  width: 350px;
  height: 220px;
}

.input {
  margin-left: 30px;
  padding-left: 5px;
  border-radius: 5px;
  width: 670px;
  height: 50px;
  border: 2px solid #165dff;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  background-color: #f2f3f5;
}
.input::placeholder {
  font-size: 16px; /* 修改字体大小 */
  color: #c1c4cf; /* 修改颜色 */
}
.input:focus {
  outline: none; /* 移除默认的边框样式 */
  border-color: #165dff; /* 设置光标放上去后的边框颜色 */
}
p {
  margin-left: 30px;
  margin-top: 5px;
  color: #8695a7;
}
.title {
  margin: 30px;

  h1 {
    display: inline-block;
  }
}
</style>
