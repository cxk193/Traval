import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () =>import('../components/home/Home');
const List = () =>import('../components/home/List');

Vue.use(VueRouter)

const routes = [
  {
    path:'/home',
    component:Home
  },
  {
    path:'/list',
    component:List
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
