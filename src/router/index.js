import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Index from '@/components/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      redirect:'/index'
    },
    {
      path:'/index',
      name:'index',
      component:Index
    },
    {
      path:'/hello',
      name:'welcome',
      component:Hello
    }
  ]
})
