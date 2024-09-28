import { createApp } from 'vue'
// import pinia for type safe and flexible store for vue
import {createPinia} from 'pinia'
import App from './App.vue'
//import router 
import router from './router'
// import main.css 
import './css/main.css'
import { useUserStore } from './stores/users'

// Init Pinia
const pinia = createPinia();
// Create vue app
createApp(App).use(router).use(pinia).mount('#app')

//Init main store
const useStore = useUserStore(pinia)

