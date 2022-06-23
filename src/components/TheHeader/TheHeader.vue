<script setup lang="ts">
import { ref } from 'vue'
import MenuButtonIcon from '@/assets/images/icons/menu-button.svg'
import CancelIcon from '@/assets/images/icons/cancel.svg'
import PopupMenu from '@/components/PopupMenu/PopupMenu.vue'
import { useSettingsStore } from '@/stores/settings'

const settings = useSettingsStore()

const menuIsOpened = ref(false)
const switcher = ref(settings.currentTheme === 'dark')

const openMenu = () => {
  menuIsOpened.value = true
}

const closeMenu = () => {
  menuIsOpened.value = false
}

const updateTheme = (newTheme: string) => {
  settings.updateTheme(newTheme)
}

const handleClickOnButton = () => {
  if (menuIsOpened.value) {
    closeMenu()
  } else {
    openMenu()
  }
}

const handleUpdateSwitch = (newValue: boolean) => {
  const newTheme = newValue ? 'dark' : 'default'
  updateTheme(newTheme)
  switcher.value = newValue
}
</script>

<template>
  <div class="the-header">
    <div class="container">
      <div class="the-header__row">
        <RouterLink
          class="the-header__logo"
          :to="{name: 'home'}"
        >
          Testcaseapp
        </RouterLink>
        <div class="the-header__switcher">
          <TheSwitcher
            :model-value="switcher"
            @update:model-value="handleUpdateSwitch"
          />
        </div>
        <button
          class="the-header__menu-button"
          :class="menuIsOpened ? 'is-active' : ''"
          @click.prevent="handleClickOnButton"
        >
          <CancelIcon
            v-if="menuIsOpened"
          />
          <MenuButtonIcon
            v-else
          />
        </button>
        <PopupMenu
          v-model="menuIsOpened"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "./the-header";
</style>