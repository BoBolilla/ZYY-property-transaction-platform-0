import { createApp } from 'vue'
import pinia from '@/stores/index'
import App from './App.vue'
import router from './router'
// import { getCategory } from '@/apis/testAPI.js'

// getCategory().then((res) => {
//   console.log(res)
// })

import '@/styles/common.scss'

const app = createApp(App)

app.use(pinia)
app.use(router)

app.mount('#app')
