import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use (router)
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add();

app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app')