<template>
    <footer class="footer">
        <div class="container flex flex-col md:flex-row justify-center items-center md:justify-between">
            <!-- brands -->
            <div class="flex items-center justify-start max-w-[350px] sm:max-w-[600px] lg:max-w-[850px] flex-wrap lg:-ml-10">

                <div v-for="brand in brands" :key="brand.id" class="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6 flex items-center justify-center my-4">
                    <a :href="brand.link" target="_blank">
                        <img class="w-full h-full max-w-[85px] max-h-[60px]" :src="brand.url" :alt="brand.name" :title="brand.name">
                    </a>
                </div>

            </div>

            <div class="flex items-center mt-24 md:mt-0 justify-between">
                <div class="flex items-center">
                    <img src="@/assets/images/icon-loading.gif" alt="Imagem ilustrativa" class="mr-2 max-w-[24px]">
                    <p class="text-xs md:text-sm">Site oficial <br>em desenvolvimento</p>
                </div>

                <!-- social links -->
                <div class="flex md:hidden items-center">
                    <!-- whatsapp -->
                    <a href="https://wa.me/5511964684269" class="ml-10 max-w-[28px]">
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
export default {
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
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.footer {}
</style>