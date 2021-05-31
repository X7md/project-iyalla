<template>
<nav class="navbar">
      <div class="container-fluid">
          <section class="d-inline-flex w-100 justify-content-evenly">
            <a class="navbar-text" href="https://www.tiktok.com/ar/" target="_blank">
               <Avatar :ImageSrc="LogoYalla"  xtitle="يلا!"/>
            </a>
            <a class="navbar-text" href="https://instagram.com" target="_blank">
              <Avatar :ImageSrc="LogoSeeWorld"  xtitle="يلا نشوف العالم"/>
            </a>
            <a class="navbar-text" href="https://twitter.com" target="_blank">
               <Avatar :ImageSrc="LogoSeeSaudi" xtitle="يلا نشوف السعودية"/>
            </a>
        </section>
        </div>
    </nav>
</template>

<script setup>
import Avatar from './Avatar.vue';
import LogoSeeWorld from '../assets/logo-see-world.png'
import LogoSeeSaudi from '../assets/logo-see-saudi.png'
import LogoYalla from '../assets/logoYalla.png'
//const counter = ref({})
</script>

<style scoped>
nav {
  min-height: 40px;
}
</style>
