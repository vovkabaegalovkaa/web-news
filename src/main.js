import { createApp } from 'vue'
import App from './App.vue'
import Header from './Header.vue'
import "./theme.css"

//глобальная регистраиция для использования во всем проекте
const app = createApp(App);
app.component("the-header", Header);
app.mount('#app')
