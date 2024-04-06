import { createApp } from 'vue'

import App from '@/App.vue'

// 引入element-plus插件和样式
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import 'virtual:svg-icons-register'

const app = createApp(App)

// 安装element-plus插件
app.use(ElementPlus)

app.mount('#app')
