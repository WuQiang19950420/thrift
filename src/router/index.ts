import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('../views/home/Home.vue'),
    meta: { showTab: true }
  },
  {
    path: '/classify',
    component: () => import('../views/classify/Classify.vue'),
    meta: { showTab: true }
  },
  {
    path: '/publish',
    component: () => import('../views/publish/Publish.vue'),
    meta: { showTab: true }
  },
  {
    path: '/message',
    component: () => import('../views/message/Message.vue'),
    meta: { showTab: true }
  },
  {
    path: '/me',
    component: () => import('../views/me/Me.vue'),
    meta: { showTab: true }
  },
  {
    path: '/meInput',
    component: () => import('../views/meInput/MeInput.vue')
  },
  {
    path: '/goodsDetail',
    component: () => import('../views/goodsDetail/GoodsDetail.vue')
  },
  {
    path: '/publishGoods',
    component: () => import('../views/publish/PublishGoods.vue')
  },
  {
    path: '/goodColloct',
    component: () => import('../views/goodColloct/GoodColloct.vue')
  },
  {
    path: '/buy',
    component: () => import('../views/buy/Buy.vue')
  },
  {
    path: '/sale',
    component: () => import('../views/sale/Sale.vue')
  },
  {
    path: '/orderDetail',
    component: () => import('../views/order/OrderDetail.vue')
  },
  {
    path: '/writeOrder',
    component: () => import('../views/order/WriteOrder.vue')
  },
  {
    path: '/search',
    component: () => import('../views/search/Search.vue')
  },
  {
    path: '/addressManage',
    component: () => import('../views/address/AddressManage.vue')
  },
  {
    path: '/setAddressMain',
    component: () => import('../views/address/SetAddressMain.vue')
  },
  {
    path: '/authentication',
    component: () => import('../views/authentication/Authentication.vue')
  },
  {
    path: '/chitChat',
    component: () => import('../views/message/ChitChat.vue')
  },
  {
    path: '/cash',
    component: () => import('../views/cash/cash.vue')
  },
  {
    path: '/wxPay',
    component: () => import('../weixin/wx-pay.vue')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
