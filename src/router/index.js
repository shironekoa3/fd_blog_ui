import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


const root = () => import("@/home/index");
const articleList = () => import("@/page/article-list");
const article = () => import("@/page/article");


export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      component: root,
      children: [
        {
          path: '/',
          component: articleList
        },
        {
          path: '/article/:id',
          component: article,
          props: true
        },
      ]
    }
  ]
})
