<script setup lang="ts">
import type { PropType } from 'vue'
import type { ISelectOption } from '@/types/select.type'
import { ref, computed } from 'vue'
import ChevronDownIcon from '@/assets/images/icons/chevron-down.svg'

const props = defineProps({
  modelValue: {
    type: String,
    required: true
  },
  options: {
    type: Array as PropType<ISelectOption[]>,
    required: true
  },
  label: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['update:modelValue'])

const dropDownIsActive = ref(false)

const currentOption = computed(() => {
  return props.options.find(option => option.value === props.modelValue)
})

const currentFieldText = computed(() => {
  return currentOption.value ? currentOption.value.name : ''
})

const open = () => {
  dropDownIsActive.value = true
  addEvents()
}

const close = () => {
  dropDownIsActive.value = false
  removeEvents()
}

const handleClickOnField = () => {
  if (dropDownIsActive.value) {
    close()
  } else {
    open()
  }
}

const updateValue = (newValue: string) => {
  emit('update:modelValue', newValue)
}

const handleClickOnOption = (option: ISelectOption) => {
  updateValue(option.value)
  close()
}

const clickOutside = () => {
  close()
}

const handleKeypress = (e: KeyboardEvent) => {
  if (e.code === 'Escape') {
    close()
  }
}

const addEvents = () => {
  document.addEventListener('click', clickOutside)
  document.addEventListener('keydown', handleKeypress)
}

const removeEvents = () => {
  document.removeEventListener('click', clickOutside)
  document.removeEventListener('keydown', handleKeypress)
}
</script>

<template>
  <div
    class="the-select"
    :class="[
      dropDownIsActive ? 'is-active' : '',
      disabled ? 'is-disabled' : '',
    ]"
    @click.stop
  >
    <label class="the-select__label">
      {{ label }}:
    </label>
    <div class="the-select__box">
      <div
        @click.prevent="handleClickOnField"
        class="the-select__field"
      >
        <div class="the-select__field-value">
          {{ currentFieldText }}
        </div>
        <div class="the-select__field-icon">
          <ChevronDownIcon />
        </div>
      </div>
      <div
        v-if="dropDownIsActive"
        class="the-select__drop"
      >
        <div class="the-select__content">
          <div class="the-select__list">
            <div
              v-for="option in options"
              :key="option.value"
              class="the-select__option"
              :class="option.value === modelValue ? 'is-active' : ''"
              @click.prevent="handleClickOnOption(option)"
            >
              <span>{{ option.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "the-select";
</style>
