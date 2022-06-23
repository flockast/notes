<script setup lang="ts">
import { computed } from 'vue'
import { useSettingsStore } from '@/stores/settings'

const settings = useSettingsStore()

const themes = {
  dark: 'dark',
  default: 'default'
}

const switcherIsActive = computed(() => settings.currentTheme === 'dark')

const changeTheme = (newTheme: string) => {
  settings.updateTheme(newTheme)
}

const handleClickOnSwitch = () => {
  if (settings.currentTheme === themes.dark) {
    changeTheme(themes.default)
  } else {
    changeTheme(themes.dark)
  }
}
</script>

<template>
  <button
    class="theme-switcher"
    :class="switcherIsActive ? 'is-active' : ''"
    @click.prevent="handleClickOnSwitch"
  >
    <span></span>
  </button>
</template>

<style lang="scss">
@import "./theme-switcher";
</style>