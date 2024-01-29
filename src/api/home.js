import httpInstance from '@/utils/request'

export const getBannerAPI = () => {
  return httpInstance.get('/portal/system/selectSystemPage', {
    params: {
      pageNum: 5,
      pageSize: 5,
      systemFunctionTag: '轮播图',
      systemResourceTag: '图片',
      systemStatus: 0
    }
  })
}
