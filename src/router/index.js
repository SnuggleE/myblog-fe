import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Index from '@/components/index'
import P404 from '@/components/p404'
import articleDetail from '@/components/articleDetail'
import Login from '@/components/login'

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
    },
    {
      path:'/article/:articleId',
      name:'articleDetail',
      component:articleDetail
    },
    {
      path:'/login',
      name:'login',
      component:Login
    },
    {
      path:'*',
      name:'p404',
      component:P404
    }
  ]
})
