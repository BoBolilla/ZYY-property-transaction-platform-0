import httpInstance from '@/utils/request'

export const labelSearchAPI = (startTime,endTime,minPrice,maxPrice,priceSort,projectDomain,propertyCategory,tradeMode) => {
    return httpInstance.get('/trade/transfer/getUserPropertyReleaseInfoListByMultiLabel', {
      params: {
        pageNum: 1,
        pageSize: 6,
        startTime,endTime,minPrice,maxPrice,priceSort,projectDomain,propertyCategory,tradeMode
      }
    })
  }