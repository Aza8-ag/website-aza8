<template>
    <footer class="footer">
        <div class="container flex flex-col md:flex-row justify-center items-center md:justify-between">
            <!-- brands component -->
            <Brands />

            <div class="flex items-center mt-24 md:mt-0 justify-between">
                <!-- social links -->
                <div class="flex md:hidden items-center">
                    <!-- whatsapp -->
                    <a href="https://wa.me/5511964684269" class="max-w-[28px]">
                        <img src="@/assets/images/icon-whatsapp.svg" alt="Whatsapp (logo)" title="Whatsapp (logo)">
                    </a>
                    <!-- instagram -->
                    <a href="https://www.instagram.com/aza8.ag" class="ml-2 max-w-[28px]">
                        <img src="@/assets/images/icon-instagram.svg" alt="Instagram (logo)" title="Instagram (logo)">
                    </a>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
import Brands from '@/components/Brands/index.vue'

export default {
    data() {
        return {}
    },
    components: {
        Brands,
    }
}
</script>

<style lang="scss" scoped>
.footer {}
</style>