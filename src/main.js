import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import './assets/globalStyles.css'
// import OneSignalVuePlugin from '@onesignal/onesignal-vue3'
import router from './router/router'

const app = createApp(App)
const pinia = createPinia()

app.use(router)
app.use(pinia)
// app.use(OneSignalVuePlugin, {
//     appId: "7560ac7c-1cfe-4a14-a8bd-4ecf1e211bd0",
//     safari_web_id: "web.onesignal.auto.09206a8d-cae3-491c-ad76-7a8d47a79aca",
//     notifyButton: {
//       enable: true,
//     },
//     allowLocalhostAsSecureOrigin: true,
//     serviceWorkerParam: { scope: "/" },
//     serviceWorkerPath: "OneSignalSDKWorker.js"
// })

app.mount("#app");
