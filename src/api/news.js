// 分页文章查询
// export function selectContent() {
//   return instance({
//     url: '/portal/article/selectArticlePage',
//     method: 'GET'
//   })
// }

// export const updateNews = () => {
//   return instance.get('/portal/article/selectArticlePage', {
//     params: {
//       articleFunctionTag: '1',
//       articleStatus: 2,
//       pageNum: 2,
//       pageSize: 3
//     }
//   })
// }
import httpInstance from '@/utils/request'

export const getNewsDetailAPI = (id) => {
  return httpInstance.get('/portal/article/selectArticleById', {
    params: {
      id
    }
  })
}

export const getNewsAPI = (pageNum) => {
  return httpInstance.get('/portal/article/selectArticlePage', {
    params: {
      pageNum,
      pageSize: 6,
      articleStatus: 1,
      articleFuncTag: '实时新闻'
    }
  })
}
