import '@/assets/styles/index.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { installComponents } from '@/setups/components.setup'
import type { App as Application } from 'vue'

import App from './App.vue'
import router from './router'

const app: Application = createApp(App)

installComponents(app)

app.use(createPinia())
app.use(router)

app.mount('#root')
