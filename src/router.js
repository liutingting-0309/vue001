import VueRouter from 'vue-router'

import HomeContainer from './components/tabber/HomeContainer.vue'
import MemberContainer from './components/tabber/MemberContainer.vue'
import ShopcarContainer from './components/tabber/ShopcarContainer.vue'
import SearchContainer from './components/tabber/SearchContainer.vue'

var router = new VueRouter({
  routes: [//配置路由规则的
    {path:'/',redirect:'/home'},
    { path: '/home', component: HomeContainer},
    { path: '/member', component: MemberContainer},
    { path: '/shopcar', component: ShopcarContainer},
    { path: '/search', component: SearchContainer}
  ],
  linkActiveClass: 'mui-active'//覆盖默认的路由高亮的类，默认的类叫做router-link-active
})

export default router