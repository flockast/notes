<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useSettingsStore } from '@/stores/settings'
import TheHeader from '@/components/TheHeader/TheHeader.vue'
import TheFooter from '@/components/TheFooter/TheFooter.vue'

const settings = useSettingsStore()
</script>

<template>
  <div
    class="app"
    :data-theme="settings.currentTheme"
  >
    <TheHeader />
    <div class="app__content">
      <div class="container">
        <RouterView />
      </div>
    </div>
    <TheFooter />
  </div>
</template>
