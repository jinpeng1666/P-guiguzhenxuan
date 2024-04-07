<template>
  <div>
    <h4>我是根组件</h4>
    <el-button type="primary"></el-button>
    <svg>
      <use xlink:href="#icon-love"></use>
    </svg>
  </div>
</template>

<script setup lang="ts">
import request from '@/utils/request'
import { onMounted } from 'vue'

onMounted(() => {
  request({
    url: '/user/login',
    method: 'post',
    data: {
      username: 'admin',
      password: '111111',
    },
  }).then((res: any) => {
    console.log(res)
  })
})
</script>

<style></style>
