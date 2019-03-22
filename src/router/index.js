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
      component: Introduce,
      meta: {
        title: '門真でピアノ・エレクトーンの習い事なら中井ピアノエレクトーン教室',
        desc: 'トップページ, ご挨拶'
      }
    },
    {
      path: '/guide',
      name: 'Guide',
      component: Guide,
      meta: {
        title: '教室案内',
        desc: '教室案内,'
      }
    },
    {
      path: '/event',
      name: 'Event',
      component: Event,
      meta: {
        title: 'イベント',
        desc: 'イベントの紹介ページです。'
      }
    },
    {
      path: '/party',
      name: 'Party',
      component: Party,
      meta: {
        title: 'わくわく音楽隊',
        desc: 'わくわく音楽隊における活動の紹介ページです。'
      }
    },
    {
      path: '/lesson',
      name: 'Lesson',
      component: Lesson,
      meta: {
        title: 'レッスン',
        desc: 'レッスンについて:個人レッスン（エレクトーン・ピアノ）,プレレッスン（2~3人のグループレッスン）,料金について:入会金,月謝・レッスン時間,生徒損害補償サービス加入（無料）'
      }
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact,
      meta: {
        title: 'お問い合わせ',
        desc: 'お問い合わせのページです。'
      }
    },
    {
      path: '/thanks',
      name: 'success',
      component: SubmissionSuccess,
      meta: {
        title: 'お問い合わせ完了',
        desc: 'お問い合わせ完了画面です。'
      }
    },
    {
      path: '/404',
      name: 'fail',
      component: SubmissionFail,
      meta: {
        title: 'お問い合わせ送信失敗',
        desc: 'お問い合わせ失敗画面です。'
      }
    }
  ]
})
