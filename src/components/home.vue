<template>
  <Nav />
  <div class="hero container">
    <h1 class="title">يلا</h1>
      <div class="paragraph">
        <p class="font-dubai-light fs-4">
          سافر في منصتنا، قبل لا تسافر بالجو!
        </p>
      </div>
    <BarSearch />
 <div>
    <!--<teleport to="[data-outside]">
       <ModalComponet dataShow='{"Hi", "Hello"}'/>
    </teleport>-->
 </div>
  </div>
</template>

<script setup>
import Nav from './NavBar.vue'
import ModalComponet from './Modal.vue'
import BarSearch from './SearchBar.vue'
</script>

<style>

</style>