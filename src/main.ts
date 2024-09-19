import './assets/main.scss'



import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
//import router from './router'
import { initFireBaseApp } from './service/firebase.config'
import { welcomePlugin } from './plugins/welcome'



export const fireBaseInst = initFireBaseApp();
const app = createApp(App);


app.use(createPinia())
//app.use(router)
app.use(welcomePlugin)



app.mount('#app')

