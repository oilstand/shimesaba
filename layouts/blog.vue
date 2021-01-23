<template>
  <div class="main-body">
    <header id="header">
        <div>
            <h1>
                <NuxtLink to="/">
                    Shimesaba.jp
                </NuxtLink>
            </h1>
            <ul>
                <li>
                    <NuxtLink to="/blog/">
                        Blog
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/excontents">
                        ExContents
                    </NuxtLink>
                </li>
            </ul>
        </div>
    </header>
    <div class="main_content">
        <div class="top_image">
            <h1>電子的な日常</h1>
            <p>パチスロ、プログラミング、電子工作等を記録するブログです。（アーカイブ版）</p>
        </div>
        <nuxt />
    </div>
    <footer>
        <div style="text-align: right;border: 0;padding: 0;">
            <NuxtLink to="/blog">
                Blog Topへ戻る
            </NuxtLink>
        </div>
        <div>
            2014-2021 &copy; Shimesaba.jp
        </div>
    </footer>
  </div>
</template>

<style scoped>
.top_image {
    background-image: url(/images/shimesaba/shimesaba_img.jpg);
}
@media screen and (max-width:959px) {
    .top_image {
    }
    .top_image h1 {
        font-size:28px;
        margin: 12px 0;
    }
    .top_image p {
        font-size: 14px;
    }
}
@media screen and (min-width:960px) {
    .top_image {
        padding:20px 40px 40px 40px;
    }
}
header {
    background-color:#222;
    border-color: #080808;
}
</style>
<script>
export default {
  head() {
      return {
            htmlAttrs: {
                lang: 'ja',
                prefix: 'og: http://ogp.me/ns#'
            },
            title: 'OILSTAND',
            meta: [
                { hid: 'description', name: 'description', content: `OILSTAND` },
                { hid: 'keywords', name: 'keywords', content: 'OILSTAND' },
                { hid: 'og:site_name', property: 'og:site_name', content: 'OILSTAND' },
                { hid: 'og:type', property: 'og:type', content: 'website' },
                { hid: 'og:url', property: 'og:url', content: 'https://oilstand.net' + this.$nuxt.$route.path },
                { hid: 'og:title', property: 'og:title', content: `OILSTAND` },
                { hid: 'og:description', property: 'og:description', content: 'OILSTAND' },
                { hid: 'og:image', property: 'og:image', content: 'https://oilstand.net/logo.png' },
                { name: 'twitter:card', content: 'summary' }
            ],
      }
  },
  data () {
    return {
    }
  },
  methods: {
  },
  computed: {
  },
  mounted() {
  }
}
</script>
