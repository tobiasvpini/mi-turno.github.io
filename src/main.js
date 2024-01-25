import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import './assets/globalStyles.css'
// IMPORT FONT AWESOME
// import * as ElementPlusIconsVue from "@element-plus/icons-vue";
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
// library.add()

const app = createApp(App)
const pinia = createPinia()

// app.component('font-awesome-icon', FontAwesomeIcon);
app.use(pinia)

app.mount("#app");
