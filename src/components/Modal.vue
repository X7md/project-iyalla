<template>
<div class="v-overlay" ref="overlay" @click="close()"/>
    <div class="v-modal" ref="modal">
        <div class="container-fluid"><div class="row">
            <div class="col-12 name py-2">
                <img class="avatar-img" src="http://localhost:3000/src/assets/logos/E.png">
                    <div class="name m-auto px-2 d-inline-flex flex-column">
                        <p class="v-info-title">Hello</p>
                        <p class="v-info-text font-dubai-light">تست</p>
                    </div>
                </div>
            <div class="col-12 social-media">
                 <ul class="list-group">
                    <li class="list-group-item">An item</li>
                    <li class="list-group-item">A second item</li>
                    <li class="list-group-item">A third item</li>
                </ul>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive } from 'vue'
export default {
props:["dataShow"],
watch: { 
      	dataShow: function(newVal, oldVal) { // watch it
          console.log('Prop changed: ', newVal, ' | was: ', oldVal)
        }
      },
methods: {
    close: function() {
     this.$refs.overlay.classList.add("close");
     this.$refs.modal.classList.add("close");
    }
}
}

</script>

<style>
.close {
    display: none;
}
.social-media .list-group-item {
    /* border-color: transparent; */
    border-right: 0;
    border-left: 0;
}
p.name {
    display: inline-block;
}
.v-info-title, .v-info-text {
    margin: 0;
}
.avatar-img {
    display: inline-block;
    width: 3rem;
    height: 3rem;
    object-fit: cover;
    border-radius: 50%;
}
.v-overlay{
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-color: #0000008e;
}
.v-modal {
    position: fixed;
    top: -10%;
    right: 0;
    left: 0;
    bottom: 0;
    width: 90%;
    max-width: 390px;
    margin: auto;
    height: 35vh;
    color: #000000;
    background-color: #ffffff;
    border-radius: 15px;
}
</style>