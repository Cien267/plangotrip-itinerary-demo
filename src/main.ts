import './assets/css/main.css'
import './assets/css/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faLocationDot,
  faCalendarDays,
  faUserGroup,
  faLightbulb,
  faTimeline,
  faTable,
  faPlus,
  faPencil,
  faTrash,
  faClock,
  faNoteSticky,
  faCarSide,
  faHotel,
  faLocationCrosshairs,
  faBowlFood,
  faAngleDown,
  faAngleUp,
  faUser,
  faEnvelope,
  faPhone,
} from '@fortawesome/free-solid-svg-icons'
library.add(
  faLocationDot,
  faCalendarDays,
  faUserGroup,
  faLightbulb,
  faTimeline,
  faTable,
  faPlus,
  faPencil,
  faTrash,
  faClock,
  faNoteSticky,
  faCarSide,
  faHotel,
  faLocationCrosshairs,
  faBowlFood,
  faAngleDown,
  faAngleUp,
  faUser,
  faEnvelope,
  faPhone,
)

const app = createApp(App).component('font-awesome-icon', FontAwesomeIcon)

app.use(createPinia())
app.use(router)

app.mount('#app')
