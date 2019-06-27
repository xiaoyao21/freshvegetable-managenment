import Vue from 'vue'
import Router from 'vue-router'
import main from '@/components/main'
import sellgoods from '@/components/sellgoods'
import addgoods from '@/components/addgoods'
import promotegoods from '@/components/promotegoods'
import accumgoods from '@/components/accumgoods'
import pullgoods from '@/components/pullgoods'
import service from '@/components/service'
import deliverorders from '@/components/deliverorders'
import waitorders from '@/components/waitorders'
import allorders from '@/components/allorders'
import memanage from '@/components/memanage'
import damanage from '@/components/damanage'
import login from '@/components/login'
Vue.use(Router)



export default new Router({
  routes: [
		{
			path:'/login',
			component:login
		},
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
        },
       {
          path:'promotegoods',
          component:promotegoods
       },
       {
         path:'accumgoods',
         component:accumgoods
       },
       {
        path:'pullgoods',
        component:pullgoods
       },{
         path:'service',
         component:service
       },{
         path:'allorders',
         component:allorders
       },{
         path:'deliverorders',
         component:deliverorders
       },{
         path:'waitorders',
         component:waitorders
       },{
         path:'memanage',
         component:memanage
       },{
         path:'damanage',
         component:damanage
       }
      ]
    }
  ],
	mode:"history"
})
