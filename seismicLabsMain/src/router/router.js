import Vue from 'vue'
import Router from 'vue-router'
import UhrzeitView from '@/UhrzeitView.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/UhrzeitView.vue',
      name: 'UhrzeitView',
      component: UhrzeitView
    }, 
    {
        path: '/App.vue',
        name: 'App',
        component: UhrzeitView
      }, 

  ]
})