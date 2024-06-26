import axios from 'axios'
import { ElMessage } from 'element-plus'

// 引入user仓库，包含token
import useUserStore from '@/store/modules/user.ts'

const request = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 5000,
})

// 请求拦截器
request.interceptors.request.use((config) => {
  const userStore = useUserStore()
  // 请求头带有token
  if (userStore.token) {
    config.headers.token = userStore.token
  }
  return config
})

// 响应拦截器
request.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    let message = ''
    const status = error.response.status
    switch (status) {
      case 401:
        message = 'TOKEN过期'
        break
      case 403:
        message = '无权访问'
        break
      case 404:
        message = '请求地址错误'
        break
      case 500:
        message = '服务器出现问题'
        break
      default:
        message = '网络出现问题'
    }
    ElMessage({
      type: 'error',
      message,
    })
    return Promise.reject(error)
  },
)

export default request
