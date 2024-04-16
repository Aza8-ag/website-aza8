// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      'tailwindcss/nesting': {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      title: 'Aza8',
      htmlAttrs: {
        lang: "pt",
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },

        { hid: 'description', name: 'description', content: 'Aza8 é uma agência de comunicação com foco em tecnologia. Do conceito à experiência, criamos marcas que evoluem com o mundo a nossa volta.' },

        // open graph
        { hid: 'og:title', property: 'og:title', content: 'O mundo muda. A Aza8 muda com você.' },
        { hid: 'og:url', property: 'og:url', content: 'https://www.aza8.com.br/' },
        { hid: 'og:description', property: 'og:description', content: 'Aza8 é uma agência de comunicação com foco em tecnologia. Do conceito à experiência, criamos marcas que evoluem com o mundo a nossa volta.' },
        { hid: 'og:image', property: 'og:image', content: '/share.png' },

        // twitter card
        { hid: "twitter:title", name: "twitter:title", content: 'O mundo muda. A Aza8 muda com você.' },
        { hid: "twitter:url", name: "twitter:url", content: 'https://www.aza8.com.br/' },
        { hid: 'twitter:description', name: 'twitter:description', content: 'Aza8 é uma agência de comunicação com foco em tecnologia. Do conceito à experiência, criamos marcas que evoluem com o mundo a nossa volta.' },
        { hid: "twitter:image", name: "twitter:image", content: '/share.png' },
      ],
      link: [
        { hid: "canonical", rel: "canonical", href: 'https://www.aza8.com.br/' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    },
  },
  modules: ['@nuxtjs/google-fonts'],
  googleFonts: {
    families: {
      'DM Sans': true,
      'Bebas Neue': true,
    },
  },
})
