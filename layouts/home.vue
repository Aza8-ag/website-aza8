<template>
  <div class="py-8 sm:py-12 lg:py-16 min-h-screen flex justify-between flex-col">
    <Header />
    <main class="pt-10 md:pt-20 pb-24">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/Footer/index.vue'
import Header from '@/components/Header/index.vue'

export default {
  data() {
    return {}
  },
  components: {
    Footer, Header
  }
}
</script>