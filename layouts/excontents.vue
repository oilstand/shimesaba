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
            <h1>電子的な日常 -Contents-</h1>
            <p>ノリ打ち計算機などのツールを提供しています。</p>
        </div>
        <nuxt />
    </div>
    <footer>
        <div>
            2014-2021 &copy; Shimesaba.jp
        </div>
    </footer>
  </div>
</template>
<style>
.top_image {
    background-repeat: no-repeat;
    border-radius: 6px;
    color: #FFFFFF;
    position:relative;
    z-index:0;
    overflow: hidden;
}
.top_image::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: inherit;
    filter: blur(2px);
    z-index:-1;
}
.top_image h1 {
    font-weight:normal;
}
.top_image p {
    font-weight: 200;
}
@media screen and (max-width:959px) {
    .top_image {
        background-size: auto 100%;
        padding:16px;
    }
    .top_image h1 {
        font-size:32px;
        margin: 16px 0;
    }
    .top_image p {
        font-size: 16px;
        margin-bottom: 12px;
    }
}
@media screen and (min-width:960px) {
    .top_image {
        padding:48px 60px;
    }
    .top_image h1 {
        font-size: 63px;
        margin-top: 20px;
        margin-bottom: 10px;
    }
    .top_image p {
        font-size: 21px;
        margin-bottom: 15px;
    }
}
.main_content {
    max-width:1140px;
    margin:0 auto;
}
.report > p {

    margin:0 0 10px;
}
</style>
<style scoped>
@media screen and (max-width:959px) {
    .top_image h1 {
        font-size:28px;
        margin: 16px 0;
    }
    .top_image p {
        font-size: 14px;
    }
}
header {
    background-color:#033649;
    border-color: #080808;
}
.top_image {
    background-image: url(/blog/image/1778.jpg);
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
