
import Msite from '../pages/Msite.vue'
import Search from '../pages/Search.vue'
import Order from '../pages/Order.vue'
import Profile from '../pages/Profile.vue'
import Login from '../pages/Login.vue'
import Shop from '../pages/Shop.vue'
// 二级路由
import Goods from '../pages/Goods/Goods.vue'
import Ratings from '../pages/Goods/Ratings.vue'
import Info from '../pages/Goods/Info.vue'



export default  [
    // 首页
    {
    path: '/msite',
    component: Msite,
    meta:{
     isRouterShow:true
    }
    },
    // 搜索
    {
        path: '/search',
        component: Search,
        meta: {
            isRouterShow: true
        }
    },
    // 订单
    {
        path: '/order',
        component: Order,
        meta: {
            isRouterShow: true
        }
    },
    // 我的
    {
        path: '/profile',
        component: Profile,
        meta: {
            isRouterShow: true
        }
    },
    // // 登录页面
    {
        path: '/login',
        component: Login
    },
    
    // 商家详情页面
     {
         path: '/shop',
         component: Shop,
         children:[
             {
                 path: '/goods',
                 component: Goods
             },
            {
                path: '/ratings',
                component: Ratings
            },
            {
                path: '/info',
                component: Info
            },
            {
                path: '/',
                redirect: '/goods'
            }
         ]
     },
   // 重定向
   {
       path: '/',
       redirect: 'msite'
   },
]