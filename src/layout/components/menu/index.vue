<template>
  <div>
    <!-- element菜单 -->
    <el-menu router style="background-color: #a3b18a">
      <template v-for="item in menuList" :key="item.path">
        <!-- 没有子路由 -->
        <el-menu-item v-if="item.children.length <= 1" :index="item.path">
          {{ item.meta.title }}
        </el-menu-item>
        <!-- 有子路由 -->
        <el-sub-menu v-if="item.children.length > 1" :index="item.path">
          <template #title>{{ item.meta.title }}</template>
          <Menu :menuList="item.children"></Menu>
        </el-sub-menu>
      </template>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
defineProps(['menuList'])
</script>

<script lang="ts">
export default {
  name: 'Menu',
}
</script>

<style scoped lang="scss">
.el-menu {
  border-right: none;
}

// 被选中时的样式
.is-active {
  color: black;
  background-color: #dad7cd;
}
</style>
