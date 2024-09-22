
import 'primevue/resources/primevue.min.css'
import 'primeflex/primeflex.css'
import 'primeicons/primeicons.css'
import './assets/main.scss'


import 'primevue/resources/themes/aura-light-indigo/theme.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { initFireBaseApp } from './service/firebase.config'
import { welcomePlugin } from './plugins/welcome'
import PrimeVue from 'primevue/config';
import { setTheme } from './plugins/theme'
import { watchStorage } from './plugins/watchStorage'
import { globalApiIntercerptor } from './plugins/api.interceptors'



export const fireBaseInst = initFireBaseApp();
const app = createApp(App);



const wathStorePlugin = watchStorage(['user_creds'], [null], async () => await router.replace({name: 'signin'}))()


app.use(welcomePlugin)
app.use(router)
app.use(createPinia())
app.use(PrimeVue, {ripple: true});
app.use(wathStorePlugin)
app.use(globalApiIntercerptor)

app.mount('#app')

