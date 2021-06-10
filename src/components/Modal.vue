<template>
<div class="v-overlay" @click="close()"/>
    <div v-if="dataShow" class="v-modal">
        <div class="container-fluid"><div class="row">
            <div class="col-12 name py-2">
                <img class="avatar-img" :src="dataShow.img">
                    <div class="name m-auto px-2 d-inline-flex flex-column">
                        <p class="font-dubai-bold fs-5 v-info-title" v-text="dataShow.title"></p>
                    </div>
                </div>
            <div class="col-12 social-media">
                 <ul class="list-group">
                    <li class="list-group-item ">
                        <div class="name m-auto d-inline-flex flex-row social-media-icons">
                            <a href="https://tiktok.com/" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="--fa-brands" width="28" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 448 512"><path d="M448 209.91a210.06 210.06 0 0 1-122.77-39.25v178.72A162.55 162.55 0 1 1 185 188.31v89.89a74.62 74.62 0 1 0 52.23 71.18V0h88a121.18 121.18 0 0 0 1.86 22.17A122.18 122.18 0 0 0 381 102.39a121.43 121.43 0 0 0 67 20.14z" fill="currentColor"></path></svg>
                            </a>
                        </div>
                    </li>
                    <li class="list-group-item paragraph">
                        <p class="font-dubai-light v-info-text" v-text="dataShow.desc">

                        </p>
                    </li>
                </ul>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
props:["dataShow"],
emits:["closeModal"],
methods: {
    close: function() {
        this.$emit("closeModal", true)
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
.social-media-icons svg {
    max-height: 16px;
}
.social-media-icons a {
    color: inherit;
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
    min-height: 25%;
    max-height: 220px;
    color: #000000;
    background-color: #ffffff;
    border-radius: 15px;
}
</style>