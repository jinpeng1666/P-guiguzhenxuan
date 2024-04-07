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
import { onMounted } from 'vue'
import { reqLogin } from './api/user'

onMounted(() => {
  reqLogin({ username: 'admin', password: '111111' })
})
</script>

<style></style>
