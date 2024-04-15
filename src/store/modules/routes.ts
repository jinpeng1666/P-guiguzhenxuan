import { defineStore } from 'pinia'

// 引入数据类型
import type { typeRoute } from './types/type.ts'

// 引入routes
import { constantRoute } from '@/router/routes'

const useRoutesStore = defineStore('routes', {
  state: (): typeRoute => {
    return {
      menuRoutes: constantRoute,
    }
  },
  actions: {},
  getters: {},
})

export default useRoutesStore
