<template>
<nav class="navbar">
      <div class="scroller  w-100">
          <section class="d-inline-flex w-100 justify-content-evenly">
            <a class="navbar-text" target="_blank" @click="toggle()">
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
               <Avatar :ImageSrc="logo5" xtitle="Discover Saudi"/>
            </a>
        </section>
        </div>
    </nav>
    <teleport v-if="show" to="[data-outside]">
       <ModalComponet :dataShow='modalData' @closeModal="toggle($event)"/>
    </teleport>
</template>

<script setup>
import ModalComponet from './Modal.vue'
import Avatar from './Avatar.vue';
import logo1 from '../assets/logos/A.jpg'
import logo2 from '../assets/logos/B.jpg'
import logo3 from '../assets/logos/C.jpg'
import logo4 from '../assets/logos/E.jpg'
import logo5 from '../assets/logos/D.jpg'
import LogoYalla from '../assets/logoYalla.png'
import { ref } from 'vue'
// all of these are automatically bound to the template
const show = ref(false)
const dataDetails = "";
const modalData = ref({socialMedia: [{}], title: "تجربةٌ", desc: "يفترض أن يكون هنالك هُنا نصٌ طويل... توضيحي وصفي للخدمة والمنصة"})
const toggle = (e)=> show.value = !e
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
    margin-right: 35px;
    padding-right: 10px;
}
.scroller > section a:last-child {
    margin-right: 0%;
    padding-right: 0;
}
</style>
