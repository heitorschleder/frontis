// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
export default defineNuxtConfig({
  
  build: {
    transpile: ['vuetify'],
  },
  devtools: { enabled: true },
  css: ['~/assets/css/globals.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  components: {
    dirs: [
      "~/components",
    ],
    global: true
  },
  css: [
    "assets/colors.css",
    "assets/fonts.css",
    "assets/glider.css",
    "assets/globals.css",
  ],
  generate: {
    routes: []
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    //...
    '@nuxt/image',
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },

  runtimeConfig: {
    public: {
      PUBLIC_ALLOWED_DOMAINS: JSON.parse(process.env['PUBLIC_ALLOWED_DOMAINS'] || "[]") as string[]
    }
  }
})
