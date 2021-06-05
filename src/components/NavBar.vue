<template>
<nav class="navbar">
      <div class="scroller  w-100">
          <section class="d-inline-flex w-100 justify-content-evenly">
            <a class="navbar-text" target="_blank">
               <Avatar :ImageSrc="logo1" xtitle="نتمشى"/>
            </a>
            <a class="navbar-text" target="_blank">
              <Avatar :ImageSrc="logo2" xtitle="نسافر"/>
            </a>
            <a class="navbar-text" target="_blank">
               <Avatar :ImageSrc="logo3" xtitle="سعوديتي"/>
            </a>
            <a class="navbar-text" target="_blank">
               <Avatar :ImageSrc="logo4" xtitle="ترفيه"/>
            </a>
            <a class="navbar-text" target="_blank">
               <Avatar :ImageSrc="logo5" xtitle="discover saudi"/>
            </a>
        </section>
        </div>
    </nav>
</template>

<script setup>
import Avatar from './Avatar.vue';
import logo1 from '../assets/logos/A.png'
import logo2 from '../assets/logos/B.png'
import logo3 from '../assets/logos/c.png'
import logo4 from '../assets/logos/E.png'
import logo5 from '../assets/logos/d.png'
import LogoYalla from '../assets/logoYalla.png'
//const counter = ref({})
</script>

<style scoped>
.scroller > section {
  padding: 0px 2rem;
  min-height: 40px;
  max-width: 100vw;
  overflow-x: auto;
  overflow-y: hidden;
}
.scroller > section a:first-child {
    margin-right: 25px;
}
.scroller > section a:last-child {
    margin-right: 0%;
    padding-right: 0;
}
</style>
