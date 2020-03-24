import Vue from 'vue'
import Router from 'vue-router'
import LoginPage from '@/LoginPage'
import SecretPage from '@/SecretPage'
import store from '../store/store'

Vue.use(Router)

const authentication = async (to, from, next) => {
  if (store.state.isLogged) {
    next()
  } else {
    next('/')
  }
}

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'LoginPage',
      component: LoginPage
    },
    {
      path: '/secret',
      name: 'SecretPage',
      component: SecretPage,
      beforeEnter: authentication
    }
  ]
})
