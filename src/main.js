import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'

setTimeout(() => {
   window.scrollTo(0, 0);
 }, 100);

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.mount('#app')