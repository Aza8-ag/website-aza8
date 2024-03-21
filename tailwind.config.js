/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '960px',
      'lg': '1165px',
      'xl': '1440px',
    },
    container: {
      center: true,
      padding: '1rem',
    },
    fontFamily: {
      'sans': ['DM Sans', 'serif'],
    }
  },
  plugins: [],
}