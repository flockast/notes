import { defineStore } from 'pinia'
import { nanoid } from 'nanoid'
import type { ITodoItem, ITodoItems } from '@/types/todos.type'
import * as core from '@vueuse/core'
import todosInitial from '@/data/todos.initial'

const initialList: ITodoItems = todosInitial

export const useTodosStore = defineStore({
  id: 'todos',

  state: () => ({
    list: core.useLocalStorage('todos', initialList)
  }),

  getters: {
    getList: (state) => state.list
  },

  actions: {
    add(title: string) {
      this.list.push({
        id: nanoid(),
        title,
        completed: false
      })
    },
    remove(id: string) {
      const findIndex = this.list.findIndex((item) => item.id === id)

      if (findIndex !== -1) {
        this.list.splice(findIndex, 1)
      }
    },
    update(updatedItem: ITodoItem) {
      const findIndex = this.list.findIndex((item) => item.id === updatedItem.id)

      if (findIndex !== -1) {
        this.list.splice(findIndex, 1, updatedItem)
      }
    }
  }
})
