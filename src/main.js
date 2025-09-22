import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Services from './views/Services.vue'
import Contact from './views/Contact.vue'
import './style.css'

const routes = [
  { path: '/', component: Home, meta: { title: '首页' } },
  { path: '/about', component: About, meta: { title: '关于我们' } },
  { path: '/services', component: Services, meta: { title: '产品服务' } },
  { path: '/contact', component: Contact, meta: { title: '联系我们' } }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

// 路由守卫，更新页面标题
router.beforeEach((to, from, next) => {
  const title = to.meta.title ? `${to.meta.title} - 和信科技` : '和信科技'
  document.title = title
  next()
})

const app = createApp(App)
app.use(router)
app.mount('#app')
