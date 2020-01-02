import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Admin from '@/components/Admin'
import Center from '@/components/Center'
import Classes from '@/components/Classes'
import Course from '@/components/Course'
import Teacher from '@/components/Teacher'
import Classroom from '@/components/Classroom'
import Student from '@/components/Student'
import Reg from '@/components/Reg'
import Teainfo from '@/components/Teainfo'
import Stuinfo from '@/components/Stuinfo'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin,
      children: [
        {
          path: 'center/:adminId',
          name: 'Center',
          component: Center
        },
        {
          path: 'classes',
          name: 'Classes',
          component: Classes
        },
        {
          path: 'course',
          name: 'Course',
          component: Course
        },
        {
          path: 'teacher',
          name: 'Teacher',
          component: Teacher
        },
        {
          path: 'classroom',
          name: 'Classroom',
          component: Classroom
        },
        {
          path: 'student',
          name: 'Student',
          component: Student
        },
        {
          path: 'teainfo',
          name: 'Teainfo',
          component: Teainfo
        },
        {
          path: 'stuinfo',
          name: 'Stuinfo',
          component: Stuinfo
        }
      ]
    },
    {
      path: '/reg',
      name: 'Reg',
      component: Reg
    }
  ]
})
