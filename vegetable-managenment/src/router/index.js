import Vue from 'vue'
import Router from 'vue-router'
import main from '@/components/main'
import sellgoods from '@/components/sellgoods'
import addgoods from '@/components/addgoods'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: main,
      children:[
        {
          path:'sellgoods',
          component:sellgoods
        },
        {
          path:'addgoods',
          component:addgoods
        }

      ]
    }
  ]
})
