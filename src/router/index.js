import Vue from 'vue'
import Router from 'vue-router'
// const index = () => import('../components/Index.vue')
const index = () => import('../components/Index.vue')
const roadshow = () => import('../components/Roadshow.vue')
const markRule = () => import('../components/MarkRule.vue')
const customers = () => import('../components/Customers.vue')
const workRecord = () => import('../components/WorkRecord.vue')
const analysis = () => import('../components/Analysis.vue')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      meta:{level: 1}
    },
    {
      path: '/roadshow',
      name: 'roadshow',
      component: roadshow,
      meta:{level: 2}
    },
    {
      path: '/markRule',
      name: 'markRule',
      component: markRule,
      meta:{level: 2}
    },
    {
      path: '/customers',
      name: 'customers',
      component: customers,
      meta:{level: 2}
    },
    {
      path: '/workRecord',
      name: 'workRecord',
      component: workRecord,
      meta:{level: 2}
    },
    {
      path: '/analysis',
      name: 'analysis',
      component: analysis,
      meta:{level: 2}
    }
  ]
})
