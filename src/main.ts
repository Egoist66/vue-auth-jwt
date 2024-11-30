import 'primevue/resources/primevue.min.css'
import 'primeflex/primeflex.css'
import 'primeicons/primeicons.css'
import './assets/main.scss'


import 'primevue/resources/themes/aura-light-indigo/theme.css'
import {createApp, h} from 'vue'
import {createPinia} from 'pinia'

// @ts-ignore
import App from './App.vue'
import router from './router'
//import { initFireBaseApp } from './service/firebase.config'
import {welcomePlugin} from './plugins/welcome'
import PrimeVue from 'primevue/config';
import {watchStorage} from './plugins/watchStorage'
import {globalApiInterceptor} from './plugins/api.interceptors'
import {useAuthStore} from './store/auth'


//export const fireBaseInst = initFireBaseApp();
const app = createApp(App);

const watchStorePlugin = watchStorage(['user_creds'], [null], async () => {
    await router.replace({name: 'signin'})
    await useAuthStore().destroyUserData()
})()


app.use(welcomePlugin)
app.use(router)
app.use(createPinia())
app.use(PrimeVue, {ripple: true});
app.use(watchStorePlugin)
app.use(globalApiInterceptor)

app.mount('#app')


console.log(app);