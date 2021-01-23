<template>
    <div class="blog_report_content">
        <div class="report_header_container">
            <div class="thumbnail">
                <img src="/blog/image/34.jpg">
            </div>
            <div class="title_container">
                <h2 class="report_title">データカウンタとの接続部(外部集中端子板)【パチスロ自作目指して・第２回】</h2>
                <p class="update_time">更新日:2014-08-27 17:00:00</p>
                <div class="share_area">
                    <a href="https://twitter.com/share" class="twitter-share-button" data-via="OIL_STAND" data-lang="ja" data-hashtags="電子的な日常">ツイート</a>
                </div>
            </div>
        </div>

        <div class="blog_report">

            <p>今回はデータカウンタとパチスロ実機との接続に使われる<br>
            外部集中端子板について書こうかと思います</p>

            <p><img src="/blog/image/35.jpg" style="max-height: 300px"><br>
            外部集中端子板VI型(コードギアスから取り外し)<br>
            上部のコネクタはメイン基盤へ、<br>
            下のコネクタはホルコン又はデータカウンタへ接続されます</p>

            <p>外部集中端子板には型があり、III、IV、V、VIが有る様です。<br>
            ５号機以前の機種等でない限り恐らくVI型になるかと思います<br>
            (どの型がどの時期等の情報は調べても出てきませんでした。自分が知る限り５号機はVI型です</p>
            <p>この<strong>外部集中端子板の役割は、</strong>コインの投入・払い出し信号や、<br>
            ボーナス信号(RB,BB)、エラー<strong>信号をパチスロ実機内部から外に出すという物</strong>です。<br>
            黒い四角い部品はリレーかと思われます。</p>
            <p>パチスロのレバーを叩いた時に台から聞こえるカチカチ音は、<br>
            この外部集中端子板のリレーから鳴っています。</p>
            <p><strong>何故、信号を内部から外部に出すだけなのにこの基板が必要なのか？</strong><br>
            これは遠隔操作等、外部から内部へ影響を与えようとする物を防ぐ為だと思われます。<br>
            リレーを使い、<strong>信号を内部から外への一方通行にする事によって不正を防ごうとしています。</strong></p>
            <p>又、内部と外部を接続する機械の電圧等の違いによる影響を無くす為でも有るかと思います。</p>

            <h3>カウンタ側コネクタピンアサイン</h3>
            <p>次に、この基板のデータカウンタ側出力のピン配置についてです。</p>
            <p>このピン配置は、データカウンタを作る人や修理する人に重要になってくるかと思います。<br>
            又、実機を作る人は一般的なデータカウンタを接続しても使えるように知っておくべき項目でもあります。</p>
            <p>この情報は以下のサイトさんを参考にしました。<br>
            <a href="http://hotpit777.blog.fc2.com/blog-entry-56.html">集中端子盤Ⅵ型からの変換ハーネスを安価っぽく作ってみる。</a> by <a href="http://hotpit777.blog.fc2.com">てらすと</a>さん</p>
            <p>ピン配置は、<br>
            1:コインIN<br>
            2:コインOUT<br>
            3:REG<br>
            4:BIG<br>
            5:<br>
            6:コモン<br>
            7:<br>
            8:セキュリティ(ドア開放等)<br>
            </p>
            <p>このピンアサインは標準的な機種の配置の為、<br>
            この配置通りとは言い切れません。</p>
            <p>この情報を使ってデータカウンタを作ろうかなぁと考えてたりします。</p>
            <p>第１回目：<a href="/blog/report/3">実機の中身とか簡単に説明【パチスロ自作めざして・第１回】</a></p><p></p>

        </div>
    </div>
</template>
<script>
export default {
    layout:'blog',
    head() {
        return {
            titleTemplate: '',
            title: 'データカウンタとの接続部(外部集中端子板)【パチスロ自作目指して・第２回】',
            meta: [
                { hid: 'description', name: 'description', content: `パチスロの改造やwebプログラミング、電子工作について書いています` },
                { hid: 'keywords', name: 'keywords', content: 'パチスロ,家スロ,777Town,プログラミング,ブログ,電子工作,ニコニコ生放送,備忘録,イヤホンコンバータ,webプログラミング' },
                { hid: 'og:site_name', property: 'og:site_name', content: '電子的な日常' },
                { hid: 'og:type', property: 'og:type', content: 'website' },
                { hid: 'og:url', property: 'og:url', content: 'https://shimesaba.jp' + this.$nuxt.$route.path },
                { hid: 'og:title', property: 'og:title', content: `データカウンタとの接続部(外部集中端子板)【パチスロ自作目指して・第２回】` },
                { hid: 'og:description', property: 'og:description', content: '今回はデータカウンタとパチスロ実機との接続に使われる外部集中端子板について書こうかと思います' },
                { hid: 'og:image', property: 'og:image', content: 'https://shimesaba.jp/blog/image/34.jpg' },
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
