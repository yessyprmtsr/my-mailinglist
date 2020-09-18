import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LoginPage',
      component: require('@/components/LoginPage').default
    },
    {
      path: '/',
      name: 'MailPage',
      component: require('@/components/MailPage').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
