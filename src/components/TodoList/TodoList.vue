<script setup lang="ts">
import type { ITodoItems } from '@/types/todos.type'
import TodoItem from '@/components/TodoItem/TodoItem.vue'

defineProps<{
  todos?: ITodoItems
}>()
</script>

<template>
  <transition-group
    class="todo-list"
    name="list-complete"
    tag="ul"
  >
    <li
      v-for="todo in todos"
      :key="todo.id"
      class="todo-list__item"
    >
      <TodoItem
        :todo="todo"
      />
    </li>
  </transition-group>
</template>

<style lang="scss">
@import "todo-list";
</style>
