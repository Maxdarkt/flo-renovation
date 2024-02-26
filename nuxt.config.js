import { init } from '@emailjs/browser';

init({
  publicKey: process.env.EMAILJS_PUBLIC_KEY,
  privateKey: process.env.EMAILJS_PRIVATE_KEY,
  // Do not allow headless browsers
  blockHeadless: true,
  // blockList: {
  //   // Block the suspended emails
  //   list: ['foo@emailjs.com', 'bar@emailjs.com'],
  //   // The variable contains the email address
  //   watchVariable: 'userEmail',
  // },
  limitRate: {
    // Set the limit rate for the application
    id: 'app',
    // Allow 1 request per 10s
    throttle: 10000,
  },
});

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  server: {
    port: 8080,
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s FLO-RENOVATION',
    htmlAttrs: {
      lang: 'fr',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  router: {
    extendRoutes(routes, resolve) {
      routes.push(
      {
        name: 'Error',
        path: '/*',
        component: resolve(__dirname, 'pages/404.vue')
      })
    },
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/style.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxt/postcss8',
    // https://github.com/whardier/nuxt-hero-icons
    '@nuxt-hero-icons/outline/nuxt',
    '@nuxt-hero-icons/solid/nuxt',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/dotenv',
    ['nuxt-gmaps', {
      key: process.env.GOOGLE_MAPS_API_KEY_FLO,
      // you can use libraries: ['places']
    }],
  ],
  dotenv: {
    path: process.cwd(),
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    }
  },
}
