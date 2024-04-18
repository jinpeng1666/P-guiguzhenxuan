<template>
  <router-view v-if="flag"></router-view>
</template>

<script setup lang="ts">
// 引入setting仓库
import useSettingStore from '@/store/modules/setting.ts'
const settingStore = useSettingStore()

import { watch, ref, nextTick } from 'vue'
let flag = ref(true)
watch(
  () => settingStore.refsh,
  () => {
    flag.value = false
    nextTick(() => {
      flag.value = true
    })
  },
)
</script>
<style scoped lang="scss"></style>
