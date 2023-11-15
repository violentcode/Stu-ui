import { createApp } from 'vue'
import App from './app.vue'
import '../dist/style.css'
import "./assets/css/common.less"

const app = createApp(App)
app.mount('#app')
