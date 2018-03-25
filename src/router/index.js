// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/pages/index'  
import DetailPage from '@/pages/detail'  
import DetailAnaPage from '../pages/details/analysis'  
import DetailCouPage from '../pages/details/count' 
import DetailForPage from '../pages/details/forecast' 
import DetailPubPage from '../pages/details/publish' 
import OrderListPage from '@/pages/orderList' 
import OrderListPageOne from '@/pages/orderList1' 
Vue.use(Router)
export default new Router({
  mode:"history",
  routes:[
    {
      path:"/",
      component:IndexPage
    },
		{
			path: '/orderList',
			component: OrderListPage
    },
    {
			path: '/orderList1',
			component: OrderListPageOne
		},
    {
      path:"/detail",
      component:DetailPage,
      redirect:"detail/analysis",
      children:[
        {
          path:"analysis",
          name:"analysis",
          component:DetailAnaPage
        },
        {
          path:"count",
          name:"count",
          component:DetailCouPage
        },
        {
          path:"forecast",
          name:"forecast",
          component:DetailForPage
        },
        {
          path:"publish",
          name:"publish",
          component:DetailPubPage
        }
      ]
    }
  ]
})

