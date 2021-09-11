import Vue from 'vue'
import VueRouter from 'vue-router'
import firebase from 'firebase'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../components/Login.vue')
  },
  {
    path: '/',
    name: 'home',
    component: () => import('../components/Home.vue'),
    meta: {
      auth: true
    }
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('../components/Profile.vue'),
    meta: {
      auth: true
    }
  },
  {
    path: '/privacy-policy',
    name: 'privacy-policy',
    component: () => import('../components/PrivacyPolicy.vue')
  },
  {
    path: '/user-deletion',
    name: 'user-deletion',
    component: () => import('../components/UserDeletion.vue')
  },
  { path: '/404', component: () => import('../components/404.vue') },  
  { path: '*', redirect: '/404' },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {

  if (to.matched.some(record => record.meta.auth)) {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        next()
      } else {
        next({
          path: "/login",
        })
      }
    })
  } else if (to.matched.some(record => record.meta.guest)) {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        next({
          path: "/profile",
        })
      } else {
        next()
      }
    })

  } else {
    next()
  }

})

export default router

