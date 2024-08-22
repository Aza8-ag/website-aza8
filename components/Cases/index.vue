<template>
    <div class="cases">
        <swiper
            :pagination="{
                clickable: true,
                dynamicBullets: true,
                enabled: true,
                el: '.custom-pagination',
            }"
            :modules="modules"
            :slidesPerView="'auto'"
            :spaceBetween="25"
            :centeredSlides="true"
            :navigation="{
                nextEl: '.next-case',
                prevEl: '.prev-case'
            }"
            :breakpoints="{
                '1440': {
                    spaceBetween: 60,
                },
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

        <div class="swiper-button-prev prev-case" />
        <div class="swiper-button-next next-case" />

        <div class="swiper-pagination custom-pagination" />
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
                    { path: '/cases/01_VIDEO_OOH ABC_02.mp4', type: 'video' },
                    { path: '/cases/02_VIDEO_BLONDME.mp4', type: 'video' },
                    { path: '/cases/03_VIDEO_LA_BELA.mp4', type: 'video' },
                    { path: '/cases/04_VIDEO_ABC.mp4', type: 'video' },
                    { path: '/cases/05_3_S2.jpg', type: 'image' },
                    { path: '/cases/06_DIGI.jpg', type: 'image' },
                    { path: '/cases/07_ULTRA.jpg', type: 'image' },
                    { path: '/cases/08_LA_BELA.jpg', type: 'image' },
                    { path: '/cases/09_OSIS.jpg', type: 'image' },
                    { path: '/cases/10_BONACURE.jpg', type: 'image' },
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
        transform: scale(.8);
        &:after {
            @apply text-slate-100;
        }
        &:not(.swiper-button-disabled) {
            opacity: 0.85;
            transition: all .1s ease-in;
            &:hover {
                opacity: 1;
            }
        }
    }

    .swiper-button-prev.prev-case { @apply xl:-ml-14; }
    .swiper-button-next.next-case { @apply xl:-mr-14; }

    // swiper pagination
    .custom-pagination {
        @apply -mb-10;
        .swiper-pagination-bullet {
            @apply bg-white;
        }
    }
}
</style>
