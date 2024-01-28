import axios from 'axios'
import { ElMessage } from 'element-plus'

const baseURL = 'www.lxy521.top:8093'

const instance = axios.create({
  // TODO 1. 基础地址，超时时间
  baseURL,
  timeout: 10000
})

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    // TODO 2. 携带token
    return config
  },
  (err) => Promise.reject(err)
)

// 响应拦截器
instance.interceptors.response.use(
  // res 响应回来接收的数据
  (res) => {
    // TODO 4. 摘取核心响应数据
    if (res.data.code === 200) {
      return res
    }
    // TODO 3. 处理业务失败
    // 处理业务失败，给错误提示，抛出错误
    ElMessage.error(res.data.message || '服务异常')
    return Promise.reject(res.data)
  },
  (err) => {
    // TODO 5. 处理错误

    // 错误的特殊情况 => 只给提示
    ElMessage.error(err.data.message || '服务异常')
    return Promise.reject(err)
  }
)

export default instance
