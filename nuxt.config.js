export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  server: {
    host: '0.0.0.0',
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
    script: [
      { src: 'https://www.googletagmanager.com/gtag/js?id=AW-11399990970', async: true },
      {
        innerHTML: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-11399990970');
        `,
        type: 'text/javascript',
        charset: 'utf-8'
      }
    ],
    __dangerouslyDisableSanitizersByTagID: {
      'gtag': ['innerHTML']
    }
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
