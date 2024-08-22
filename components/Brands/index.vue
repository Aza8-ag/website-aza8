<template>
    <div class="brands">
        <ClientOnly>
            <Vue3Marquee :duration="40">
                <span class="brands__item" v-for="brand in brands" :key="brands.id">
                    <img :src="brand.url" :alt="brand.name">
                </span>
            </Vue3Marquee>
        </ClientOnly>
    </div>
</template>

<script>
import { Vue3Marquee } from 'vue3-marquee'

export default {
  components: {
    Vue3Marquee,
  },
  data () {
        return {
            brands: [
                { name: 'Café 3 Corações', url: '/brands/logo-3-coracoes.svg', link: 'https://www.cafe3coracoes.com.br/' },
                { name: 'Authentic Beauty Concept', url: '/brands/logo-abc.svg', link: 'https://www.clubedocabelopro.com.br/' },
                { name: 'Artec Revestimentos', url: '/brands/logo-artec.svg', link: 'https://artecrevestimentos.com.br/' },
                { name: 'Banco Digi+', url: '/brands/logo-digimais.svg', link: 'https://www.bancodigimais.com.br/' },
                { name: 'Henkel', url: '/brands/logo-henkel.svg', link: 'https://www.henkel.com/' },
                { name: 'KeyPay - O melhor ecossistema de pagamentos!', url: '/brands/logo-keypay.svg', link: 'https://www.keypay.com.br/' },
                { name: 'Kawahara Takano | Arquitetura de Negócios', url: '/brands/logo-kt.svg', link: 'https://kt.com.br/' },
                { name: 'Latem - A casa do mestre', url: '/brands/logo-latem.svg', link: 'https://www.lojaslatem.com.br/' },
                { name: 'Malwee: Moda feminina, masculina, plus size e infantil', url: '/brands/logo-malwee.svg', link: 'https://www.malwee.com.br/' },
                { name: 'Pamcary – Seguros Pamcary para você e sua empresa', url: '/brands/logo-pamcary.svg', link: 'https://www1.gps-pamcary.com.br/' },
                { name: 'Ri Happy Brinquedos - Quanto mais Brincadeira, Melhor!', url: '/brands/logo-rihappy.svg', link: 'https://www.rihappy.com.br/' },
                { name: 'Schwarzkopf Professional', url: '/brands/logo-schwarzkopf.svg', link: 'https://www.clubedocabelopro.com.br/' },

                { name: '', url: '/brands/logo-combo-logistica.png', link: '' },
                { name: '', url: '/brands/logo-dia.png', link: '' },
                { name: '', url: '/brands/logo-galo-portugal.png', link: '' },
                { name: '', url: '/brands/logo-lexus.png', link: '' },
                { name: '', url: '/brands/logo-porto.png', link: '' },
                { name: '', url: '/brands/logo-semorin.png', link: '' },
            ]
        }
    }
}
</script>

<style lang="scss">
.brands {
    @apply w-full max-w-3xl;
    &__item {
        @apply mx-1 p-3;

        img {
            @apply w-full h-full max-w-[85px] max-h-[60px];
        }
    }
}
</style>
