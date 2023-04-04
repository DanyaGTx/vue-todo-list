import { createApp } from 'vue'
import './styles/style.css'
import App from './App.vue'
import router from './router/router'
import vuetify from './vuetify/index'

createApp(App).use(vuetify).use(router).mount('#app')
