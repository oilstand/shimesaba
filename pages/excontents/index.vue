<template>
    <div class="report_content">
        <div class="report_header">
            <h2 class="report_title">コンテンツ</h2>
            <p class="update_time">便利なアプリを公開しています</p>
            <p class="bread"><NuxtLink to="/">Shimesaba</NuxtLink> ＞ <NuxtLink to="/excontents/">コンテンツ</NuxtLink></p>

            <div class="share_area">
                <a href="https://twitter.com/share" class="twitter-share-button" data-via="OIL_STAND" data-lang="ja" data-hashtags="電子的な日常">ツイート</a>
                <div class="fb-like" data-href="https://shimesaba.jp/excontents/" data-layout="button_count" data-action="like" data-show-faces="false" data-share="true" style="width: 155px;"></div>
            </div>

        </div>

        <div class="report">
            <p>便利なアプリを公開しています</p>
            <ul class="app_list">
                <li>
                    <NuxtLink to="/excontents/noriuchi">
                        <h3 style="">乗り打ち計算機</h3>
                        <p style="">乗り打ちの計算アプリを公開しています(ブラウザで動きます)</p>
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="#">
                        <h3 style="">Coming soon</h3>
                        <p style="">Coming soon</p>
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="#">
                        <h3 style="">Coming soon</h3>
                        <p style="">Coming soon</p>
                    </NuxtLink>
                </li>
            </ul>
            <p style="text-align: center;">↑クリックでコンテンツごとのページに飛びます</p>
        </div>

    </div>
</template>
<style>
.app_list li {
    border-radius: 8px;
    overflow: hidden;
    background-color: #f1ebe1;
    height:100px;
}
@media screen and (max-width:959px) {
    .report_content {
        padding:0 16px;
    }
    .app_list li {
        width:100%;
        margin-bottom:8px;
    }
}
@media screen and (min-width:960px) {
    .report_content {
        padding:15px;
    }
    .app_list li {
        width:calc(100% / 3 - 10px);
    }
}
.report_title {
    border-bottom: solid 3px #036564;
}
.report_header { 
    margin:15px 0;
}
.report_header .bread {
    font-size: 0.9em;
    margin: 8px 0;
}
.share_area {
    display:flex;
}
.app_list {
    padding:0;
    list-style:none;
    display:flex;
    flex-wrap:wrap;
    justify-content: space-between;
}
.app_list li a {
    text-decoration:none;
    display:block;
    width:100%;
    height:100%;
}
.app_list li a h3 {
    font-size:16px;
    text-align:center;
    line-height: 32px;
    background-color:#12A5A8;
    color: #ffffff;
}
.app_list li a p {
    display:block;
    padding:5px;
}
.app_list li a:hover h3 {
    color: lightpink;
}
.app_list li a:hover p {
    color: #2a6496;
    text-decoration: underline;
}
</style>
<style scoped>
</style>
<script>
export default {
    layout:'excontents',
    head() {
        return {
            titleTemplate: '',
            title: 'コンテンツ 電子的な日常 -Contents-',
            meta: [
                { hid: 'description', name: 'description', content: `ノリ打ち計算機などのツールを提供しています。` },
                { hid: 'keywords', name: 'keywords', content: '乗り打ち,ノリ打ち,のり打ち,計算機,電卓' },
                { hid: 'og:site_name', property: 'og:site_name', content: 'Shimesaba.jp -〆鯖-' },
                { hid: 'og:type', property: 'og:type', content: 'website' },
                { hid: 'og:url', property: 'og:url', content: 'https://shimesaba.jp' + this.$nuxt.$route.path },
                { hid: 'og:title', property: 'og:title', content: `コンテンツ 電子的な日常 -Contents-` },
                { hid: 'og:description', property: 'og:description', content: 'ノリ打ち計算機などのツールを提供しています。' },
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
        (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/ja_JP/sdk.js#xfbml=1&appId=648556075196139&version=v2.0";
        fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    }
}
</script>
