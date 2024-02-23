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

export const getNewsAPI = () => {
  return httpInstance.get('/portal/article/selectArticlePage', {
    params: {
      pageNum: 1,
      articleStatus: 1,
      pageSize: 6,
      articleFunctionTag: '实时新闻'
    }
  })
}
