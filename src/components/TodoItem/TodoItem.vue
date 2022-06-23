<script setup lang="ts">
import { ref, nextTick } from 'vue'
import type { ITodoItem } from '@/types/todos.type'
import { useTodosStore } from '@/stores/todos'
import TrashIcon from '@/assets/images/icons/trash.svg'
import EditIcon from '@/assets/images/icons/edit.svg'

const props = defineProps<{
  todo: ITodoItem
}>()

const input = ref<HTMLDivElement>()
const newTitle = ref('')
const editable = ref(false)

const todos = useTodosStore()

const updateItem = (newItem: ITodoItem) => {
  todos.update({
    ...props.todo,
    ...newItem
  })
}

const handleClickOnItem = () => {
  updateItem({
    ...props.todo,
    completed: !props.todo.completed
  })
}

const handleClickOnRemove = () => {
  todos.remove(props.todo.id)
}

const startEdit = () => {
  editable.value = true
  nextTick(() => {
    if (input.value) {
      input.value.focus()
    }
  })
}

const stopEdit = () => {
  const updatedTitle = newTitle.value.trim()
  updateItem({
    ...props.todo,
    title: updatedTitle || props.todo.title
  })
  editable.value = false
}

const handleInput = (e: Event) => {
  const target = e.target as HTMLTextAreaElement
  newTitle.value = target.innerText
}

const handleClickOnEdit = () => {
  startEdit()
}

const handleBlur = () => {
  stopEdit()
}

const handleEnter = () => {
  stopEdit()
}

const handleEsc = () => {
  stopEdit()
}

const handleShiftEnter = () => {
  newTitle.value += '\n'
}
</script>

<template>
  <div
    class="todo-item"
    :class="todo.completed ? 'is-ready' : ''"
  >
    <div class="todo-item__checkbox">
      <TheCheckbox
        :model-value="todo.completed"
        @update:model-value="handleClickOnItem"
      />
    </div>
    <div
      ref="input"
      class="todo-item__content"
      :contenteditable="editable"
      @input="handleInput"
      @blur="handleBlur"
      @keyup.prevent.enter.exact="handleEnter"
      @keyup.prevent.shift.enter.exact="handleShiftEnter"
      @keyup.prevent.esc="handleEsc"
    >
      {{ todo.title }}
    </div>
    <div
      @click.stop
      class="todo-item__actions"
    >
      <ActionButton
        @click.prevent="handleClickOnEdit()"
      >
        <EditIcon />
      </ActionButton>
      <ActionButton
        @click.prevent="handleClickOnRemove()"
      >
        <TrashIcon />
      </ActionButton>
    </div>
  </div>
</template>

<style lang="scss">
@import "todo-item";
</style>