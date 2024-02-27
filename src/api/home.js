import httpInstance from '@/utils/request'

export const getBannerAPI = () => {
  return httpInstance.get('/portal/system/selectSystemPage', {
    params: {
      pageNum: 0,
      pageSize: 6,
      systemFuncTag: '轮播图',
      systemResTag: '图片',
      systemStatus: 1
    }
  })
}

// export const getNewsAPI = () => {
//   return httpInstance.get('/portal/article/selectArticlePage', {
//     params: {
//       pageNum: 5,
//       pageSize: 5,
//       articleFunctionTag: '实时新闻',
//       articleStatus: 1
//     }
//   })
// }
