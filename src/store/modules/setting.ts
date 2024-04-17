import { defineStore } from 'pinia'

const useSettingStore = defineStore('setting', {
  state: () => {
    return {
      isCollapse: false,
    }
  },
})

export default useSettingStore
