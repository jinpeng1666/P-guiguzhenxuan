<template>
  <div class="common-layout">
    <el-container style="height: 100%">
      <!-- 左侧导航栏 -->
      <el-aside width="200px">
        <Logo></Logo>
      </el-aside>
      <!-- 右侧 -->
      <el-container style="height: 100%">
        <!-- 右侧面包屑 -->
        <el-header height="30px">头部内容</el-header>
        <!-- 右侧展示内容区 -->
        <el-main>主要内容</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import Logo from './components/logo/index.vue'
</script>

<style scoped lang="scss">
.common-layout {
  width: 100%;
  height: 100vh;
}
</style>
