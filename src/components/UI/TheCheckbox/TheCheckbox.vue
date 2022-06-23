<script setup lang="ts">
const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true
  },
})

const emit = defineEmits(['update:modelValue'])

const updateValue = (newValue: boolean) => {
  emit('update:modelValue', newValue)
}

const onClick = () => {
  updateValue(!props.modelValue)
}
</script>

<template>
  <div
    class="the-checkbox"
    :class="modelValue ? 'is-completed' : ''"
    @click="onClick"
  >
    <div class="the-checkbox__input">
      <input
        type="checkbox"
        :checked="modelValue"
      >
      <div class="the-checkbox__checkmark"></div>
    </div>
    <div class="the-checkbox__label">
      <slot />
    </div>
  </div>
</template>

<style lang="scss">
@import "the-checkbox";
</style>