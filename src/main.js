import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import GStore from './store'
import 'nprogress/nprogress.css'
// Create a reactive object 
// const GStore = reactive({flashMessage: ''})
// createApp(App).use(store).use(router).provide('GStore' , GStore).mount('#app')

createApp(App)
    .use(router)
    .provide('GStore', GStore)
    .mount('#app')


