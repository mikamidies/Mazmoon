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

  plugins: [],

  components: true,

  buildModules: [],

  modules: ["bootstrap-vue/nuxt", "@nuxtjs/axios", "@nuxtjs/pwa"],

  axios: {
    baseURL: "/",
  },

  pwa: {
    manifest: {
      lang: "en",
    },
  },

  build: {},

  ssr: false,
};
