import { createApp } from 'vue'
import pinia from '@/stores/index'
import App from './App.vue'
import router from './router'
import 'aos/dist/aos.css'
import '@/styles/common.scss'
import 'animate.css'
import { vueAnimateCss } from 'animation-vue'
import AnimatedNumber from 'vue-3-animated-number'
const app = createApp(App)
app.use(AnimatedNumber)
app.use(pinia)
app.use(router)
app.use(vueAnimateCss())
app.mount('#app')
