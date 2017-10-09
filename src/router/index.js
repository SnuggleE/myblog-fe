import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import P404 from '@/components/p404'
import articleDetail from '@/components/articleDetail'
import Login from '@/components/login'
import blog from '@/components/blog'
import home from '@/components/home'
import admin from '@/components/admin/admin'
import adminIndex from '@/components/admin/index'
import addArticle from '@/components/admin/addArticle'
import pictures from '@/components/admin/pictures'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path:'/',
      redirect:'/index',
      name:'blog',
      component:blog,
      children:[
        {
          path:'/index',
          name:'index',
          component:Index
        },
        {
          path:'/article/:articleId',
          name:'articleDetail',
          component:articleDetail
        },
        {
          path:'/home',
          name:'home',
          component:home
        }
      ]

    },
    {
      path:'/login',
      name:'login',
      component:Login
    },
    {
      path:'/admin',
      name:'admin',
      component:admin,
      redirect:'/admin/index',
      children:[
        {
          path:'/admin/index',
          name:'adminIndex',
          component:adminIndex
        },
        {
          path:'/admin/add',
          name:'addArticle',
          component:addArticle
        },
        {
          path:'/admin/pictures',
          name:'pictures',
          component:pictures
        },
      ]
    },
    {
      path:'*',
      name:'p404',
      component:P404
    }
  ]
})
