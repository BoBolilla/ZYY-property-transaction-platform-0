<script setup>
import { Search } from '@element-plus/icons-vue'
import { ref } from 'vue'

const radio1 = ref('全部')
const radio2 = ref('全部')
const radio3 = ref('全部')
const radio4 = ref('全部')
const radio5 = ref('不限')
</script>

<template>
  <div class="w">
    <div class="search">
      <el-input
        style="width: 600px; height: 50px; margin: 50px auto"
        v-model="input3"
        placeholder="请输入关键字"
        class="input-with-select"
      >
        <template #append>
          <el-button :icon="Search" />
        </template>
      </el-input>
    </div>

    <div class="filter">
      <div class="title">筛选条件</div>
      <div class="choose">
        <div class="cqlx">
          <span>产权类型</span>
          <el-radio-group v-model="radio1">
            <el-radio label="全部" value="全部" />
            <el-radio label="专利" value="专利" />
            <el-radio label="技术秘密" value="技术秘密" />
            <el-radio label="商标" value="商标" />
            <el-radio label="版权" value="版权" />
            <el-radio label="集成电路" value="集成电路" />
            <el-radio label="其他" value="其他" />
          </el-radio-group>
        </div>
        <div class="xmly">
          <span>项目领域</span>
          <el-radio-group v-model="radio2">
            <el-radio label="全部" value="全部" />
            <el-radio label="生物医药" value="生物医药" />
            <el-radio label="新材料" value="新材料" />
            <el-radio label="新能源" value="新能源" />
            <el-radio label="先进制造" value="先进制造" />
            <el-radio label="农业科技" value="农业科技" />
            <el-radio label="人工智能" value="人工智能" />
            <el-radio label="航空航天" value="航空航天" />
            <el-radio label="信息技术" value="信息技术" />
            <el-radio label="其他" value="其他" />
          </el-radio-group>
        </div>
        <div class="jylx">
          <span>交易类型</span>
          <el-radio-group v-model="radio3">
            <el-radio label="全部" value="全部" />
            <el-radio label="转让" value="转让" />
            <el-radio label="作价投资" value="作价投资" />
            <el-radio label="许可" value="许可" />
            <el-radio label="其他" value="其他" />
          </el-radio-group>
        </div>
        <div class="gpsj">
          <span>挂牌时间</span>
          <el-radio-group v-model="radio4">
            <el-radio label="全部" value="全部" />
            <el-radio label="一周内" value="一周内" />
            <el-radio label="一月内" value="一月内" />
            <el-radio label="自定义" value="自定义" />
          </el-radio-group>
        </div>
        <div class="gpjg">
          <span>挂牌价格</span>
          <el-radio-group v-model="radio5">
            <el-radio label="不限" value="不限" />
            <el-radio label="从高到低" value="从高到低" />
            <el-radio label="从低到高" value="从低到高" />
            <el-radio label="自定义" value="自定义" />
          </el-radio-group>
        </div>
      </div>
      <div class="btn"><button>确定筛选</button></div>
    </div>
    <div class="show"></div>
  </div>
</template>

<style scoped>
.search {
  margin-top: 30px;
  margin-bottom: 30px;
  padding-left: 300px;
}
.filter {
  width: 100%;
  height: 300px;
  border: 1px solid rgb(188, 188, 188);
  border-radius: 15px;
}
.title {
  font-size: 20px;
  line-height: 50px;
  height: 50px;
  width: 1100px;
  margin-left: 50px;
  border-bottom: 1px solid rgb(188, 188, 188);
}
.choose {
  width: 1100px;
  height: 180px;
  margin-left: 50px;
}

span {
  margin-right: 30px;
  font-size: 15px;
  color: rgb(145, 144, 144);
}

.btn button {
  width: 100px;
  height: 35px;
  color: white;
  border: none;
  border-radius: 5px;
  margin-left: 500px;
  background-color: #409eff;
}
</style>
