import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getHotNewsAPI, getImportNewsAPI, getNewsAPI } from '@/api/news.js'

export const useNewsStore = defineStore(
  'news',
  () => {
    const currentNewsList = ref([])
    const getCurrentNews = async () => {
      const res = await getNewsAPI()
      // this.articleFunctionTag,
      // this.articleStatus,
      // this.pageNum,
      // this.pageSize
      //console.log(res.data.data.list)
      currentNewsList.value = res.data.data.list
      console.log(currentNewsList.value)
    }
    const currentHotNewsList = ref([])
    const getHotCurrentNews = async () => {
      const res = await getHotNewsAPI()
      currentHotNewsList.value = res.data.data.list
      console.log(currentHotNewsList.value, 123456)
    }
    const currentImportNewsList = ref([])
    const getImportCurrentNews = async () => {
      const res = await getImportNewsAPI()
      currentImportNewsList.value = res.data.data.list
      console.log(currentImportNewsList.value, 123456)
    }
    return {
      currentNewsList,
      getCurrentNews,
      currentHotNewsList,
      getHotCurrentNews,
      currentImportNewsList,
      getImportCurrentNews
    }
  },
  {
    persist: true
  }
)
