import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import BaseButton from '/src/components/base/BaseButton.vue'

const app = createApp(App)

app.use(router)
app.component('base-button', BaseButton)
app.mount('#app')
