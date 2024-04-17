<template>
  <div class="logo">
    <el-row class="height" v-if="!settingStore.isCollapse">
      <el-col :span="4" class="icon">
        <svg style="width: 30px; height: 30px">
          <use xlink:href="#icon-logo"></use>
        </svg>
      </el-col>
      <el-col class="title" :span="20">
        {{ setting.title }}
      </el-col>
    </el-row>
    <svg style="width: 30px; height: 30px" v-else>
      <use xlink:href="#icon-logo"></use>
    </svg>
  </div>
</template>

<script setup lang="ts">
import setting from '@/setting'

// 引入setting仓库
import useSettingStore from '@/store/modules/setting.ts'
const settingStore = useSettingStore()
</script>

<style scoped lang="scss">
@import '@/styles/variable.scss';

.logo {
  height: $logo-height;
  background-color: #a3b18a;
}

.icon {
  height: $logo-height;
  display: flex;
  align-items: center;
}

.title {
  height: $logo-height;
  font-weight: 700;
  font-size: 20px;
  line-height: $logo-height;
}

.height {
  height: $logo-height;
}
</style>
