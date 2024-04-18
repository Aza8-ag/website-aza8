<template>
    <div class="cases">
        <swiper
            :pagination="{
                clickable: true,
                dynamicBullets: true,
                enabled: false,
            }"
            :modules="modules"
            :slidesPerView="'auto'"
            :spaceBetween="25"
            :centeredSlides="true"
            :navigation="{
                nextEl: '.next-case',
                prevEl: '.prev-case'
            }"
            v-if="cases.length"
        >
            <swiper-slide v-for="x in cases">
                <img v-if="x.type == 'image'" :src="x.path" alt="">
                <video v-if="x.type == 'video'" autoplay loop muted>
                    <source :src="x.path" type="video/mp4">
                </video>
            </swiper-slide>
        </swiper>

        <div class="swiper-button-prev prev-case"></div>
        <div class="swiper-button-next next-case"></div>
    </div>
</template>

<script>
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import 'swiper/css';
    import 'swiper/css/pagination';
    import 'swiper/css/navigation';
    import { Pagination, Navigation } from 'swiper/modules';

    export default {
        components: {
            Swiper,
            SwiperSlide,
        },
        data () {
            return {
                cases: [
                    { path: '/cases/VIDEO_BLONDME_1.mp4', type: 'video' },
                    { path: '/cases/ABC_PEGGY.jpg', type: 'image' },
                    { path: '/cases/bonacure_01.jpg', type: 'image' },
                    { path: '/cases/bonacure_02.jpg', type: 'image' },
                    { path: '/cases/VIDEO_LA_BELA_1.mp4', type: 'video' },
                    { path: '/cases/BONACURE_03.jpg', type: 'image' },
                    { path: '/cases/DIGI+_02.jpg', type: 'image' },
                    { path: '/cases/DIGI+.jpg', type: 'image' },
                    { path: '/cases/osis.jpg', type: 'image' },
                    { path: '/cases/poster_LA_BELA.jpg', type: 'image' },
                    { path: '/cases/tres_coracoes_01.jpg', type: 'image' },
                    { path: '/cases/tres_coracoes_02.jpg', type: 'image' },
                    { path: '/cases/ULTRA.jpg', type: 'image' },
                ]
            }
        },
        setup() {
            return {
                modules: [Pagination, Navigation],
            }
        },
    };
</script>

<style lang="scss">
.cases {
    @apply relative mt-20 md:mt-0 mb-10 md:mb-0;

    // swiper wrapper
    .swiper {
        @apply w-full h-full;
        @apply md:max-w-[600px] md:max-h-[600px];
    }

    // swiper slide item
    .swiper-slide {
        @apply max-w-full max-h-full;
        @apply md:max-w-[600px] md:max-h-[600px];
        img, video {
            @apply rounded-[30px];
        }
    }

    // swiper buttons
    .swiper-button-prev.prev-case,
    .swiper-button-next.next-case {
        &:after {
            @apply text-slate-100;
        }
    }

    .swiper-button-prev.prev-case { @apply lg:-ml-16; }
    .swiper-button-next.next-case { @apply lg:-mr-16; }

    // swiper pagination
    .swiper-pagination {
        .swiper-pagination-bullet {
            @apply text-slate-100;
        }
    }
}
</style>
