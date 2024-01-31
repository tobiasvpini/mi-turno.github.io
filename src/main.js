import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import './assets/globalStyles.css'
import OneSignalVuePlugin from '@onesignal/onesignal-vue3'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(OneSignalVuePlugin, {
    appId: "7560ac7c-1cfe-4a14-a8bd-4ecf1e211bd0",
})

app.mount("#app");
