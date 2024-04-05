import httpInstance from '@/utils/request'

export const getBannerAPI = () => {
  return httpInstance.get('/portal/system/selectSystemPage', {
    params: {
      pageNum: 0,
      pageSize: 3,
      systemFuncTag: '轮播图',
      systemResTag: '图片',
      systemStatus: 1
    }
  })
}
export const getVideoAPI = () => {
  return httpInstance.get('/portal/system/selectSystemPage', {
    params: {
      pageNum: 0,
      pageSize: 4,
      systemFuncTag: '视频',
      systemResTag: '视频',
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
