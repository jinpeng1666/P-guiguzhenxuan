export const constantRoute = [
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    name: 'login',
    meta: {
      isShow: false,
    },
  },
  {
    path: '/',
    component: () => import('@/layout/index.vue'),
    name: 'layout',
    redirect: '/home',
    children: [
      {
        path: '/home',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: '首页',
        },
        children: [],
      },
      {
        path: '/employee',
        component: () => import('@/views/employee/index.vue'),
        meta: {
          title: '员工',
        },
        children: [],
      },
      {
        path: '/department',
        component: () => import('@/views/department/index.vue'),
        meta: {
          title: '部门',
        },
        children: [],
      },
      {
        path: '/salary',
        component: () => import('@/views/salary/index.vue'),
        meta: {
          title: '薪资',
        },
        children: [],
      },
    ],
  },
  {
    path: '/404',
    component: () => import('@/views/404/index.vue'),
    name: '404',
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    name: 'Any',
  },
]
