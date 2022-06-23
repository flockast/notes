import { defineStore } from 'pinia'
import * as core from '@vueuse/core'

export const useSettingsStore = defineStore({
  id: 'settings',

  state: () => ({
    theme: core.useLocalStorage('theme', 'default')
  }),

  getters: {
    currentTheme: (state) => state.theme
  },

  actions: {
    updateTheme(newTheme: string) {
      document.body.setAttribute('data-theme', newTheme)
      this.theme = newTheme
    }
  }
})
