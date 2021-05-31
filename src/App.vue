<template>
  <HelloWorld msg="Hello Vue 3 + Vite" />
</template>

<script setup>
import HelloWorld from './components/NavBar.vue'
import '../node_modules/bootstrap/dist/css/bootstrap.rtl.min.css';
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
    background-image: url("./assets/kemo-sahab-4V0tz5FEvTc-unsplash.jpg");
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
}
    a {
    text-decoration: none;
    }
</style>
