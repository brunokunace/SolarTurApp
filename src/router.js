import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

function load (component) {
  return () => import(`@/${component}.vue`)
}

export default new VueRouter({

  routes: [
    { path: '/',
      component: load('Hello'),
      children: [
        {
          path: '/establishment/:id',
          component: load('establishment'),
          name: 'establishment'
        },
        {
          path: '',
          component: load('map'),
          name: 'mapinitial'
        }
      ]
    },
    { path: '/about', component: load('about') },
    { path: '*', component: load('Error404') }
  ]
})
