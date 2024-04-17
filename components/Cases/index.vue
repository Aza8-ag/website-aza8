<template>
    <swiper
        :effect="'cards'"
        :grabCursor="true"
        :modules="modules"
        :pagination="true"
        :navigation="true"
        :allowTouchMove="false"
        v-if="cases.length"
    >
        <swiper-slide v-for="x in cases">
            <img v-if="x.type == 'image'" :src="x.path" alt="" loading="lazy">
            <video v-if="x.type == 'video'" autoplay loop muted loading="lazy">
                <source :src="x.path" type="video/mp4">
            </video>
        </swiper-slide>
    </swiper>
</template>

<script>
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import 'swiper/css';
    import 'swiper/css/effect-cards';
    import 'swiper/css/pagination';
    import 'swiper/css/navigation';
    import { EffectCards, Pagination, Navigation } from 'swiper/modules';

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
                modules: [EffectCards, Pagination, Navigation],
            }
        },
    };
</script>

<style lang="scss">
.swiper {
    @apply mt-16 mb-10 md:mt-0 md:mb-0 flex items-center justify-center pl-9;
    @apply max-w-[280px];

    .swiper-button-prev { @apply -ml-6; &:after { @apply text-white; } }
    .swiper-button-next { @apply -mr-5; &:after { @apply text-white; } }

    @media screen and (min-width: 375px) {
        @apply max-w-[320px];
    }

    @media screen and (min-width: 768px) {
        @apply max-w-[500px];
        .swiper-slide {
            @apply max-w-[450px] max-h-[450px];
        }
        .swiper-button-prev { @apply -ml-14; }
    }

    @media screen and (min-width: 1165px) {
        @apply max-w-[650px];
        .swiper-slide {
            @apply max-w-[550px] max-h-[550px];
        }
        .swiper-button-prev { @apply -ml-16; }
    }

    .swiper-slide {
        @apply max-w-[80%] max-h-[80%] w-full h-full flex items-center justify-center rounded-[30px];

        img, video {
            @apply max-w-full;
        }
    }

    .swiper-pagination {
        @apply -mb-14;
        .swiper-pagination-bullet {
            @apply bg-white;
        }
    }
}
</style>
