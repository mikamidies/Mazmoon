export default {
  head: {
    title: "Mazmoon",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  css: ["@/assets/css/main.css"],

  plugins: [
    "@/plugins/aos.client.js",
    { src: "@/plugins/replain.js", mode: "client" },
    { src: "@/plugins/v-mask.js", ssr: false },
  ],

  components: true,

  buildModules: [],

  modules: [
    "bootstrap-vue/nuxt",
    "@nuxtjs/axios",
    "@nuxtjs/pwa",
    "vue-toastification/nuxt",
  ],

  axios: {
    baseURL: "https://mazmoonweb.pythonanywhere.com/api",
  },

  pwa: {
    manifest: {
      lang: "en",
    },
  },

  build: {
    babel: {
      compact: true,
    },
    vendor: ["aos"],
    standalone: true,
    extend(config, ctx) {
      config.externals = [
        {
          encoding: "encoding",
        },
      ];
    },
  },
};
