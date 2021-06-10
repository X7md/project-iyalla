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
                             <!--{{JSON.stringify(dataShow.socialMedia)}}-->
                           <a v-if="dataShow.socialMedia.some((e)=> e.type == 'tiktok')" :href="dataShow.socialMedia.find((e)=> e.type == 'tiktok').url" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="--fa-brands" width="28" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 448 512"><path d="M448 209.91a210.06 210.06 0 0 1-122.77-39.25v178.72A162.55 162.55 0 1 1 185 188.31v89.89a74.62 74.62 0 1 0 52.23 71.18V0h88a121.18 121.18 0 0 0 1.86 22.17A122.18 122.18 0 0 0 381 102.39a121.43 121.43 0 0 0 67 20.14z" fill="currentColor"></path></svg>
                            </a>
                            
                             <a v-if="dataShow.socialMedia.some((e)=> e.type == 'twitter')" :href="dataShow.socialMedia.find((e)=> e.type == 'twitter').url" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--fa-brands" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645c0 138.72-105.583 298.558-298.558 298.558c-59.452 0-114.68-17.219-161.137-47.106c8.447.974 16.568 1.299 25.34 1.299c49.055 0 94.213-16.568 130.274-44.832c-46.132-.975-84.792-31.188-98.112-72.772c6.498.974 12.995 1.624 19.818 1.624c9.421 0 18.843-1.3 27.614-3.573c-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319c-28.264-18.843-46.781-51.005-46.781-87.391c0-19.492 5.197-37.36 14.294-52.954c51.655 63.675 129.3 105.258 216.365 109.807c-1.624-7.797-2.599-15.918-2.599-24.04c0-57.828 46.782-104.934 104.934-104.934c30.213 0 57.502 12.67 76.67 33.137c23.715-4.548 46.456-13.32 66.599-25.34c-7.798 24.366-24.366 44.833-46.132 57.827c21.117-2.273 41.584-8.122 60.426-16.243c-14.292 20.791-32.161 39.308-52.628 54.253z" fill="currentColor"></path></svg>
                            </a>

                             <a v-if="dataShow.socialMedia.some((e)=> e.type == 'youtube')" :href="dataShow.socialMedia.find((e)=> e.type == 'youtube').url" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--fa-brands" width="36" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 576 512"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597c-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821c11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205l-142.739 81.201z" fill="currentColor"></path></svg>
                            </a>

                             <a v-if="dataShow.socialMedia.some((e)=> e.type == 'telegram')" :href="dataShow.socialMedia.find((e)=> e.type == 'telegram').url" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--fa-brands" width="28" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 448 512"><path d="M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9l-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9l190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284L16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z" fill="currentColor"></path></svg>
                            </a>
                            
                            <a v-if="dataShow.socialMedia.some((e)=> e.type == 'instagram')" :href="dataShow.socialMedia.find((e)=> e.type == 'instagram').url" target="_blank">
                               <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--fa-brands" width="28" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9S287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7s74.7 33.5 74.7 74.7s-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8c-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8s26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9c-26.2-26.2-58-34.4-93.9-36.2c-37-2.1-147.9-2.1-184.9 0c-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9c1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0c35.9-1.7 67.7-9.9 93.9-36.2c26.2-26.2 34.4-58 36.2-93.9c2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6c-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6c-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6c29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6c11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" fill="currentColor"></path></svg>
                            </a>

                            <a v-if="dataShow.socialMedia.some((e)=> e.type == 'snapchat')" :href="dataShow.socialMedia.find((e)=> e.type == 'snapchat').url" target="_blank">
                               <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--fa-brands" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512"><path d="M510.846 392.673c-5.211 12.157-27.239 21.089-67.36 27.318c-2.064 2.786-3.775 14.686-6.507 23.956c-1.625 5.566-5.623 8.869-12.128 8.869l-.297-.005c-9.395 0-19.203-4.323-38.852-4.323c-26.521 0-35.662 6.043-56.254 20.588c-21.832 15.438-42.771 28.764-74.027 27.399c-31.646 2.334-58.025-16.908-72.871-27.404c-20.714-14.643-29.828-20.582-56.241-20.582c-18.864 0-30.736 4.72-38.852 4.72c-8.073 0-11.213-4.922-12.422-9.04c-2.703-9.189-4.404-21.263-6.523-24.13c-20.679-3.209-67.31-11.344-68.498-32.15a10.627 10.627 0 0 1 8.877-11.069c69.583-11.455 100.924-82.901 102.227-85.934c.074-.176.155-.344.237-.515c3.713-7.537 4.544-13.849 2.463-18.753c-5.05-11.896-26.872-16.164-36.053-19.796c-23.715-9.366-27.015-20.128-25.612-27.504c2.437-12.836 21.725-20.735 33.002-15.453c8.919 4.181 16.843 6.297 23.547 6.297c5.022 0 8.212-1.204 9.96-2.171c-2.043-35.936-7.101-87.29 5.687-115.969C158.122 21.304 229.705 15.42 250.826 15.42c.944 0 9.141-.089 10.11-.089c52.148 0 102.254 26.78 126.723 81.643c12.777 28.65 7.749 79.792 5.695 116.009c1.582.872 4.357 1.942 8.599 2.139c6.397-.286 13.815-2.389 22.069-6.257c6.085-2.846 14.406-2.461 20.48.058l.029.01c9.476 3.385 15.439 10.215 15.589 17.87c.184 9.747-8.522 18.165-25.878 25.018c-2.118.835-4.694 1.655-7.434 2.525c-9.797 3.106-24.6 7.805-28.616 17.271c-2.079 4.904-1.256 11.211 2.46 18.748c.087.168.166.342.239.515c1.301 3.03 32.615 74.46 102.23 85.934c6.427 1.058 11.163 7.877 7.725 15.859z" fill="currentColor"></path></svg>
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
    height: fit-content;
    max-height: 290px;
    color: #000000;
    background-color: #ffffff;
    border-radius: 15px;
}
</style>