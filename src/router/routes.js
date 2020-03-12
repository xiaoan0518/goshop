
// import Msite from '../pages/Msite.vue'
// import Search from '../pages/Search.vue'
// import Order from '../pages/Order.vue'
// import Profile from '../pages/Profile.vue'

const Msite = () => import('../pages/Msite.vue')
const Search = () => import('../pages/Search.vue')
const Order = () => import('../pages/Order.vue')
const Profile = () => import('../pages/Profile.vue')
import Login from '../pages/Login.vue'
import Shop from '../pages/Shop.vue'
// 二级路由
import Goods from '../pages/Goods/Goods.vue'
import Ratings from '../pages/Goods/Ratings.vue'
import Info from '../pages/Goods/Info.vue'

// 配置路由守卫
import A from '../pages/A.vue'
import B from '../pages/B.vue'
import C from '../pages/C.vue'



export default  [
    {
        path: '/a',
        component: A,
        
    },
     {
         path: '/b',
         component: B,
        
     },
      {
          path: '/c',
          component: C,
         
      },
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