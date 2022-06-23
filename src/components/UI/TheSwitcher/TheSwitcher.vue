<script setup lang="ts">
const props = defineProps<{
  modelValue: boolean
}>()

const emit = defineEmits(['update:modelValue'])

const handleClick = () => {
  emit('update:modelValue', !props.modelValue)
}
</script>

<template>
  <button
    class="the-switcher"
    :class="modelValue ? 'is-active' : ''"
    @click.prevent="handleClick"
  >
    <span></span>
  </button>
</template>

<style lang="scss">
@import "the-switcher";
</style>