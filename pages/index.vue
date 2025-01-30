<template>
  <NuxtLayout :name="'home'">
    <div class="container flex flex-col md:flex-row items-center md:items-center md:justify-between lg:justify-start">
      <!-- content section -->
      <section class="text-center md:text-left w-full">
        <h1 class="bebas-neue-regular text-6xl xl:text-7xl xl:mt-6 mb-8 md:mb-16">
          O MUNDO MUDA. <br>
          A AZA8 MUDA <br>
          COM VOCÊ.
        </h1>
        <p class="max-w-[410px] mx-auto md:ml-0 leading-[1.25] font-light">A Aza8 é uma boutique de comunicação que transforma marcas em pontos decisivos de crescimento.</p>
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
  data() {
    return {}
  },
  components: {
    Cases
  }
}
</script>

<style lang="scss" scoped></style>