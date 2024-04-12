<template>
  <div style="height: 30px; background-color: pink">
    <el-row style="height: 30px">
      <el-col :span="4" style="height: 30px">
        <svg style="width: 30px; height: 30px">
          <use xlink:href="#icon-logo"></use>
        </svg>
      </el-col>
      <el-col class="title" :span="20" style="height: 30px">
        {{ setting.title }}
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import setting from '@/setting'
</script>

<style scoped lang="scss">
.title {
  font-weight: 700;
  font-size: 25px;
}
</style>
