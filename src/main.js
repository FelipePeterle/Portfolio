import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { Icon } from '@iconify/vue'
import i18n from './i18n'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

const app = createApp(App)

app.component('AppIcon',Icon)
app.use(router)
app.use(i18n)
app.mount('#app')
