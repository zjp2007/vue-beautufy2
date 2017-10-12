import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Home from '@/components/Home'
import vueBeauty from 'vue-beauty'
import 'vue-beauty/package/style/vue-beauty.min.css'
Vue.use(Router)
Vue.use(vueBeauty)
export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    }
  ]
})
