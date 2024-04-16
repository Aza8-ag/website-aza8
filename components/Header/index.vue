<template>
    <header>
        <div class="container flex items-start justify-center md:justify-between">
            <!-- logo -->
            <nuxt-link to="/">
                <img src="@/assets/images/logo-aza8.svg" alt="Aza8 (logo)" title="Aza8 (logo)">
            </nuxt-link>

            <!-- social links -->
            <div class="hidden md:flex items-center">
                <!-- whatsapp -->
                <a href="https://wa.me/5511964684269" class="ml-4">
                    <img src="@/assets/images/icon-whatsapp.svg" alt="Whatsapp (logo)" title="Whatsapp (logo)" class="max-w-[45px]">
                </a>
                <!-- instagram -->
                <a href="https://www.instagram.com/aza8.ag" class="ml-2">
                    <img src="@/assets/images/icon-instagram.svg" alt="Instagram (logo)" title="Instagram (logo)" class="max-w-[45px]">
                </a>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    data() {
        return {
        }
    }
}
</script>

<style lang="scss" scoped>
a > img {
    @apply transition-all;
    &:hover {
        @apply scale-[1.075];
    }
}
</style>