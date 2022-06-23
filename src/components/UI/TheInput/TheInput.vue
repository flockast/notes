<script setup lang="ts">
import { nanoid } from "nanoid";

defineProps({
  modelValue: {
    type: String,
    required: true
  },
  label: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'text'
  },
})

const emit = defineEmits(['update:modelValue', 'focus', 'blur', 'enter'])

const uid = nanoid()

const handleInput = (e: Event) => {
  const target = e.target as HTMLTextAreaElement
  emit('update:modelValue', target.value)
}

const handleFocus = () => {
  emit('focus')
}

const handleBlur = () => {
  emit('blur')
}

const handleKeyupEnter = () => {
  emit('enter')
}
</script>

<template>
  <div class="the-input">
    <label
      v-if="label"
      class="the-input__label"
      :for="uid"
    >
      {{ label }}:
    </label>
    <input
      :type="type"
      :id="uid"
      :value="modelValue"
      :placeholder="placeholder"
      @input="handleInput"
      @focus="handleFocus"
      @blur="handleBlur"
      @keyup.enter="handleKeyupEnter"
    >
  </div>
</template>

<style lang="scss">
@import "the-input";
</style>