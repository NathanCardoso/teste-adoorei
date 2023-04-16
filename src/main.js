import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import setupValidators from './assets/js/validationRules'

setupValidators()
createApp(App).use(router).mount('#app')
