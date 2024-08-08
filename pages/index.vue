<template>
  <NuxtLayout :name="'home'">
    <div class="container flex flex-col md:flex-row items-center md:items-center md:justify-between lg:justify-start">
      <!-- content section -->
      <section class="text-center md:text-left w-full">
        <h1 class="font-light text-3xl xl:text-5xl xl:leading-[52px] xl:mt-6 mb-8 md:mb-20">
          Somos o lugar onde <br class="hidden md:block" />
          ideias se <br class="hidden md:block" />
          transformam em <br class="hidden md:block" />
          <span class="text-[#151515] font-normal underline">resultados</span>
        </h1>
        <p class="max-w-[350px] mx-auto md:ml-0 leading-[1.25] font-light">Do growth à experiência, criamos marcas que evoluem com o mundo a nossa volta.</p>
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