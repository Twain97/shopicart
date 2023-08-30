import './assets/style.css'
import { createApp } from 'vue'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import PrimeVue from 'primevue/config';
import "primevue/resources/themes/lara-light-indigo/theme.css";
import Button from "primevue/button"
import App from './App.vue'
import router from './router'

library.add(faUserSecret)

const app = createApp(App)

app.use(router)
app.use(store)
app.use(PrimeVue)
app.component('Button', Button)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
