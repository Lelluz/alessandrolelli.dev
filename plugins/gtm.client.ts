export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hooks.hook('vue:setup', () => {
    const {
      public: { PUBLIC_GTM_CONTAINER_ID },
    } = useRuntimeConfig();

    if (PUBLIC_GTM_CONTAINER_ID) {
      useHead({
        script: [
          {
            children: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${PUBLIC_GTM_CONTAINER_ID}');`,
            tagPriority: 'high',
          },
        ],
        noscript: [
          {
            children: `<iframe src="https://www.googletagmanager.com/ns.html?id=${PUBLIC_GTM_CONTAINER_ID}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
            tagPosition: 'bodyOpen',
          },
        ],
      });
    }
  });
});
