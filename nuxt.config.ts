// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
        '@nuxt/image','@nuxtjs/tailwindcss', 'shadcn-nuxt'
    ],
    shadcn: {
        /**
         * Prefix for all the imported component
         */
        prefix: '',
        /**
         * Directory that the component lives in.
         * @default "./components/ui"
         */
        componentDir: './components/ui'
    },
    runtimeConfig: {
        public: {
            PUBLIC_ALLOWED_DOMAINS: JSON.parse(process.env['PUBLIC_ALLOWED_DOMAINS'] || "[]") as string[]
        }
    }
})
