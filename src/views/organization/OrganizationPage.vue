<!--<script lang="ts" setup>-->
<!--interface User {-->
<!--  date: string-->
<!--  name: string-->
<!--  address: string-->
<!--}-->

<!--const tableRowClassName = ({ row, rowIndex }: { row: User; rowIndex: number }) => {-->
<!--  if (rowIndex === 1) {-->
<!--    return 'warning-row'-->
<!--  } else if (rowIndex === 3) {-->
<!--    return 'success-row'-->
<!--  }-->
<!--  return ''-->
<!--}-->

<!--const tableData: User[] = [-->
<!--  {-->
<!--    date: '2016-05-03',-->
<!--    name: 'Tom',-->
<!--    address: 'No. 189, Grove St, Los Angeles'-->
<!--  },-->
<!--  {-->
<!--    date: '2016-05-02',-->
<!--    name: 'Tom',-->
<!--    address: 'No. 189, Grove St, Los Angeles'-->
<!--  },-->
<!--  {-->
<!--    date: '2016-05-04',-->
<!--    name: 'Tom',-->
<!--    address: 'No. 189, Grove St, Los Angeles'-->
<!--  },-->
<!--  {-->
<!--    date: '2016-05-01',-->
<!--    name: 'Tom',-->
<!--    address: 'No. 189, Grove St, Los Angeles'-->
<!--  }-->
<!--]-->
<!--</script>-->

<!--<template>-->
<!--  <div class="organization">-->
<!--    <div style="position: absolute; width: 100%">-->
<!--      <img src="../../assets/images/organizationpage.png" width="100%" height="300" />-->
<!--    </div>-->
<!--    <div class="banner">-->
<!--      <div class="top">-->
<!--        <span style="margin-left: 30px; margin-right: 20px; color: #235db6 !important">-->
<!--          <router-link to="" class="active">执业机构名称</router-link>-->
<!--        </span>-->

<!--        <span>|</span>-->
<!--        <span style="margin-left: 20px; margin-right: 20px; color: #235db6 !important">-->
<!--          <router-link to="" class="active">专业机构名称</router-link></span-->
<!--        >-->
<!--      </div>-->
<!--      <div class="body">-->
<!--        <el-table :data="tableData" style="width: 100%" :row-class-name="tableRowClassName">-->
<!--          <el-table-column prop="date" label="商品名称" width="180" />-->
<!--          <el-table-column prop="name" label="挂牌代码" width="180" />-->
<!--          <el-table-column prop="address" label="机构名称" />-->
<!--          <el-table-column prop="address" label="机构联系电话" />-->
<!--        </el-table>-->
<!--      </div>-->
<!--    </div>-->
<!--    <el-pagination background layout="prev, pager, next" :total="1000" class="page" />-->
<!--  </div>-->

<!--  &lt;!&ndash;  <div><router-view></router-view></div>&ndash;&gt;-->
<!--</template>-->

<!--<style>-->
<!--.page {-->
<!--  position: absolute;-->
<!--  margin-top: 654px;-->
<!--  left: 50%;-->
<!--  margin-left: -178px;-->
<!--}-->
<!--.active {-->
<!--  color: #165dff;-->
<!--}-->
<!--.el-table .warning-row {-->
<!--  &#45;&#45;el-table-tr-bg-color: var(&#45;&#45;el-color-warning-light-9);-->
<!--}-->

<!--.el-table .success-row {-->
<!--  &#45;&#45;el-table-tr-bg-color: var(&#45;&#45;el-color-success-light-9);-->
<!--}-->

<!--.body {-->
<!--  margin-left: 30px;-->
<!--  margin-right: 30px;-->
<!--  width: 100%;-->
<!--}-->

<!--.top {-->
<!--  font-size: 20px;-->
<!--  line-height: 50px;-->
<!--}-->

<!--.organization {-->
<!--  overflow: hidden;-->
<!--  width: 100%;-->
<!--  height: 1100px;-->
<!--  position: relative;-->
<!--}-->

<!--.banner {-->
<!--  left: 50%;-->
<!--  margin-left: -450px;-->
<!--  margin-top: 250px;-->
<!--  position: absolute;-->
<!--  z-index: 999;-->

<!--  width: 1000px;-->
<!--  height: 900px;-->
<!--}-->
<!--</style>-->
