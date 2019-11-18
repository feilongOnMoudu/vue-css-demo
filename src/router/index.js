import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      meta: { title: "" },
      component: ()=>import('../pages/NewHome')
    },
    {
      path: '/myList',
      name: 'MyList',
      meta: { title: "" },
      component: ()=>import('../pages/MyList')
    }
    // , {
    //   path: '/caseDetail/:id',
    //   name: 'CaseDetail',
    //   meta: { title: "", activeMenu: "/case" },
    //   component: CaseDetail,
    // }
  ]
})

