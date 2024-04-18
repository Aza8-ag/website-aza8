<template>
  <NuxtLayout>
    <div class="container flex flex-col md:flex-row items-center md:items-start md:justify-between">
      <!-- content section -->
      <section class="text-center md:text-left">
        <h1 class="bebas-neue-regular text-6xl mb-8 md:mb-20">
          O MUNDO MUDA. <br>
          A AZA8 MUDA <br>
          COM VOCÊ.
        </h1>
        <p class="max-w-[350px]">Aza8 é uma agência de comunicação com foco em tecnologia. Do conceito à experiência, criamos marcas que evoluem com o mundo a nossa volta.</p>
      </section>

      <!-- cases section -->
      <section>
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