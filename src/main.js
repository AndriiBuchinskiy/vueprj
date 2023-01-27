import { createApp } from 'vue'
import router from "/src/router";
import { createPinia } from 'pinia'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import App from './App.vue'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import {vfmPlugin} from "vue-final-modal";

const vuetify = createVuetify({
    components,
    directives,
})

const pinia = createPinia()

const app = createApp(App);
app
    .use(vuetify)
    .use(router)
    .use(pinia)
    .use(vfmPlugin({
        key: '$vfm',
        componentName: 'VueFinalModal',
        dynamicContainerName: 'ModalsContainer'
    }))
    .mount('#app');