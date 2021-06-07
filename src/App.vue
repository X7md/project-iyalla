<template>
   <router-view></router-view>
</template>

<script>
import '../node_modules/bootstrap/dist/css/bootstrap.rtl.min.css';
import HomePage from './components/home.vue';
export default {
  components:{
  HomePage
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    }
  ]
}

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>

<style>
@import url("https://cdn.jsdelivr.net/npm/dubai-font@1.1.1/dubai-font/css/dubai-font.css");
html, body, #app {
  min-height: 100vh;
}
#app {
    font-family: Dubai-Bold;
    color: #ffffff;
    background-image: var(--url);
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
}
a {
  text-decoration: none;
  }
[data-avatar]:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
</style>
