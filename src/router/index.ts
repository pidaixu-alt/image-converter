import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { useGtag } from 'vue-gtag-next'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView  // 主页：图片转换工具
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')  // 关于页面
  },
  {
    path: '/privacy-policy',
    name: 'privacy',
    component: () => import('../views/PrivacyView.vue')  // 隐私政策
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})
// 👇 加上这个，路由切换自动上报 GA4
router.afterEach((to) => {
  const { pageview } = useGtag()
  pageview(to.fullPath)
})


export default router
