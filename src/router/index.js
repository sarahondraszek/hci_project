import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Student from "@/views/Student";
import Bookbag from "@/views/Bookbag";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/student',
    name: 'Student',
    component: Student
  },
  {
    path: '/bookbag',
    name: 'Bookbag',
    component: Bookbag
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
