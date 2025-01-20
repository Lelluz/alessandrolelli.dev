export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      /* bodyAttrs: {
        class: 'bg-stone-950 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900'
      }, */
      link: [
        {
          rel: 'preconnect',
          href: 'https://rsms.me/',
        },
        {
          rel: 'stylesheet',
          href: 'https://rsms.me/inter/inter.css',
        },
      ],
    },
  },
  css: ['@/assets/scss/main.scss'],
  modules: ['@nuxtjs/tailwindcss'],
  runtimeConfig: {
    public: {
      PUBLIC_GTM_CONTAINER_ID: process.env.PUBLIC_GTM_CONTAINER_ID,
    },
  },
});
