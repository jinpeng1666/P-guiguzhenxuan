<template>
  <div class="login_container">
    <el-row align="middle" style="width: 100%; height: 100%">
      <el-col style="text-align: center">
        <el-form
          :model="formData"
          label-width="auto"
          style="max-width: 450px; margin: 0 auto"
        >
          <el-form-item label="账号" class="userForm">
            <el-input v-model="formData.username" />
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="formData.password" />
          </el-form-item>
        </el-form>
        <el-button round size="large" class="login">登录</el-button>
        <el-button round size="large" class="register">注册</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

let formData = ref({
  username: '',
  password: '',
})
</script>

<style scoped lang="scss">
.login_container {
  width: 100%;
  height: 100vh;
  background: url('@/assets/images/background.png') no-repeat;
  background-size: cover;
  background-position: center;
}

// 登录按钮
.login {
  background-color: #994758;
  border-color: #994758;
  color: white;
  font-weight: 700;
  font-size: large;
  &:hover {
    background-color: #f0a9aa;
  }
}

// 注册按钮
.register {
  background-color: #c29893;
  border-color: #c29893;
  color: white;
  font-weight: 700;
  font-size: large;
  &:hover {
    background-color: #886462;
  }
}

// 表单
::v-deep .el-form-item__label {
  color: white;
  font-weight: 700;
  font-size: large;
}
</style>
