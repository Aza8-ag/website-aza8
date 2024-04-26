<template>
    <footer class="footer">
        <div class="container flex flex-col md:flex-row md:justify-between">
            <!-- brands -->
            <div class="flex items-center justify-start max-w-[920px] flex-wrap">

                <a v-for="brand in brands" :key="brand.id" :href="brand.link" target="_blank" class="mx-4 md:mx-6 my-2 md:my-3">
                    <img class="w-full h-full max-w-[100px] max-h-[50px]" :src="brand.url" :alt="brand.name" :title="brand.name">
                </a>

            </div>

            <div class="flex items-center mt-24 md:mt-0 justify-between">
                <div class="flex items-center">
                    <img src="@/assets/images/icon-loading.gif" alt="Imagem ilustrativa" class="mr-2 max-w-[24px]">
                    <p class="text-xs md:text-sm">Site oficial <br>em desenvolvimento</p>
                </div>

                <!-- social links -->
                <div class="flex md:hidden items-center">
                    <!-- whatsapp -->
                    <a href="https://wa.me/5511964684269" class="ml-4 max-w-[28px]">
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
                { name: 'Authentic Beauty Concept', url: '/brands/logo-abc.svg', link: 'https://www.authenticbeautyconcept.com.br/' },
                { name: 'Arond Group Holding', url: '/brands/logo-arond.svg', link: 'https://arondgroup.com.br/' },
                { name: 'Artec Revestimentos', url: '/brands/logo-artec.svg', link: 'https://artecrevestimentos.com.br/' },
                { name: 'Banco Digi+', url: '/brands/logo-digimais.svg', link: 'https://www.bancodigimais.com.br/' },
                { name: 'Henkel', url: '/brands/logo-henkel.svg', link: 'https://www.henkel.com/' },
                { name: 'KeyPay: Cloud Payroll Software', url: '/brands/logo-keypay.svg', link: 'https://www.keypay.com.au/' },
                { name: 'Kawahara Takano | Arquitetura de Negócios', url: '/brands/logo-kt.svg', link: 'https://kt.com.br/' },
                { name: 'Latem - A casa do mestre', url: '/brands/logo-latem.svg', link: 'https://www.lojaslatem.com.br/' },
                { name: 'Malwee: Moda feminina, masculina, plus size e infantil', url: '/brands/logo-malwee.svg', link: 'https://www.malwee.com.br/' },
                { name: 'Pamcary – Seguros Pamcary para você e sua empresa', url: '/brands/logo-pamcary.svg', link: 'https://www1.gps-pamcary.com.br/' },
                { name: 'Ri Happy Brinquedos - Quanto mais Brincadeira, Melhor!', url: '/brands/logo-rihappy.svg', link: 'https://www.rihappy.com.br/' },
                { name: 'Schwarzkopf Professional', url: '/brands/logo-schwarzkopf.svg', link: 'https://www.schwarzkopf-professional.com/br/pt.html' },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.footer {}
</style>