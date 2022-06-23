<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import InterBox from '@/components/InterBox/InterBox.vue'
import EditIcon from '@/assets/images/icons/edit.svg'
import TrashIcon from '@/assets/images/icons/trash.svg'

const items = ref([
  {
    title: 'Типография',
    to: '#typography',
    active: true
  },
  {
    title: 'Input',
    to: '#input',
    active: false
  },
  {
    title: 'Textarea',
    to: '#textarea',
    active: false
  },
  {
    title: 'Select',
    to: '#select',
    active: false
  },
  {
    title: 'Checkbox',
    to: '#checkbox',
    active: false
  },
  {
    title: 'Переключатель',
    to: '#switcher',
    active: false
  },
  {
    title: 'Button',
    to: '#button',
    active: false
  },
  {
    title: 'Actions Button',
    to: '#action_buttons',
    active: false
  }
])

const input = ref('')
const textarea = ref('')
const select = ref('cacao')
const selectOptions = ref([
  {
    name: 'Кофе',
    value: 'coffee'
  },
  {
    name: 'Чай',
    value: 'tea'
  },
  {
    name: 'Какао',
    value: 'cacao'
  },
  {
    name: 'Танцы',
    value: 'dance'
  }
])
const checkbox = ref(false)
const switcher = ref(false)

const handleScroll = () => {
  let findIndex = -1

  items.value.forEach((item, index) => {
    const element = document.querySelector(item.to)
    if (element) {
      const viewportOffset = element.getBoundingClientRect();
      const top = viewportOffset.top
      if (top > 0 && top < 100) {
        findIndex = index
      }
    }
  })

  if (findIndex !== -1) {
    items.value.forEach((item) => {
      item.active = false
    })
    items.value[findIndex].active = true
  }
}

const handleClickOnItem = (to: string) => {
  const element: HTMLElement | null = document.querySelector(to)
  if (element) {
    window.scroll({
      top: element.offsetTop - 80,
      behavior: 'smooth'
    })
  }
}

onMounted(() => {
  document.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  document.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div class="inter-app">
    <div class="inter-app__sidebar">
      <aside class="inter-app-sidebar">
        <ul class="inter-app-sidebar__list">
          <li
            v-for="(item, index) in items"
            :key="index"
            :class="item.active ? 'is-active' : ''"
          >
            <a
              :href="item.to"
              @click.prevent="handleClickOnItem(item.to)"
            >
              {{ index + 1 }}. {{ item.title }}
            </a>
          </li>
        </ul>
      </aside>
    </div>
    <div class="inter-app__content">
      <InterBox
        title="Типография"
        id="typography"
      >
        <div class="inter-app-typo">
          <div class="inter-app-typo__row">
            <div class="inter-app-typo__key">h1</div>
            <div class="inter-app-typo__value">
              <div class="title-h1">Привет мир!</div>
            </div>
          </div>
          <div class="inter-app-typo__row">
            <div class="inter-app-typo__key">h2</div>
            <div class="inter-app-typo__value">
              <div class="title-h2">Привет мир!</div>
            </div>
          </div>
          <div class="inter-app-typo__row">
            <div class="inter-app-typo__key">h3</div>
            <div class="inter-app-typo__value">
              <div class="title-h3">Привет мир!</div>
            </div>
          </div>
          <div class="inter-app-typo__row">
            <div class="inter-app-typo__key">h4</div>
            <div class="inter-app-typo__value">
              <div class="title-h4">Привет мир!</div>
            </div>
          </div>
          <div class="inter-app-typo__row">
            <div class="inter-app-typo__key">h5</div>
            <div class="inter-app-typo__value">
              <div class="title-h5">Привет мир!</div>
            </div>
          </div>
          <div class="inter-app-typo__row">
            <div class="inter-app-typo__key">h6</div>
            <div class="inter-app-typo__value">
              <div class="title-h6">Привет мир!</div>
            </div>
          </div>
        </div>
      </InterBox>
      <InterBox
        title="Input"
        id="input"
      >
        <TheInput
          label="Ваше имя"
          placeholder="Nick"
          v-model="input"
        />
      </InterBox>
      <InterBox
        title="Textarea"
        id="textarea"
      >
        <TheTextarea
          label="Описание"
          placeholder="Теплым летним вечером..."
          v-model="textarea"
        />
      </InterBox>
      <InterBox
        title="Select"
        id="select"
      >
        <TheSelect
          label="Выберите из списка"
          v-model="select"
          :options="selectOptions"
        />
      </InterBox>
      <InterBox
        title="Checkbox"
        id="checkbox"
      >
        <TheCheckbox
          v-model="checkbox"
        >
          Подтвердите, что Вам нравится мурлыкание кошек
        </TheCheckbox>
      </InterBox>
      <InterBox
        title="Переключатель"
        id="switcher"
      >
        <TheSwitcher
          v-model="switcher"
        />
      </InterBox>
      <InterBox
        title="Button"
        id="button"
      >
        <TheButton>
          Нажми на меня
        </TheButton>
      </InterBox>
      <InterBox
        title="Action Buttons"
        id="action_buttons"
      >
        <div class="flex gap-1">
          <ActionButton>
            <EditIcon />
          </ActionButton>
          <ActionButton>
            <TrashIcon />
          </ActionButton>
        </div>
      </InterBox>
    </div>
  </div>
</template>

<style lang="scss">
@import "inter-app";
</style>
