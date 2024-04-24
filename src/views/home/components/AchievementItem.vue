<script setup>
defineProps({
  item: Object
})
</script>

<template>
  <div class="achievement">
    <div class="content">
      <AnimatedNumber
        :from="0"
        :to="item.number"
        :decimal-digits="2"
        :duration="3000"
        class="size"
      />
      <p>{{ item.detail }}</p>
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
.achievement:hover {
  color: white;
  background-color: rgb(0, 113, 193);
}
</style>
