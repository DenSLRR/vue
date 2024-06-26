import { createApp } from 'vue'
import './assets/style.css'
import App from './App.vue'
import components from '@/components/UI'

const app = createApp(App)

components.forEach(component => {
    app.component(component.name, component)
})

app.mount('#app')
