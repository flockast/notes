<script setup lang="ts">
import { nanoid } from 'nanoid'

defineProps({
  modelValue: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  },
  placeholder: {
    type: String,
    required: true
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
  <div class="the-textarea">
    <label
      class="the-textarea__label"
      :for="uid"
    >
      {{ label }}:
    </label>
    <textarea
      :id="uid"
      :placeholder="placeholder"
      :value="modelValue"
      @input="handleInput"
      @focus="handleFocus"
      @blur="handleBlur"
      @keyup.enter.exact.prevent="handleKeyupEnter"
      @keyup.shift.enter.exact.prevent
    ></textarea>
  </div>
</template>

<style lang="scss">
@import "the-textarea";
</style>
