<script setup>
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import { Search } from '@element-plus/icons-vue'
import { ref } from 'vue'
import { labelSearchAPI } from '@/api/search.js'
let locale = zhCn
// startTime,endTime,minPrice,maxPrice,priceSort,projectDomain,propertyCategory,tradeMode

const propertyCategory = ref('1')
const projectDomain = ref('1')
const tradeMode = ref('1')
// const radio4 = ref('1')
const radio5 = ref('1')

function labelSearch() {
  labelSearchAPI(
    time.value[0],
    time.value[1],
    0,
    1000000000,
    1,
    projectDomain.value,
    propertyCategory.value,
    tradeMode.value
  ).then((res) => {
    console.log(res)
  })
}

const time = ref('')

const shortcuts = [
  {
    text: '一周内',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
      return [start, end]
    }
  },
  {
    text: '一个月内',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
      return [start, end]
    }
  },
  {
    text: '三个月内',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
      return [start, end]
    }
  }
]
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
          <el-radio-group v-model="propertyCategory">
            <el-radio label="1" size="large">专利</el-radio>
            <el-radio label="2" size="large">技术秘密</el-radio>
            <el-radio label="3" size="large">商标</el-radio>
            <el-radio label="4" size="large">版权</el-radio>
            <el-radio label="5" size="large">其他</el-radio>
          </el-radio-group>
        </div>
        <div class="xmly">
          <span>项目领域</span>
          <el-radio-group v-model="projectDomain">
            <!-- <el-radio label="全部" >全部</el-radio> -->
            <el-radio label="1">针灸</el-radio>
            <el-radio label="2">方剂</el-radio>
            <el-radio label="3">推拿</el-radio>
            <el-radio label="4">药草</el-radio>
            <el-radio label="5">其他</el-radio>
          </el-radio-group>
        </div>
        <div class="jylx">
          <span>交易类型</span>
          <el-radio-group v-model="tradeMode">
            <!-- <el-radio  label="全部" >全部</el-radio> -->
            <el-radio label="1">转让</el-radio>
            <el-radio label="3">作价投资</el-radio>
            <el-radio label="2">许可</el-radio>
            <el-radio label="4">其他</el-radio>
          </el-radio-group>
        </div>
        <div class="gpsj">
          <span>挂牌时间</span>
          <div class="time">
            <el-config-provider :locale="locale"
              ><el-date-picker
                v-model="time"
                type="datetimerange"
                :shortcuts="shortcuts"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
            /></el-config-provider>
            <div>{{ time[1] }}</div>
          </div>
          <!-- <el-radio-group v-model="radio4">
            <el-radio   label="全部">全部</el-radio>
            <el-radio   label="1">一周内</el-radio>
            <el-radio   label="2">一月内</el-radio>
            <el-radio   label="3">自定义</el-radio>
          </el-radio-group> -->
        </div>
        <div class="gpjg">
          <span>挂牌价格</span>
          <el-radio-group v-model="radio5">
            <el-radio label="1">不限</el-radio>
            <el-radio label="2">从高到低</el-radio>
            <el-radio label="3">从低到高</el-radio>
            <el-radio label="4">自定义</el-radio>
          </el-radio-group>
        </div>
      </div>
      <div class="btn" @click="labelSearch()"><button>确定筛选</button></div>
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
.time {
  display: inline-block;
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
