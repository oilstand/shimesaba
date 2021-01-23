<template>
    <div style="max-width:1140px;margin:0 auto;">
        <div class="top_image">
            <h1>Shimesaba.jp</h1>
            <p>oilstand関連サイトのポータルサイトです。</p>
        </div>
        <ul class="site_list">
            <li class="ele_blo">
                <NuxtLink to="/blog/">
                    <h2>電子的な日常</h2>
                    <p>OILSTANDのパチスロ、プログラミング、電子工作等を記録するブログです</p>
                </NuxtLink>
            </li>
            <li class="shimesaba_content">
                <NuxtLink to="/excontents">
                    <h2>Shimesaba Contents</h2>
                    <p>パチスロホールでの立ち回りに便利なツールを公開しています</p>
                </NuxtLink>
            </li>
            <li class="coming_soon">
                <a href="https://www.circlecheck.site/">
                    <h2>サークルチェック.site</h2>
                    <p>Twitterのフォローリストから即売会の参加者を探します。</p>
                </a>
            </li>
            <li class="coming_soon">
                <NuxtLink to="#">
                    <h2>Coming soon</h2>
                    <p>Coming soon.....</p>
                </NuxtLink>
            </li>
            <li class="coming_soon">
                <NuxtLink to="#">
                    <h2>Coming soon</h2>
                    <p>Coming soon.....</p>
                </NuxtLink>
            </li>
            <li class="coming_soon">
                <NuxtLink to="#">
                    <h2>Coming soon</h2>
                    <p>Coming soon.....</p>
                </NuxtLink>
            </li>
        </ul>
    </div>
</template>
<style scoped>
.top_image {
    background-image: url(/images/shimesaba/shimesaba_img.jpg);
}
.site_list {
    list-style:none;
    padding:0;
    display:flex;
    flex-wrap:wrap;
    justify-content: space-between;
}
.site_list > li {
    height:120px;
    background-color:#e2e2e2;
    border-radius: 10px;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    overflow: hidden;
}
.site_list h2 {
    font-weight: normal;
    position:relative;
    z-index:0;
}
.site_list p {
    display: block;
    padding: 4px 8px;
    color:#428bca;
}
@media screen and (max-width:959px) {
    .site_list {
        margin:8px 0;
    }
    .site_list > li {
        width:calc(100% / 2 - 4px);
        margin-bottom: 8px;
    }
    .site_list h2 {
        height: 1.5em;
        padding-left: 8px;
        font-size: 1.0em;
        line-height: 1.5em;
    }
    .site_list p {
        font-size: 0.8em;
    }
}
@media screen and (min-width:960px) {
    .site_list {
        margin:15px 0;
    }
    .site_list > li {
        width:calc(100% / 3 - 10px);
        margin-bottom: 15px;
    }
    .site_list h2 {
        height: calc(1.1em + 10px);
        padding-left: 15px;
    }
}
.site_list > li h2::before {
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
.site_list a {
    display:block;
    width:100%;
    height:100%;
    text-decoration:none;
    color:#ffffff;
}
.site_list a:hover p {
    color: #2a6496;
    text-decoration: underline;
}
.site_list a:hover h2 {
    color: lightpink;
}
.ele_blo h2 {
    background-repeat: no-repeat;
    background-image: url(/images/shimesaba/shimesaba_img.jpg);
}
.shimesaba_content h2 {
    background-repeat: no-repeat;
    background-image: url(/blog/image/1839.jpg);
}
.coming_soon h2 {
    background-repeat: no-repeat;
    background-image: url(/images/shimesaba/shimesaba_comingsoon.jpg);
}
</style>
<style>
</style>
<script>
export default {
    layout:'default',
    head() {
        return {
            titleTemplate: '',
            title: 'Shimesaba.jp -〆鯖-',
            meta: [
                { hid: 'description', name: 'description', content: `oilstand関連サイトのポータルサイトです。` },
                { hid: 'keywords', name: 'keywords', content: 'Shimesaba' },
                { hid: 'og:site_name', property: 'og:site_name', content: 'Shimesaba.jp -〆鯖-' },
                { hid: 'og:type', property: 'og:type', content: 'website' },
                { hid: 'og:url', property: 'og:url', content: 'https://shimesaba.jp' + this.$nuxt.$route.path },
                { hid: 'og:title', property: 'og:title', content: `Shimesaba.jp -〆鯖-` },
                { hid: 'og:description', property: 'og:description', content: 'oilstand関連サイトのポータルサイトです。' },
                { hid: 'og:image', property: 'og:image', content: 'https://shimesaba.jp/blog/image/1840.jpg' },
                { name: 'twitter:card', content: 'summary' }
            ],
        }
    },
    data () {
        return {
        }
    },
    methods: {
        twitterWidgetLoad() {
            if(!window.twttr) {
                window.twttr = (function(d, s, id) {
                    var js, fjs = d.getElementsByTagName(s)[0],
                        t = window.twttr || {};
                    if (d.getElementById(id)) return t;
                    js = d.createElement(s);
                    js.id = id;
                    js.src = "https://platform.twitter.com/widgets.js";
                    fjs.parentNode.insertBefore(js, fjs);

                    t._e = [];
                    t.ready = function(f) {
                        t._e.push(f);
                    };

                    return t;
                }(document, "script", "twitter-wjs"));
            } else {
                twttr.widgets.load();
            }
        }
    },
    computed: {
    },
    mounted() {
        this.twitterWidgetLoad();
    }
}
</script>
