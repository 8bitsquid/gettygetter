/**
 * Main entry point - creates and then mounts the app to the DOM
 */
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import App from './App.vue'

createApp(App)
	.use(ElementPlus)
	.mount('#app')
