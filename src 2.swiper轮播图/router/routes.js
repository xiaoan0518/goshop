
import Msite from '../pages/Msite.vue'
import Search from '../pages/Search.vue'
import Order from '../pages/Order.vue'
import Profile from '../pages/Profile.vue'
import Login from '../pages/Login.vue'



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
    // 重定向
    {
        path: '/',
        redirect: 'Msite'
    }
   
]