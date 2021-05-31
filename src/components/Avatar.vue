<template>
    <div class="d-flex align-items-center flex-column" data-avatar>
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
    console.log(props) // { user: '' }

    return {} // anything returned here will be available for the rest of the component
  }
}
</script>
<style scoped>
    * {
        font-family: Dubai-Light;
    }
    .avatar{
    height: 5rem;
    max-width: 5rem;
    object-fit: cover;
    border-radius: 50%;
    }
    [data-avatar] {
        color: #ffffff;
    }
</style>