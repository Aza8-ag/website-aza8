<template>
    <footer class="footer">
        <div class="container flex flex-col md:flex-row md:justify-between">
            <!-- cases -->
            <div class="flex items-center justify-center">
                <!-- Kawahara Takano -->
                <a href="https://kt.com.br/" class="mr-4 md:mr-6" target="_blank">
                    <img src="@/assets/images/logo-kt.svg" alt="Kawahara Takano | Arquitetura de Negócios (logo)" title="Kawahara Takano | Arquitetura de Negócios (logo)">
                </a>

                <!-- Pamcary -->
                <a href="https://www1.gps-pamcary.com.br/" class="mr-4 md:mr-6" target="_blank">
                    <img src="@/assets/images/logo-pamcary.svg" alt="Pamcary – Seguros Pamcary para você e sua empresa (logo)" title="Pamcary – Seguros Pamcary para você e sua empresa (logo)">
                </a>

                <!-- Henkel -->
                <a href="https://www.henkel.com.br/" class="mr-4 md:mr-6" target="_blank">
                    <img src="@/assets/images/logo-henkel.svg" alt="Henkel (logo)" title="Henkel (logo)">
                </a>

                <!-- 3 Corações -->
                <a href="https://www.3coracoes.com.br/" target="_blank">
                    <img src="@/assets/images/logo-3-coracoes.svg" alt="3 Corações (logo)" title="3 Corações (logo)">
                </a>
            </div>

            <div class="flex items-center mt-24 md:mt-0 justify-between">
                <div class="flex items-center">
                    <img src="@/assets/images/icon-loading.svg" alt="Imagem ilustrativa" class="mr-2">
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
}
</script>

<style lang="scss" scoped>
.footer {}
</style>