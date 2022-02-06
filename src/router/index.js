import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Student from "@/views/Student";
import Bookbag from "@/views/Bookbag";
import Teacher from "@/views/Teacher";
import CoursePage from "@/views/CoursePage";
import Landing from "@/views/Landing";
import CourseManagement from "@/views/CourseManagement";

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
    component: Student,
    children: [
      {
        path: '',
        name:'StudentLanding',
        component: Landing
      },
      {
        path:'courses',
        name:'Courses',
        component: CoursePage
      },
      {path: 'bookbag',
        name: 'Bookbag',
        component: Bookbag}
    ]
  },
  {
    path: '/teacher',
    name: 'Teacher',
    component: Teacher,
    children: [
      {
        path: '',
        name:'TeacherLanding',
        component: Landing
      },
      {
        path:'courses',
        name:'Courses',
        component: CourseManagement
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
