import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueRouter from 'vue-router'
import Login from './components/Login.vue'
import Work from './components/Work.vue'
import Reader from './components/Reader.vue'
import Book from './components/Book.vue'
import Cnnode from './components/Cnnode.vue'
import Register from './components/Register.vue'

const routes = [
  {
    path:"/login",
    component:Login
  },
  {
    path:"/work",
    component:Work
  },
  {
    path:"/reader",
    component:Reader
  },
  {
    path:"/book",
    component:Book
  },
  {
    path:"/cnnode",
    component:Cnnode
  },
  {
    path:"/reguster",
    component:Register
  }
]

const router = new VueRouter({
  routes
})

Vue.use(ElementUI)
Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
