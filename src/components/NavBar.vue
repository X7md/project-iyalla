<template>
<nav class="navbar">
      <div class="scroller  w-100">
          <section class="d-inline-flex w-100 justify-content-evenly">
            <a class="navbar-text" target="_blank" @click="showModal($event)">
               <Avatar :ImageSrc="logo1" xtitle="نتمشى" />
            </a>
            <a class="navbar-text" target="_blank"  @click="showModal($event)">
              <Avatar :ImageSrc="logo2" xtitle="نسافر"/>
            </a>
            <a class="navbar-text" target="_blank"  @click="showModal($event)">
               <Avatar :ImageSrc="logo3" xtitle="سعوديتي"/>
            </a>
            <a class="navbar-text" target="_blank"  @click="showModal($event)">
               <Avatar :ImageSrc="logo4" xtitle="ترفيه"/>
            </a>
            <a class="navbar-text" target="_blank"  @click="showModal($event)">
               <Avatar :ImageSrc="logo5" xtitle="Discover Saudi"/>
            </a>
        </section>
        </div>
    </nav>
    <teleport v-if="show" to="[data-outside]">
       <ModalComponet :dataShow='modalData' @closeModal="closeModal($event)"/>
    </teleport>
</template>

<script setup>
import ModalComponet from './Modal.vue'
import Avatar from './Avatar.vue';
import json from './../assets/data.json'
import logo1 from '../assets/logos/A.jpg?url'
import logo2 from '../assets/logos/B.jpg?url'
import logo3 from '../assets/logos/c.jpg?url'
import logo4 from '../assets/logos/E.jpg?url'
import logo5 from '../assets/logos/d.jpg?url'
import LogoYalla from '../assets/logoYalla.png?url'
import { ref } from 'vue'
// all of these are automatically bound to the template
const show = ref(false)
const closeModal = function(e){
   show.value = !e
}
const dataDetails = json;
const modalData = ref({socialMedia: [{}], title: "", desc: "", img: ""})
const showModal = (e) => {
   if (e.target.constructor !== HTMLDivElement){
   dataDetails.map((element, index)=> {
      if (element.title.includes(e.target.parentElement.children[1].innerText)){
         modalData.value.title = element.title;
         modalData.value.desc = element.desc
         modalData.value.img = e.target.parentElement.children[0].src
         modalData.value.socialMedia = element.socialMedia
         show.value = true
      }
   })
   }
}
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
