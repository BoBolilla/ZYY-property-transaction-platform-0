import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getNewsAPI } from '@/api/news.js'

export const useNewsStore = defineStore(
  'news',
  () => {
    const currentNews = ref([])
    const getCurrentNews = async () => {
      const res = await getNewsAPI()
      // this.articleFunctionTag,
      // this.articleStatus,
      // this.pageNum,
      // this.pageSize
      //console.log(res.data.data.list)
      currentNews.value = res.data.data.list
      console.log(currentNews.value)
    }
    return {
      currentNews,
      getCurrentNews
    }
  },
  {
    persist: true
  }
)
