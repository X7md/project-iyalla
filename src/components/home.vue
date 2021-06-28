<template>
  <Nav />
  <div class="hero container">
    <h1 class="title">يلا</h1>
      <div class="paragraph">
        <p class="font-dubai-light fs-4">
          منصتك للسياحة و الترفيه...
        </p>
      </div>
      <div class="py-2"></div>
<Grid/>
</div>
</template>

<script setup>
import Nav from './NavBar.vue'
import Grid from './GridView.vue'
</script>

<style scoped>
  .hero h1.title {
    font-size: xxx-large;
  }
</style>