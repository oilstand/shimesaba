<template>
    <div class="blog_report_content">
        <div class="report_header_container">
            <div class="thumbnail">
                <img src="/blog/image/1840.jpg">
            </div>
            <div class="title_container">
                <h2 class="report_title">乗り打ち計算アプリ公開しました【新ページ公開】</h2>
                <p class="update_time">更新日:2015-03-15 08:00:00</p>
                <div class="share_area">
                    <a href="https://twitter.com/share" class="twitter-share-button" data-via="OIL_STAND" data-lang="ja" data-hashtags="電子的な日常">ツイート</a>
                </div>
            </div>
        </div>

        <div class="blog_report">

            <p>新しく<a href="/excontents" target="_blank">コンテンツページ</a>の公開を開始しました！<br>
            コンテンツページでは、現在乗り打ちの仕方（計算方法）を紹介しています<br>
            <br>
            そして、個人の投資・回収を入力するとその計算方式での計算結果が計算できるjavascriptアプリも用意しています<br>
            これからもいろいろ便利なツールを公開する予定なのでよろしくお願いします！</p>

            <p><a href="/excontents" target="_blank">コンテンツページ(https://shimesaba.jp/excontents)</a></p>

        </div>
    </div>
</template>
<style scoped>
.thumbnail img {
    max-width:100%;
}
</style>
<script>
export default {
    layout:'blog',
    head() {
        return {
            titleTemplate: '',
            title: '乗り打ち計算アプリ公開しました【新ページ公開】',
            meta: [
                { hid: 'description', name: 'description', content: `パチスロの改造やwebプログラミング、電子工作について書いています` },
                { hid: 'keywords', name: 'keywords', content: 'パチスロ,家スロ,777Town,プログラミング,ブログ,電子工作,ニコニコ生放送,備忘録,イヤホンコンバータ,webプログラミング' },
                { hid: 'og:site_name', property: 'og:site_name', content: '電子的な日常' },
                { hid: 'og:type', property: 'og:type', content: 'website' },
                { hid: 'og:url', property: 'og:url', content: 'https://shimesaba.jp' + this.$nuxt.$route.path },
                { hid: 'og:title', property: 'og:title', content: `乗り打ち計算アプリ公開しました【新ページ公開】` },
                { hid: 'og:description', property: 'og:description', content: '新しくコンテンツページの公開を開始しました！' },
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
