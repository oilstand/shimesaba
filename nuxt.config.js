
export default {
  ssr: false/*true*/,
  target: 'static',
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s | Shimesaba.jp',
    title: 'Shimesaba.jp',
    htmlAttrs: {
      lang: 'ja',
      prefix: 'og: http://ogp.me/ns#'
    },
    meta: [
        { charset: 'utf-8' },
        { 'http-equiv': 'content-language', content:'ja' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: `OILSTAND` },
        { hid: 'keywords', name: 'keywords', content: 'OILSTAND' },
        { hid: 'og:site_name', property: 'og:site_name', content: 'OILSTAND' },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:url', property: 'og:url', content: 'https://oilstand.net' },
        { hid: 'og:title', property: 'og:title', content: `OILSTAND` },
        { hid: 'og:description', property: 'og:description', content: 'OILSTAND' },
        { hid: 'og:image', property: 'og:image', content: 'https://oilstand.net/logo.png' },
        { name: 'twitter:card', content: 'summary' }
    ],
    link: [
/*      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', type: 'image/png', href: '/apple-touch-icon-180x180.png' },*/
      { rel: 'icon', type: 'image/png', href: '/icon.png' }
    ],
    script: [
      { src: 'https://www.youtube.com/iframe_api' }
    ]

  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxt/typescript-build',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/pwa',
    '@nuxtjs/gtm'
  ],
  gtm: {
    id: 'GTM-WWJ5LJL',
    pageTracking: true,
    pageViewEventName: 'nuxtRoute',
  },
  /*
  ** Build configuration
  */
  build: {
    extractCSS: true,
    analyze: false,
    hardSource: true,
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
