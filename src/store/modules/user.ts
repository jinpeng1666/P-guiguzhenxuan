import { defineStore } from 'pinia'
// 导入登陆api
import { reqLogin } from '@/api/user'
import type { loginForm } from '@/api/user/type'
// 导入js-cookie
import { getToken, setToken } from '@/utils/auth'

const useUserStore = defineStore('User', {
  state: () => {
    return {
      token: getToken(),
    }
  },
  actions: {
    async userLogin(data: loginForm) {
      const result: any = await reqLogin(data)
      if (result.code == 200) {
        this.token = result.data.token
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
