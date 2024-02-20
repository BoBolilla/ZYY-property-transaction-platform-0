<script setup>
import homePanel from './HomePanel.vue'
</script>

<template>
  <div>
    <homePanel title="机构信息">
      <template #main>
        <el-row :gutter="30">
          <el-col :span="12"
            ><div class="organizationInfo">
              <h2 class="title">中医药产权交易平台有限公司</h2>
              <div class="content">
                上海新工联资产经营有限公司是一家专门从事国有企业改组改制、产权交易、为企业提供政策咨询、资产经营管理、投资咨询策划等服务的专业机构。
                公司奉行“诚挚、公平、守信”的宗旨，充分利用自身的资源和优势，挖掘产权交易业务的深度和广度，为企业提供国内外投资信息以及与政府有关部门的关系协调等服务。
                为企业的改革、改制以及资产处置提供前期的政策、法律咨询；策划、包装，方案制定；中期的产权交易挂牌、推介、制作合同；后期的工商、房地产权证变更等一条龙服务。
              </div>
            </div></el-col
          >
          <el-col :span="12">
            <img src="@/assets/images/organization.png" alt="" />
          </el-col>
        </el-row>
      </template>
    </homePanel>
  </div>
</template>

<style scoped lang="scss">
h2 {
  text-align: center;
}

.content {
  text-indent: 2em;
  text-align: justify;
  line-height: 2;
}
</style>
