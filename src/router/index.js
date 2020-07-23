import Vue from 'vue'
import VueRouter from 'vue-router'
import Log from '@/pages/Log'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Log',
    component: Log,
    props: true
  }, {
    path: '/Home',
    name: 'Home',
    props: true,
    component: () => import('./../pages/Home')
  },
  {
    path: '/User',
    name: 'User',
    component: () => import('./../pages/UserPage'),
    props: true
  }, {
    path: '/Post',
    name: 'Post',
    component: () => import('./../pages/PostPage'),
    props: true

  }, {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  routes
})

export default router