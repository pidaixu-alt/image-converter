import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueGtag from 'vue-gtag-next'

const app = createApp(App)

// 👇 只传配置，router 内部会自动使用
app.use(VueGtag, {
  property: {
    id: 'G-DEYJCZ88BJ',
    params: {
      anonymize_ip: true
    }
  }
})

app.use(router)
app.mount('#app')
