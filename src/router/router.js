import Vue from 'vue'
import Router from 'vue-router';
// import views 
import Home from "../views/Home"

Vue.use(Router)


const routes =
  [
      {path: '/', name: 'home', component: Home },
      {path: '/about', name: 'projects', component: () => import('../views/About')},
      {path: '/contact', name: 'contact', component: () => import('../views/Contact')},
      {path: '*', name: 'broken', component: () => import('../views/NotFound')}
  ]

export default new Router
(
  {
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
  }
)

