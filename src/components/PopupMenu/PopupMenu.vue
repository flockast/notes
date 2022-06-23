<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch } from 'vue'
import { RouterLink } from 'vue-router'
import ScrollLock from '@/utils/scroll.lock'

import mainMenu from '@/data/main.menu'

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['update:modelValue'])

watch(
  () => props.modelValue,
  () => {
    update()
  }
)

const wrapperIsOpened = ref(false)
const windowIsOpened = ref(false)

const update = () => {
  if (props.modelValue) {
    openWrapper()
    ScrollLock.disableBodyScroll()
  } else {
    closeWindow()
    ScrollLock.enableBodyScroll()
  }
}

const openWindow = () => {
  windowIsOpened.value = true
}

const closeWindow = () => {
  windowIsOpened.value = false
}

const openWrapper = () => {
  wrapperIsOpened.value = true
}

const closeWrapper = () => {
  wrapperIsOpened.value = false
}

const close = () => {
  emit('update:modelValue', false)
}

const handleKeypress = (e: KeyboardEvent) => {
  if (e.code === 'Escape') {
    closeWindow()
  }
}

const clickOutside = () => {
  closeWindow()
}

const handleClickOnMenuItem = () => {
  closeWindow()
}

const addEvents = () => {
  document.addEventListener('keydown', handleKeypress)
}

const removeEvents = () => {
  document.removeEventListener('keydown', handleKeypress)
}

onMounted(() => {
  update()
  addEvents()
})

onUnmounted(() => {
  removeEvents()
})
</script>

<template>
  <transition
    name="fade"
    @after-enter="openWindow"
    @after-leave="close"
  >
    <div
      class="popup-menu"
      v-if="wrapperIsOpened"
      @click.prevent="clickOutside"
    >
      <transition
        name="slide"
        @after-leave="closeWrapper"
      >
        <div
          v-if="windowIsOpened"
          class="popup-menu__window"
          @click.stop
        >
          <nav class="popup-menu__nav">
            <ul class="popup-menu__list">
              <li
                v-for="(item, index) in mainMenu"
                :key="index"
              >
                <RouterLink
                  :to="item.to"
                  @click.prevent="handleClickOnMenuItem"
                >
                  {{ item.name }}
                </RouterLink>
              </li>
            </ul>
          </nav>
        </div>
      </transition>
    </div>
  </transition>
</template>

<style lang="scss">
@import "popup-menu";
</style>