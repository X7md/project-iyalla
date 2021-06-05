<template>
    <div class="d-flex w-100 align-items-center flex-column" data-avatar>
        <img class="avatar" :src="ImageSrc">
        <span v-text="xtitle"></span>
    </div>
</template>
<script>
import { reactive } from 'vue'
export default {
props: {
    ImageSrc: {
        type: String,
        required: true
    },
    xtitle: {
        type: String,
        required: true
    }
},
    setup(props) {
    console.log(props)
  }
}
</script>
<style scoped>
    * {
    font-family: Dubai-Light;
    }
    .avatar{
    height: 4rem;
    width: 4rem;
    object-fit: cover;
    border-radius: 50%;
    }
    [data-avatar] {
    text-align: center;
    padding-left: .5rem;
    padding-right: .5rem;
    transition: all .2s ease-in-out; 
    color: #ffffff;
    }
</style>