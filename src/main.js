import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import setupValidators from './assets/js/validationRules'

setupValidators()
createApp(App).mount('#app')
