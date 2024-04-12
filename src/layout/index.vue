<template>
  <div class="common-layout">
    <el-container style="height: 100%">
      <el-aside width="200px">左侧菜单</el-aside>
      <el-container style="height: 100%">
        <el-header height="30px">头部内容</el-header>
        <el-main>主要内容</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.common-layout {
  width: 100%;
  height: 100vh;
}
</style>
