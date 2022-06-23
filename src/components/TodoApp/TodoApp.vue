<script setup lang="ts">
import { ref, computed } from 'vue'
import { useTodosStore } from '@/stores/todos'
import TodoList from '@/components/TodoList/TodoList.vue'
import filterOptions from '@/data/filter.options'
import sortingOptions from '@/data/sorting.options'

const todos = useTodosStore()

const newTodoTitle = ref('')
const search = ref('')
const filter = ref('all')
const sorting = ref('new')

const todoList = computed(() => todos.getList)

const searchedTodoList = computed(() => {
  return todoList.value.filter((item) => {
    const title = item.title.toLowerCase()
    const query = search.value.toLowerCase()
    return title.includes(query)
  })
})

const filteredAndSearchedTodoList = computed(() => {
  return searchedTodoList.value.filter((item) => {
    if (filter.value === 'completed') {
      return item.completed
    } else if (filter.value === 'no-completed') {
      return !item.completed
    }

    return true
  })
})

const sortedAndFilteredAndSearchedTodoList = computed(() => {
  if (sorting.value === 'new') {
    return [...filteredAndSearchedTodoList.value].reverse()
  } else if (sorting.value === 'completed') {
    return [...filteredAndSearchedTodoList.value]
      .reverse()
      .sort((a, b) => Number(b.completed) - Number(a.completed))
  } else if (sorting.value === 'no-completed') {
    return [...filteredAndSearchedTodoList.value]
      .reverse()
      .sort((a, b) => Number(a.completed) - Number(b.completed))
  }

  return filteredAndSearchedTodoList.value
})

const handleSubmitAdd = () => {
  if (!newTodoTitle.value.trim()) {
    return
  }

  todos.add(newTodoTitle.value)
  newTodoTitle.value = ''
}
</script>

<template>
  <div class="todo-app">
    <div class="todo-app__create">
      <form
        @submit.prevent="handleSubmitAdd"
        class="todo-app__add-form"
      >
        <TheTextarea
          v-model="newTodoTitle"
          :label="'Новое задание'"
          :placeholder="'Лечь спать в 21:00'"
          @enter="handleSubmitAdd"
        />
        <TheButton
          class="mt-4"
          type="submit"
        >
          Добавить новое задание
        </TheButton>
      </form>
    </div>
    <div class="todo-app__content">
      <div class="todo-app__header">
        <div class="todo-app__search">
          <TheInput
            v-model="search"
            :label="'Поиск'"
            :placeholder="'Где моя заметка'"
          />
        </div>
        <div class="todo-app__filter">
          <TheSelect
            v-model="filter"
            :options="filterOptions"
            :label="'Фильтр'"
          />
        </div>
        <div class="todo-app__sorting">
          <TheSelect
            v-model="sorting"
            :options="sortingOptions"
            :label="'Сортировка'"
          />
        </div>
      </div>
      <TodoList
        :todos="sortedAndFilteredAndSearchedTodoList"
      />
    </div>
  </div>
</template>

<style lang="scss">
@import "todo-app";
</style>