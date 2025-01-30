<template>
    <div>
        <header class="mb-5 md:mb-0">
            <div class="container flex items-start justify-center md:justify-between flex-col md:flex-row">
                <div class="flex flex-row items-end gap-4 justify-between">
                    <!-- logo -->
                    <NuxtLink to="/">
                        <img src="@/assets/images/logo-aza8.svg" alt="Aza8 (logo)" title="Aza8 (logo)">
                    </NuxtLink>
                    <Waiting class="lg:hidden" />
                </div>

                <div class="flex md:items-end gap-5 md:gap-14 xl:gap-18 flex-col md:flex-row"> 
                    <Waiting class="hidden lg:inline-flex my-1" />

                    <!-- menu -->
                    <ul class="ml-auto mt-12 mb-4 md:my-0 flex flex-row gap-4 md:gap-6">
                        <li v-for="item in menu" :key="item.id">
                            <button @click="useModal(item.id)" class="border-b-[1px] py-1 border-transparent hover:border-white transition-all">
                                {{ item.name }}
                            </button>
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
        
        <Modal v-if="modal.show" :id="modal.id" @close-modal="closeModal" />
    </div>
</template>

<script>
import Waiting from '@/components/Waiting/index.vue'
import Modal from '@/components/Modal/index.vue'

export default {
    data() {
        return {
            menu: [
                {
                    name: 'Sobre nós',
                    id: 'sobre-nos',
                },
                {
                    name: 'O que fazemos',
                    id: 'o-que-fazemos',
                },
                {
                    name: 'Liderança',
                    id: 'lideranca',
                },
            ],
            modal: {
                show: false,
                id: '',
            }
        }
    },
    components: {
        Waiting,
        Modal,
    },
    methods: {
        useModal(id) {
            this.modal.id = id
            this.modal.show = true
        },
        closeModal() {
            this.modal.id = ''
            this.modal.show = false
        }
    }
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