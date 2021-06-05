import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'
import HomePage from './components/home.vue';
const router  = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes: [
        {
          path: "/",
          redirect: "/home"
        },
        {
          path: '/home',
          name: 'HomePage',
          component: HomePage
        }
      ], // short for `routes: routes`
  })

createApp(App).use(router).mount('#app')
