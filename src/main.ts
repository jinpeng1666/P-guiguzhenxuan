import { createApp } from 'vue'

import App from '@/App.vue'

// 引入element-plus插件和样式
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 引入全局样式
import '@/styles/index.scss'

import 'virtual:svg-icons-register'

// 引入路由
import router from './router'

const app = createApp(App)

// 安装element-plus插件
app.use(ElementPlus)

// 注册路由
app.use(router)

app.mount('#app')
