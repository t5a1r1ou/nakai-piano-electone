import Vue from 'vue'
import Router from 'vue-router'
import Introduce from '@/components/Introduce'
import Guide from '@/components/Guide'
import Event from '@/components/Event'
import Party from '@/components/Party'
import Lesson from '@/components/Lesson'
import Contact from '@/components/Contact'
import SubmissionSuccess from '@/components/SubmissionSuccess'
import SubmissionFail from '@/components/SubmissionFail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Introduce',
      component: Introduce
    },
    {
      path: '/guide',
      name: 'Guide',
      component: Guide
    },
    {
      path: '/event',
      name: 'Event',
      component: Event
    },
    {
      path: '/party',
      name: 'Party',
      component: Party
    },
    {
      path: '/lesson',
      name: 'Lesson',
      component: Lesson
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/thanks',
      name: 'success',
      component: SubmissionSuccess
    },
    {
      path: '/404',
      name: 'fail',
      component: SubmissionFail
    }
  ]
})
