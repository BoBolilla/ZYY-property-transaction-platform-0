import httpInstance from '@/utils/request'

export const getCategory = () => {
  return httpInstance.get('/portal/article/selectArticlePage', {
    params: {
      pageNum: 1,
      articleStatus: 1,
      pageSize: 5,
      articleFunctionTag: '公告'
    }
  })
}
