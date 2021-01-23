<template>
    <div class="blog_report_content">
        <div class="report_header_container">
            <div class="thumbnail">
                <img src="/blog/image/36.jpg">
            </div>
            <div class="title_container">
                <h2 class="report_title">パチスロリールユニットの仕組みとか【パチスロ自作目指して・第３回】</h2>
                <p class="update_time">更新日:2014-08-28 17:00:00</p>
                <div class="share_area">
                    <a href="https://twitter.com/share" class="twitter-share-button" data-via="OIL_STAND" data-lang="ja" data-hashtags="電子的な日常">ツイート</a>
                </div>
            </div>
        </div>

        <div class="blog_report">

            <p>今回はパチスロのメイン。<br>
            リールユニットの取り外しと各部品の簡単な説明をします。</p>

            <p>今回利用するリールユニットはこちら。</p>

            <p><img src="/blog/image/37.jpg" style="max-width: 300px"><br>
            ５号機新鬼武者(ART)のリールユニットです。</p>

            <p><img src="/blog/image/38.jpg" style="max-width: 300px"><br>
            上から見た図。</p>
            <p>上の幅の広いコネクタはリールLED、<br>
            下の細いコネクタはリールの位置を確認するセンサのもの。<br>
            その隣のコネクタは、リールの制御用のものです。</p>
            <p>リールLEDコネクタはコードギアスよりも線の数が多くなっています。<br>
            これは恐らくバックライトを用いた演出を細かく行う為だと思われます。</p>
            <p><img src="/blog/image/39.jpg" style="max-width: 300px"><br>
            各リールの上下に黒いボタンがあります。<br>
            このボタンでリールユニット枠に固定されています<br>
            引っ張ってロックを外すと各リールを引っ張りだす事が出来ます。</p>
            <p><img src="/blog/image/40.jpg" style="max-width: 300px"><br>
            リールを取り出すとこのような感じ。</p>
            <p><img src="/blog/image/41.jpg" style="max-width: 300px"><br>
            奥に見える四角い物は、ステッピングモータと呼ばれるモーター。</p>
            <p>ステッピングモータは、通常のオンオフのみでの制御しか出来ないモータとは異なり、<br>
            〇〇度動かす等、細かい単位で動かす事の出来るモータです。<br>
            このモータを使う事によってリールの制御が可能となっています。</p>
            <p><img src="/blog/image/42.jpg" style="max-width: 300px"><br>
            見えにくいかもしれませんが、コの字となっているセンサと<br>
            リールの回転でその間を遮る位置にある遮蔽物。<br>
            これで、リールの細かい位置を把握しています。</p>
            <p>実際にパチスロを自作する際には、部品の自作は行わず<br>
            見た目とソフトウェアメインで改造という形で作ろうと考えています。</p>
            <p>第１回目：<a href="/blog/report/3">実機の中身とか簡単に説明【パチスロ自作めざして・第１回】</a><br>
            第２回目：<a href="/blog/report/11">データカウンタとの接続部(外部集中端子板)【パチスロ自作目指して・第２回】</a></p>

        </div>
    </div>
</template>
<script>
export default {
    layout:'blog',
    head() {
        return {
            titleTemplate: '',
            title: 'パチスロリールユニットの仕組みとか【パチスロ自作目指して・第３回】',
            meta: [
                { hid: 'description', name: 'description', content: `パチスロの改造やwebプログラミング、電子工作について書いています` },
                { hid: 'keywords', name: 'keywords', content: 'パチスロ,家スロ,777Town,プログラミング,ブログ,電子工作,ニコニコ生放送,備忘録,イヤホンコンバータ,webプログラミング' },
                { hid: 'og:site_name', property: 'og:site_name', content: '電子的な日常' },
                { hid: 'og:type', property: 'og:type', content: 'website' },
                { hid: 'og:url', property: 'og:url', content: 'https://shimesaba.jp' + this.$nuxt.$route.path },
                { hid: 'og:title', property: 'og:title', content: `パチスロリールユニットの仕組みとか【パチスロ自作目指して・第３回】` },
                { hid: 'og:description', property: 'og:description', content: '今回はデータカウンタとパチスロ実機との接続に使われる外部集中端子板について書こうかと思います' },
                { hid: 'og:image', property: 'og:image', content: 'https://shimesaba.jp/blog/image/36.jpg' },
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
