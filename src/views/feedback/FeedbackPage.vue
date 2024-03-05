<script setup>
import { reactive } from 'vue'

// do not use same name with ref
const form = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: ''
})

const onSubmit = () => {
  console.log('submit!')
}
</script>

<template>
  <div class="banner">
    <div class="feedbackHead"></div>
    <div class="feedbackHead1"></div>
    <div class="feedbackFoot">
      <h1>意见提交</h1>
      <div class="feedbackHeadInner" style="overflow: hidden">
        <div style="margin-top: 200px; margin-left: 200px">
          <el-form :model="form" label-width="auto" style="max-width: 600px">
            <el-form-item label="Activity name">
              <el-input v-model="form.name" />
            </el-form-item>
            <el-form-item label="Activity zone">
              <el-select
                v-model="form.region"
                placeholder="please select your zone"
              >
                <el-option label="Zone one" value="shanghai" />
                <el-option label="Zone two" value="beijing" />
              </el-select>
            </el-form-item>
            <el-form-item label="Activity time">
              <el-col :span="11">
                <el-date-picker
                  v-model="form.date1"
                  type="date"
                  placeholder="Pick a date"
                  style="width: 100%"
                />
              </el-col>
              <el-col :span="2" class="text-center">
                <span class="text-gray-500">-</span>
              </el-col>
              <el-col :span="11">
                <el-time-picker
                  v-model="form.date2"
                  placeholder="Pick a time"
                  style="width: 100%"
                />
              </el-col>
            </el-form-item>
            <el-form-item label="Instant delivery">
              <el-switch v-model="form.delivery" />
            </el-form-item>
            <el-form-item label="Activity type">
              <el-checkbox-group v-model="form.type">
                <el-checkbox value="Online activities" name="type">
                  Online activities
                </el-checkbox>
                <el-checkbox value="Promotion activities" name="type">
                  Promotion activities
                </el-checkbox>
                <el-checkbox value="Offline activities" name="type">
                  Offline activities
                </el-checkbox>
                <el-checkbox value="Simple brand exposure" name="type">
                  Simple brand exposure
                </el-checkbox>
              </el-checkbox-group>
            </el-form-item>
            <el-form-item label="Resources">
              <el-radio-group v-model="form.resource">
                <el-radio value="Sponsor">Sponsor</el-radio>
                <el-radio value="Venue">Venue</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="Activity form">
              <el-input v-model="form.desc" type="textarea" />
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">Create</el-button>
              <el-button>Cancel</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
  <div>
    <!--    <router-view></router-view>-->
  </div>
</template>

<style scoped>
.banner {
  position: relative;
  width: 100%;
  height: 1200px;
}
.feedbackFoot {
  position: absolute;
  z-index: 999;
  margin-top: 170px;
  left: 50%;
  margin-left: -500px;
  width: 1000px;
  height: 900px;

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
  height: 800px;
  background-color: #faf2f2;
}
</style>
