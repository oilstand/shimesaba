<template>
    <div class="blog_report_content">
        <div class="report_header_container">
            <div class="thumbnail">
                <img src="/blog/image/145.jpg">
            </div>
            <div class="title_container">
                <h2 class="report_title">パチスロ「まどかマギカ」　ユニメモ金枠にする為の回転数目安</h2>
                <p class="update_time">更新日:2014-09-26 17:00:28</p>
                <div class="share_area">
                    <a href="https://twitter.com/share" class="twitter-share-button" data-via="OIL_STAND" data-lang="ja" data-hashtags="電子的な日常">ツイート</a>
                </div>
            </div>
        </div>

        <div class="blog_report">
            <p>ついに念願のパチスロ魔法少女まどかマギカのユニメモ、<br>
            杏子カスタム金枠カンスト達成できました！！</p>

            <p><img src="/blog/image/145.jpg" style="max-width: 300px"></p>

            <p>今回は金枠カンストにどれ位のＧ数が必要なのかを書けたらと思います</p>
            <p>枠の色と形を変えるためには、レベルを９９にして転生を行う必要があります</p>
            <div style="border: solid 1px #111111;background-color:#F0F0F0;color: gray;margin: 10px;">レベル99で遊戯情報回収後、<br>
            アプリ「-魔法少女まどかマギカ-ユニメモカスタムコレクション」のカスタムから<br>
            レベル99のキャラを選択し転生ボタンを押して行いました</div>
            <p>金枠カンストにはこれを１０周分行う必要があり、１周分の約１０倍回せば到達できます<br>
            自分の場合１周に約８３００回転程かかりました。</p>
            <p>つまり、<span style="color: red;font-weight:bold;">金枠カンストには約８３０００回転の遊戯が必要</span>ということになりますねｗ</p>
            <p>実際のところ、レベル99になった後も回しているので、<br>
            99になったら直ぐに転生するともっと早く金枠カンストができそうです</p>
            <p>引きにも左右されるのであくまでも参考程度になると思います！</p>
            <p><img src="/blog/image/147.jpg" style="max-width: 300px"></p>

        </div>
    </div>
</template>
<script>
export default {
    layout:'blog',
    head() {
        return {
            titleTemplate: '',
            title: 'パチスロ「まどかマギカ」　ユニメモ金枠にする為の回転数目安 電子的な日常',
            meta: [
                { hid: 'description', name: 'description', content: `パチスロの改造やwebプログラミング、電子工作について書いています` },
                { hid: 'keywords', name: 'keywords', content: 'パチスロ,家スロ,777Town,プログラミング,ブログ,電子工作,ニコニコ生放送,備忘録,イヤホンコンバータ,webプログラミング' },
                { hid: 'og:site_name', property: 'og:site_name', content: '電子的な日常' },
                { hid: 'og:type', property: 'og:type', content: 'website' },
                { hid: 'og:url', property: 'og:url', content: 'https://shimesaba.jp' + this.$nuxt.$route.path },
                { hid: 'og:title', property: 'og:title', content: `パチスロ「まどかマギカ」　ユニメモ金枠にする為の回転数目安 電子的な日常` },
                { hid: 'og:description', property: 'og:description', content: '今回は金枠カンストにどれ位のＧ数が必要なのかを書けたらと思います' },
                { hid: 'og:image', property: 'og:image', content: 'https://shimesaba.jp/blog/image/145.jpg' },
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
