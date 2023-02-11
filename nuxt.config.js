const development = process.env.NODE_ENV !== 'production'
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
  // router: {
  //   extendRoutes(routes, resolve) {
  //     routes.push(
  //     {
  //       name: 'Error',
  //       path: '/*',
  //       component: resolve(__dirname, 'pages/404.vue')
  //     })
  //   },
  // },
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
    '@nuxtjs/axios',
    ['nuxt-gmaps', {
      key: 'AIzaSyBmo_Gg_y6VDtA7PjEDR7mbRVyF-mACEPc',
      // you can use libraries: ['places']
    }]
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: development ? 'http://127.0.0.1:3000/api/' : 'https://www.mt-develop.com/api',
    headers: {
        common: {
          'Accept': 'application/json, text/plain, */*'
        },
        get: {'Content-Type': 'application/json'},
        post: {'Content-Type': 'application/json'},
        put: {'Content-Type': 'application/json'},
        delete: {'Content-Type': 'application/json'},
        head: {},
        patch: {}
    }
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
