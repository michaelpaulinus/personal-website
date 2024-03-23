// import './assets/main.css'
import 'vuetify/styles'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const app = createApp(App)

const vuetify = createVuetify({
  defaults: {
    VBtn: {
      variant: 'outlined'
    },
    VCarousel: {
      maxWidth: 300,
      maxHeight: 300
    },
    VCarouselItem: {
      maxWidth: 300,
      maxHeight: 300
    }
  },
  components,
  directives
})

app.use(router)
app.use(vuetify)
app.mount('#app')
