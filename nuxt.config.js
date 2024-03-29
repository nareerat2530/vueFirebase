import { join } from 'path'


export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'vueFirebase',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css','@fortawesome/fontawesome-svg-core/styles.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [

    { src: '~/plugins/vue-TextareaAutosize.js' },
    { src: '~/plugins/firebase' },
    {src :'~/plugins/fontawesome.js'},

  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ['@nuxt/postcss8', 
                 '@nuxtjs/fontawesome'
  ],
  


  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',

    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    

  ],
  auth: {
    strategies: {
      local: {
        token: {
          property: 'token',
          global: true,
          required: true,
          type: 'Bearer',
        },
        user: {
          // autoFetch: true
        },
        endpoints: {
          login: {
            url: 'https://localhost:7101/api/Authentication/Login',
            method: 'post',
          },
          // logout: { url: '/api/auth/logout', method: 'post' },
          user: {
            url: 'https://localhost:7101/api/User',
            method: 'get',
          },
        },
      },
    },
  },
  

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {  
    postcss: {
      plugins: {
        tailwindcss: join(__dirname, 'tailwind.config.js'),
          
    },
  },
}
}
