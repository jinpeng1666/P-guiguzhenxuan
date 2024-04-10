import { createRouter, createWebHashHistory } from 'vue-router'
import { constantRoute } from './routes'

// 引入nprogress
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'

// 引入user仓库
import useUserStore from '@/store/modules/user'

const whiteList = ['/login', '/404']

// 创建路由
const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoute,
  scrollBehavior() {
    return {
      left: 0,
      top: 0,
    }
  },
})

// 全局前置路由守卫
router.beforeEach((to, from, next) => {
  const userStore = useUserStore()
  nprogress.start()
  if (userStore.token) {
    if (to.path === '/login') {
      next('/')
      nprogress.done()
    } else {
      next()
    }
  } else {
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next('/login')
      nprogress.done()
    }
  }
})

// 全局后置路由守卫
router.afterEach(() => {
  nprogress.done()
})
export default router
