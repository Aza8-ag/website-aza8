<template>
  <NuxtLayout>
    <div class="container flex flex-col md:flex-row items-center md:items-start md:justify-between lg:justify-start">
      <!-- content section -->
      <section class="text-center md:text-left w-full">
        <h1 class="bebas-neue-regular text-6xl xl:text-7xl xl:mt-6 mb-8 md:mb-20">
          O MUNDO MUDA. <br>
          A AZA8 MUDA <br>
          COM VOCÊ.
        </h1>
        <p class="max-w-[350px] mx-auto md:ml-0">Aza8 é uma agência de <br class="hidden md:block">comunicação com foco em tecnologia. Do conceito à experiência, criamos marcas que evoluem com o mundo a nossa volta.</p>
      </section>

      <!-- cases section -->
      <section class="w-full flex items-center justify-center">
        <Cases />
      </section>
    </div>
  </NuxtLayout>
</template>

<script>
import Cases from '@/components/Cases/index.vue'

export default {
  components: {
    Cases
  }
}
</script>

<style lang="scss" scoped>
</style>