import { createApp } from 'vue'
import App from './App.vue'
import Vue3FormWizard from 'vue3-form-wizard'
import { plugin, defaultConfig } from '@formkit/vue'
import formKitConfig from './formkit.config'

import 'vue3-form-wizard/dist/style.css'


const app = createApp(App)
app.use(Vue3FormWizard)
app.use(plugin, defaultConfig(formKitConfig))
app.mount('#app')
