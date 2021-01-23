<template>
    <div class="blog_report_content">
        <div class="report_header_container">
            <div class="thumbnail">
                <img src="/blog/image/58.jpg">
            </div>
            <div class="title_container">
                <h2 class="report_title">マジカルチャレンジ中のBGMが気になって</h2>
                <p class="update_time">更新日:2014-09-04 17:00:02</p>
                <div class="share_area">
                    <a href="https://twitter.com/share" class="twitter-share-button" data-via="OIL_STAND" data-lang="ja" data-hashtags="電子的な日常">ツイート</a>
                </div>
            </div>
        </div>

        <div class="blog_report">

            <p>マジカルチャレンジ中のBGMが気になったので調べてみました。<br>
            調べた結果、曲名は「Sis puella magica!」という曲の様です。</p>

            <p>この曲はアニメのCDに入っているようです。</p>

            <p>AmazonでCDの視聴できるようになったんだね。<br>
            曲リストを開くと視聴できるようです。</p>

        </div>
    </div>
</template>
<script>
export default {
    layout:'blog',
    head() {
        return {
            titleTemplate: '',
            title: 'マジカルチャレンジ中のBGMが気になって',
            meta: [
                { hid: 'description', name: 'description', content: `パチスロの改造やwebプログラミング、電子工作について書いています` },
                { hid: 'keywords', name: 'keywords', content: 'パチスロ,家スロ,777Town,プログラミング,ブログ,電子工作,ニコニコ生放送,備忘録,イヤホンコンバータ,webプログラミング' },
                { hid: 'og:site_name', property: 'og:site_name', content: '電子的な日常' },
                { hid: 'og:type', property: 'og:type', content: 'website' },
                { hid: 'og:url', property: 'og:url', content: 'https://shimesaba.jp' + this.$nuxt.$route.path },
                { hid: 'og:title', property: 'og:title', content: `マジカルチャレンジ中のBGMが気になって` },
                { hid: 'og:description', property: 'og:description', content: '内容は、タイトル通りで気になったので調べました。' },
                { hid: 'og:image', property: 'og:image', content: 'https://shimesaba.jp/blog/image/58.jpg' },
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
