import type { App as Application } from 'vue'

import TheTextarea from '@/components/UI/TheTextarea/TheTextarea.vue'
import TheInput from '@/components/UI/TheInput/TheInput.vue'
import TheSelect from '@/components/UI/TheSelect/TheSelect.vue'
import TheCheckbox from '@/components/UI/TheCheckbox/TheCheckbox.vue'
import TheSwitcher from '@/components/UI/TheSwitcher/TheSwitcher.vue'
import TheButton from '@/components/UI/TheButton/TheButton.vue'
import ActionButton from '@/components/UI/ActionButton/ActionButton.vue'

export const installComponents = (app: Application) => {
  app
    .component('TheTextarea', TheTextarea)
    .component('TheInput', TheInput)
    .component('TheSelect', TheSelect)
    .component('TheCheckbox', TheCheckbox)
    .component('TheButton', TheButton)
    .component('ActionButton', ActionButton)
    .component('TheSwitcher', TheSwitcher)
}
