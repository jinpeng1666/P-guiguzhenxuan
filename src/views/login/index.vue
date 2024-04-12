<template>
  <div class="login_container">
    <el-row align="middle" style="width: 100%; height: 100%">
      <el-col style="text-align: center">
        <el-form
          ref="form"
          :model="formData"
          label-width="auto"
          style="max-width: 450px; margin: 0 auto"
          :rules="loginRules"
        >
          <el-form-item label="账号" prop="username">
            <el-input
              v-model="formData.username"
              placeholder="请输入账号"
              @keydown.enter="login"
            />
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input
              v-model="formData.password"
              type="password"
              show-password
              @keydown.enter="login"
            />
          </el-form-item>
          <el-form-item>
            <!-- <el-button style="margin: 0 auto"></el-button> -->
            <div style="margin: 0 auto">
              <el-button round size="large" class="login" @click="login">
                登录
              </el-button>
              <el-button round size="large" class="register">注册</el-button>
            </div>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { ElNotification } from 'element-plus'

// 引入获取当前时间的函数
import { getTime } from '@/utils/time'

// 获取路由器
let $router = useRouter()

// 表单数据
let formData = reactive({
  username: '',
  password: '',
})

// 表单输入规则
let loginRules = {
  username: [
    {
      required: true,
      message: '请输入账号',
      trigger: 'blur',
    },
  ],
  password: [
    {
      required: true,
      message: '请输入密码',
      trigger: 'blur',
    },
    {
      min: 6,
      max: 16,
      message: '密码长度在6-16位之间',
      trigger: 'blur',
    },
  ],
}

// 引入仓库
import useUserStore from '@/store/modules/user'
let userStore = useUserStore()

const form = ref()

// 登录按钮回调
let login = () => {
  form.value.validate(async (isOK: boolean) => {
    if (isOK) {
      try {
        await userStore.userLogin(formData)
        $router.push('/')
        // 登录成功提示消息
        ElNotification({
          type: 'success',
          message: '欢迎回来',
          title: `HI,${getTime()}好`,
        })
      } catch (error) {
        // 登录失败提示消息
        ElNotification({
          type: 'error',
          message: (error as Error).message,
        })
      }
    }
  })
}
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
