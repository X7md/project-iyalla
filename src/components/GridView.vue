<template>
    <div>
        <div>
            <div>
            <div class="dropdown py-3 px-2">
                <span>أكتشف المرح في </span>
                <button class="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    كل مكان
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li v-for="(name, index) in ['جدة', 'أبها', 'أملج']" :key="index">
                        <a class="dropdown-item" v-text="name"></a>
                        </li>
                </ul>
                </div>
            </div>
            <section class="grid">
                <div class="row justify-content-evenly">
                    <!--Card-->
                    <div class="col-5 col-lg-3 my-2">
                    <div class="card">
                        <div class="card-body text-center">
                            <div class="card-title">
                                <h6>المطاعم والمقاهي</h6>
                            </div>
                           <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--fluent" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 20 20"><g fill="none"><path d="M4 3.956c0-1.095.895-2.022 2.03-1.952c4.447.274 8.347 1.77 11.402 4.687c.867.827.696 2.178-.203 2.868l-.244.188l-.397-.441l-.007-.007C13.645 6.284 9.39 4.514 4.871 4.514H4v-.558zm0 1.557V16.5c0 1.232 1.406 1.938 2.395 1.201l1.608-1.198v.002a1 1 0 0 0 2 0v-2.002a.5.5 0 0 1 .996-.059v.56a1 1 0 0 0 2 0v-2.238c.825-.605 2.086-1.564 3.19-2.408l-.331-.369C13.119 7.181 9.13 5.513 4.87 5.513H4zm4.248 2.742a.747.747 0 1 1-1.495-.001a.747.747 0 0 1 1.495 0zm2.975 2a.747.747 0 1 1-1.495 0a.747.747 0 0 1 1.495 0zm-2.967 2.502a.751.751 0 1 1-1.503 0a.751.751 0 0 1 1.503 0z" fill="#000000"></path></g></svg>
                    </div>
                </div>
                </div>
                <!--End Card-->
                <!--Card-->
                    <div class="col-5 col-lg-3 my-2">
                    <div class="card">
                        <div class="card-body text-center">
                            <div class="card-title">
                                <h6>الرحلات</h6>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--fluent" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none"><path d="M9.35 5.321a6.75 6.75 0 0 1 11.692 6.75l-.25.433a.75.75 0 0 1-1.025.275l-4.558-2.632l-2.373 4.152c1.905.226 3.59 1.21 4.843 2.615a2.002 2.002 0 0 0-1.3.802C15.214 16.508 13.666 15.75 12 15.75c-1.666 0-3.214.758-4.38 1.966a2.002 2.002 0 0 0-1.299-.802c1.24-1.39 2.903-2.368 4.783-2.607l2.806-4.91l-4.535-2.618A.75.75 0 0 1 9.1 5.754l.25-.433zm1.43.537l1.966 1.135c.534-.82 1.074-1.493 1.743-2.102a11.15 11.15 0 0 1 1.826-1.326a5.253 5.253 0 0 0-5.535 2.293zm5.81 3.354c.554-.997.82-1.79.916-2.555c.077-.621.047-1.256-.064-2.01c-.818.46-1.43.886-1.944 1.354c-.533.485-.981 1.031-1.451 1.743l2.543 1.468zm1.299.75l1.974 1.14a5.253 5.253 0 0 0-.857-6.02a7.98 7.98 0 0 1-.012 1.761c-.126 1.01-.476 1.992-1.105 3.12zM6.714 18.66a.75.75 0 0 0-1.444.056c-.21.89-.607 1.364-1.041 1.634c-.46.286-1.05.401-1.729.401a.75.75 0 0 0 0 1.5c.822 0 1.73-.135 2.521-.627a3.504 3.504 0 0 0 1.062-1.029c1.552 1.866 4.41 1.856 5.917-.029c1.534 1.919 4.466 1.895 5.997-.071c.848 1.109 2.17 1.756 3.503 1.756a.75.75 0 0 0 0-1.5c-1.183 0-2.384-.797-2.784-2.084a.75.75 0 0 0-1.43-.008c-.784 2.44-3.81 2.4-4.575.105a.75.75 0 0 0-1.422 0c-.765 2.294-3.791 2.335-4.575-.105z" fill="currentColor"></path></g></svg>
                    </div>
                </div>
                </div>
                <!--End Card-->
                <!--Card-->
                <div class="col-5 col-lg-3 my-2">
                    <div class="card">
                        <div class="card-body text-center">
                            <div class="card-title">
                                <h6>المغامرات</h6>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--fluent" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 20 20"><g fill="none"><path d="M9.104 2.899a1 1 0 0 1 1.794 0l1.93 3.911l4.317.627a1 1 0 0 1 .554 1.706l-3.124 3.045l.738 4.299a1 1 0 0 1-1.451 1.054l-3.86-2.03l-3.862 2.03a1 1 0 0 1-1.45-1.054l.737-4.3l-3.124-3.044a1 1 0 0 1 .554-1.706l4.317-.627L9.104 2.9z" fill="currentColor"></path><path d="M4.39 12.688a.5.5 0 0 1-.078.702l-2.5 2a.5.5 0 1 1-.624-.78l2.5-2a.5.5 0 0 1 .702.078z" fill="currentColor"></path><path d="M4.312 5.11a.5.5 0 0 1-.624.78l-2.5-2a.5.5 0 1 1 .624-.78l2.5 2z" fill="currentColor"></path><path d="M15.61 12.688a.5.5 0 0 0 .078.702l2.5 2a.5.5 0 1 0 .624-.78l-2.5-2a.5.5 0 0 0-.703.078z" fill="currentColor"></path><path d="M15.688 5.11a.5.5 0 0 0 .624.78l2.5-2a.5.5 0 1 0-.624-.78l-2.5 2z" fill="currentColor"></path></g></svg>
                    </div>
                </div>
                </div>
                <!--End Card-->
            </div>
            </section>
        </div>
    </div>
</template>

<script setup>
    import drop from 'bootstrap/js/src/dropdown.js'
</script>

<style scoped>
.grid {
    color: #000000
}
</style>