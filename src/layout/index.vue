<template>
  <div class="common-layout">
    <el-container style="height: 100%">
      <!-- 左侧导航栏 -->
      <el-aside
        :class="{
          aside: !settingStore.isCollapse,
          collapseAside: settingStore.isCollapse,
        }"
        style="transition: all 0.3s"
      >
        <Logo></Logo>
        <el-scrollbar class="menuScrollbar">
          <Menu :menuList="menuList"></Menu>
        </el-scrollbar>
      </el-aside>
      <!-- 右侧 -->
      <el-container style="height: 100%">
        <!-- 右侧面包屑 -->
        <el-header class="right-header">
          <Tabbar></Tabbar>
        </el-header>
        <!-- 右侧展示内容区 -->
        <el-main style="background-color: #dad7cd">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import Logo from './components/logo/index.vue'
import Menu from './components/menu/index.vue'
import Tabbar from './components/tabbar/index.vue'

import { computed } from 'vue'

// 获取路由信息仓库
import useRoutesStore from '@/store/modules/routes'
const routesStore = useRoutesStore()

// 引入setting仓库
import useSettingStore from '@/store/modules/setting.ts'
const settingStore = useSettingStore()

// 获取需要在菜单中展示的路由
const menuList = computed(() => {
  return routesStore.menuRoutes.filter((route: any) => route.path === '/')[0]
    .children
})
</script>

<style scoped lang="scss">
@import '@/styles/variable.scss';

.common-layout {
  width: 100%;
  height: 100vh;
}

.aside {
  background-color: #a3b18a;
  width: $el-aside-width;
}

.collapseAside {
  background-color: #a3b18a;
  width: $el-aside-collapse-width;
}

.menuScrollbar {
  width: 100%;
  height: calc(100vh - $logo-height);
}

.right-header {
  height: $el-header-height;
  background-color: #a3b18a;
  padding: 0;
}
</style>
