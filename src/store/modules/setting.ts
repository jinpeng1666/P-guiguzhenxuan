import { defineStore } from 'pinia'

const useSettingStore = defineStore('setting', {
  state: () => {
    return {
      // 菜单折叠
      isCollapse: false,
      // 刷新
      refsh: false,
    }
  },
})

export default useSettingStore
