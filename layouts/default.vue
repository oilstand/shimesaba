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
    <nuxt />
    <footer>
        <div>
            2014-2021 &copy; Shimesaba.jp
        </div>
    </footer>
  </div>
</template>

<style>
* {
    margin:0;padding:0;
}
body {
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
    background-color:#f9f9f9;
}
header {
    width: 100%;
    height: 50px;
    color: #999999;
}
@media screen and (max-width:959px) {
    header {
        margin-bottom: 4px;
    }
}
@media screen and (min-width:960px) {
    header {
        margin-bottom: 10px;
    }
}


header h1 {
    font-size:18px;
    padding:0 15px;
    font-weight:normal;
}
header ul {
    padding:0;
    margin:0;
    display:flex;
    list-style:none;
}
header ul li {
    margin:0;
    font-size:14px;
    line-height:50px;
}
header > div {
    display:flex;
    height:50px;
    padding:auto 15px;
    align-items: center;
}
header > div,
footer > div {
    max-width:1140px;
    margin:0 auto;
}
footer > div {
    border-top: 1px solid #eee;
    padding-top:20px;
}
header a {
    color: #999999;
    text-decoration:none;
}
header li > a {
    display:block;
    padding:0 15px;
    height:50px;
}
header a:hover {
    color:#FFFFFF;
}
hr {
    margin-top: 20px;
    margin-bottom: 20px;
    border: 0;
    border-top: 1px solid #eee;
}
</style>
<style scoped>
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
