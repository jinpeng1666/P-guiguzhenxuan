import { defineStore } from 'pinia'
// 导入登陆api
import { reqLogin } from '@/api/user'
// 引入数据类型
import type { loginForm, loginResponseData } from '@/api/user/type'
import type { UserState } from './types/type'
// 导入js-cookie
import { getToken, setToken } from '@/utils/auth'

const useUserStore = defineStore('User', {
  state: (): UserState => {
    return {
      token: getToken() as string,
    }
  },
  actions: {
    async userLogin(data: loginForm) {
      const result: loginResponseData = await reqLogin(data)
      if (result.code == 200) {
        this.token = result.data.token as string
        setToken(result.data.token)
        return 'ok'
      } else {
        return Promise.reject(new Error(result.data.message))
      }
    },
  },
  getters: {},
})

export default useUserStore
