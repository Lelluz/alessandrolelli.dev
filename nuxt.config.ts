export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      link: [
        {
          rel: 'preconnect',
          href: 'https://rsms.me/'
        },
        {
          rel: 'stylesheet',
          href: 'https://rsms.me/inter/inter.css'
        }
      ]
    },
  }
})
