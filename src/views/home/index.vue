<template>
  <div>
    <h1>我是home路由</h1>
    <el-button round size="large" class="login" @click="login">登录</el-button>
  </div>
</template>

<script setup lang="ts">
import useUserStore from '@/store/modules/user'
let userStore = useUserStore()

import { reactive } from 'vue'
let formData = reactive({
  username: 'admin',
  password: '111111',
})

import { ElNotification } from 'element-plus'

import { useRouter } from 'vue-router'
let $router = useRouter()

let login = async () => {
  try {
    console.log(111)
    await userStore.userLogin(formData)
    $router.push('/')
  } catch (error) {
    console.log('请求失败')
    ElNotification({
      type: 'error',
      message: (error as Error).message,
    })
  }
}
</script>

<style scoped></style>
