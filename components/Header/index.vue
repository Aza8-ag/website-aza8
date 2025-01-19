<template>
    <header>
        <div class="container flex items-start justify-center md:justify-between">
            <!-- logo -->
            <img src="@/assets/images/logo-aza8.svg" alt="Aza8 (logo)" title="Aza8 (logo)">

            <div class="flex items-center gap-10"> 
                <Waiting />

                <!-- menu -->
                <ul class="ml-auto">
                    <li>
                        <button @click="modal()">Sobre nós</button>
                    </li>
                </ul>

                <!-- social links -->
                <div class="hidden md:flex items-center social-links">
                    <!-- whatsapp -->
                    <a href="https://wa.me/5511964684269" class="py-2 px-1.5">
                        <img src="@/assets/images/icon-whatsapp.svg" alt="Whatsapp (logo)" title="Whatsapp (logo)" class="max-w-[25px]">
                    </a>
                    <!-- instagram -->
                    <a href="https://www.instagram.com/aza8.ag" class="py-2 px-1.5">
                        <img src="@/assets/images/icon-instagram.svg" alt="Instagram (logo)" title="Instagram (logo)" class="max-w-[25px]">
                    </a>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import Waiting from '@/components/Waiting/index.vue'

export default {
    data() {
        return {
            menu: [
                {
                    name: 'Sobre nós',
                    id: 'sobre-nos',
                },
            ]
        }
    },
    components: {
        Waiting,
    },
}
</script>

<style lang="scss" scoped>
.social-links img {
    @apply transition-all;
    &:hover {
        @apply scale-[1.05];
    }
}
</style>