
import Msite from '../pages/Msite.vue'
import Search from '../pages/Search.vue'
import Order from '../pages/Order.vue'
import Profile from '../pages/Profile.vue'


export default  [
    // 首页
    {
    path: '/msite',
    component: Msite,
    },
    // 搜索
    {
        path: '/search',
        component: Search
    },
    // 订单
    {
        path: '/order',
        component: Order
    },
    // 我的
    {
        path: '/profile',
        component: Profile
    },
    // 重定向
    {
        path: '/',
        redirect: 'Msite'
    }
   
]