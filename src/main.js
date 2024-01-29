import { createApp } from 'vue'
import pinia from '@/stores/index'
import App from './App.vue'
import router from './router'

import '@/styles/common.scss'

import { getCategory } from '@/api/testAPI'
getCategory().then((res) => {
  console.log(res)
})

const app = createApp(App)

app.use(pinia)
app.use(router)

app.mount('#app')
