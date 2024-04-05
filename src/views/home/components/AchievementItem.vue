<script setup></script>

<template>
  <div class="achievement">
    <div class="content">
      <AnimatedNumber
        :from="0"
        :to="192.15"
        :decimal-digits="2"
        :duration="3000"
        class="size"
      />
      <p>2023年累计成交金额/亿元</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.achievement {
  float: left;
  margin-right: 50px;
  width: 150px;
  height: 150px;
  border-radius: 20px;
  align-items: center;
  color: #606266;
}
.size {
  font-weight: bold;
  font-size: 25px;
}
.content {
  margin-top: 25px;
  text-align: center;
}
</style>
