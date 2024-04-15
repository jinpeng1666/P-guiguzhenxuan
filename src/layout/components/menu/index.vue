<template>
  <div>
    <el-scrollbar class="scrollbar">
      <!-- element菜单 -->
      <el-menu>
        <el-menu-item>首页</el-menu-item>
        <el-menu-item>盈利</el-menu-item>
        <el-sub-menu>
          <template #title>员工详情</template>
          <el-menu-item>张三</el-menu-item>
          <el-menu-item>李四</el-menu-item>
        </el-sub-menu>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.scrollbar {
  width: 100%;
  height: calc(100vh - 30px);
}
</style>
