
import 'primevue/resources/primevue.min.css'  
import '/node_modules/primeflex/primeflex.css'

import 'primeicons/primeicons.css'

import './assets/main.scss'



import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { initFireBaseApp } from './service/firebase.config'
import { welcomePlugin } from './plugins/welcome'
import PrimeVue from 'primevue/config';
import { setTheme } from './plugins/theme'
import { useLS } from './composables/common/useLS'



export const fireBaseInst = initFireBaseApp();
const {get} = useLS()


const app = createApp(App);


app.use(createPinia())
app.use(PrimeVue, {
    ripple: true,
});
app.use(
    setTheme('aura-light')('indigo')
)

app.use(router)
app.use(welcomePlugin)



app.mount('#app')

