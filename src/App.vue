<template>
   <router-view></router-view>
</template>

<script>
import '../node_modules/bootstrap/dist/css/bootstrap.rtl.min.css';
import background from "./assets/kemo-sahab-4V0tz5FEvTc-unsplash.jpg?url"
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
:root {
  --url: url("./assets/kemo-sahab-4V0tz5FEvTc-unsplash.jpg")
}
#app {
    font-family: Dubai-Bold;
    color: #ffffff;
    background-image: var(--url);
    background-size: cover;
    background-position: center -15rem;
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
