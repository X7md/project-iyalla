<template>
  <Nav />
  <div class="hero container">
    <h1 class="title">يلا</h1>
      <div class="paragraph">
        <p class="font-dubai-light fs-4">
          منصتك للسياحة و الترفيه...
        </p>
      </div>
    <BarSearch />
 <div>
 </div>
  </div>
</template>

<script setup>
import Nav from './NavBar.vue'
import BarSearch from './SearchBar.vue'
</script>

<style scoped>
  .hero {
    min-height: 35vw
  }
  .hero h1.title {
    font-size: xxx-large;
  }
</style>