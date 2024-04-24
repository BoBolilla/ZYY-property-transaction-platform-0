<script setup>
import { Search } from '@element-plus/icons-vue'
import { ref } from 'vue'

const showDl1 = ref(false)
const showDl2 = ref(false)
const showDl3 = ref(false)
</script>

<template>
  <!-- before 搜索 -->
  <div class="headerBefore">
    <div class="icon"><img src="@/assets/images/img_1.png" /></div>
    <div class="search">
      <el-input
        v-model="input3"
        placeholder="请输入内容"
        class="input-with-select"
        style="height: 55px"
      >
        <template #append>
          <el-button :icon="Search" />
        </template>
      </el-input>
    </div>
  </div>
  <!--  导航-->

  <div class="navWrap clearfix">
    <div class="nav">
      <ul>
        <li>
          <router-link class="link" to="/home">首页</router-link>
        </li>
        <li
          class="mainmenu"
          @mouseover="showDl1 = true"
          @mouseout="showDl1 = false"
        >
          <router-link class="link" to="/news/current"> 新闻</router-link>

          <dl class="chang" :class="{ slideDown: showDl1 }">
            <dd>
              <router-link to="/news/current">时事新闻</router-link>
            </dd>
            <dd>
              <router-link to="/news/work">工作状态</router-link>
            </dd>
            <dd>
              <router-link to="/news/media">媒体发布</router-link>
            </dd>
          </dl>
        </li>
        <li
          class="mainmenu"
          @mouseover="showDl2 = true"
          @mouseout="showDl2 = false"
        >
          <router-link class="link" to="/organization/history">
            机构</router-link
          >

          <dl class="chang" :class="{ slideDown: showDl2 }">
            <dd>
              <router-link to="/organization/history">历史</router-link>
            </dd>
            <dd>
              <router-link to="/organization/capital">注册资本</router-link>
            </dd>
            <dd>
              <router-link to="/organization/culture">文化</router-link>
            </dd>
            <dd>
              <router-link to="/organization/philosophy">宗旨</router-link>
            </dd>
          </dl>
        </li>
        <li
          class="mainmenu"
          @mouseover="showDl3 = true"
          @mouseout="showDl3 = false"
        >
          <router-link class="link" to="/feedback/submit"> 反馈</router-link>

          <dl class="chang" :class="{ slideDown: showDl3 }">
            <dd>
              <router-link to="/feedback/submit">意见提交</router-link>
            </dd>
            <dd>
              <router-link to="/feedback/release">处理公示</router-link>
            </dd>
          </dl>
        </li>
        <li class="mainmenu">
          <a class="link" href="http://39.98.183.126:81"> 交易大厅</a>
        </li>

        <!-- <li class="mainmenu">

                <a class="link" href="xzzq.htm">下载专区</a>
                <dl class="chang">

                    <dd><a href="xwdt/tqkx.htm">团委简介</a></dd>

                    <dd><a href="xwdt/xyfc.htm">人员分工</a></dd>

                    <dd><a href="xwdt/kjcx.htm">组织机构</a></dd>
                    <dd><a href="xwdt/kjcx.htm">组织机构</a></dd>
                    <dd><a href="xwdt/kjcx.htm">组织机构</a></dd>
                </dl>
            </li> -->
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
.icon {
  margin-left: 150px;
  width: 350px;
  height: 70px;
  margin-top: 10px;
  display: inline-block;
}
.search {
  margin-top: 15px;
  margin-right: 250px;

  float: right;
  width: 400px;
  height: 65px;
  display: inline-block;
}
input-with-select {
  height: 65px;
}
.headerBefore {
  width: 100%;
  height: 85px;
}
.navWrap {
  width: 100%;
  background: #0071c1;
  height: 50px;
  line-height: 50px;
  margin: 0 auto;
}

.nav {
  margin: 0 auto;

  display: block !important;
  max-width: 1200px;
  width: 100%;
  height: 50px;

  *position: relative;
  *z-index: 100;
}

.nav li {
  float: left;
  height: 50px;
  line-height: 50px;
  font-size: 16px;
  position: relative;
  width: 20%;
  text-align: center;
}

.nav li a {
  color: #fff;
  display: block;
  padding: 0 23px;
}

.nav ul li a:hover {
  display: block;
  color: #fff;
  background: #00bbff;
}

.nav dl {
  font-size: 14px;
  background: #dcd9d9;
  position: absolute;
  top: 50px;
  left: 0px;
  z-index: 9999;
}

.nav dl.chang {
  width: 230px;
}

.chang {
  max-height: 0;
  overflow: hidden;
  transition: max-height 1s ease-out;
  transform: translateY(0);
}

.slideDown {
  max-height: 500px; /* 根据你的子目录高度设置合适的值 */
  transform: translateY(0);
}

.nav dl dd a {
  color: #333;
  height: 38px;
  line-height: 38px;
  padding: 0 24px;
}

.nav dl dd a:hover {
  color: #fff;
  background: #c60000;
}
</style>
