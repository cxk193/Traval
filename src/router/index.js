import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () =>import('../components/home/Home');
const Piao = () =>import('../views/piao/piao');
const GoTop = () =>import('../views/goTop/GoTop');
const Profile = () =>import('../views/profile/profile');
const City = () =>import('../components/city/City');
const Detial = () => import('../components/Detial/Detial')

Vue.use(VueRouter)

const routes = [
  {
    path:'/home',
    component:Home
  },
  {
    path:'/piao',
    component:Piao
  },
  {
    path:'/gotop',
    component:GoTop
  },
  {
    path:'/profile',
    component:Profile
  },
  {
    path:'/city',
    component:City
  },
  {
    path:'/detial/:aid',
    component:Detial
  },
  {
    path:'*',
    redirect:'/home'
  }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }


})

export default router
