<template>
  <div class="tabbar">
    <div class="tabbar_left">
      <el-icon style="margin-right: 5px" @click="changeIsCollapse">
        <Expand v-if="!settingStore.isCollapse" />
        <Fold v-else />
      </el-icon>
      <!-- 左侧面包屑 -->
      <el-breadcrumb separator-icon="ArrowRight">
        <el-breadcrumb-item>
          {{ $route.matched[1].meta.title }}
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="tabbar_right">
      <el-button
        type="primary"
        size="small"
        icon="Refresh"
        circle
        @click="changeRefsh"
      ></el-button>
      <el-button
        type="primary"
        size="small"
        icon="FullScreen"
        circle
        @click="fullScreen"
      ></el-button>
      <el-button type="primary" size="small" icon="Setting" circle></el-button>
      <img
        :src="userStore.avatar"
        style="width: 20px; height: 20px; margin: 0 10px"
      />
      <!-- 下拉菜单 -->
      <el-dropdown>
        <span class="el-dropdown-link">
          {{ userStore.userName }}
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup lang="ts">
// 引入setting仓库
import useSettingStore from '@/store/modules/setting.ts'
const settingStore = useSettingStore()

// 引入user仓库
import useUserStore from '@/store/modules/user'
const userStore = useUserStore()

// 点击改变是否左侧菜单折叠
const changeIsCollapse = () => {
  settingStore.isCollapse = !settingStore.isCollapse
}
// 获取路由信息和路由器
import { useRoute, useRouter } from 'vue-router'
const $route = useRoute()
const $router = useRouter()

// 点击刷新
const changeRefsh = () => {
  settingStore.refsh = !settingStore.refsh
}

// 点击全屏
const fullScreen = () => {
  let isFull = document.fullscreenElement
  if (!isFull) {
    document.documentElement.requestFullscreen()
  } else {
    document.exitFullscreen()
  }
}

// 点击退出登录
const logout = () => {
  userStore.logout()
  $router.push('/login')
}
</script>

<style scoped lang="scss">
.tabbar {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  .tabbar_left {
    display: flex;
    align-items: center;
    margin-left: 10px;
    transition: width 0.3s;
  }

  .tabbar_right {
    display: flex;
    align-items: center;
  }
}
// 设置面包屑的字体颜色
.el-breadcrumb__inner {
  color: #000;
}
</style>
