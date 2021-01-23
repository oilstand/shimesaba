<template>
    <div class="blog_report_content">
        <div class="report_header_container">
            <div class="thumbnail">
                <img src="/blog/image/7.jpg">
            </div>
            <div class="title_container">
                <h2 class="report_title">実機の中身とか簡単に説明【パチスロ自作目指して・第一回】</h2>
                <p class="update_time">更新日:2014-08-20 17:00:29</p>
                <div class="share_area">
                    <a href="https://twitter.com/share" class="twitter-share-button" data-via="OIL_STAND" data-lang="ja" data-hashtags="電子的な日常">ツイート</a>
                </div>
            </div>
        </div>

        <div class="blog_report">

            <p>これまで考えていたパチスロの自作を少しずつやってみる事にしました！</p>

            <p>最後までやり切れるか怪しいですが<br>
            パチスロや、電子工作、プログラミングについて広く学べるかと思うので、<br>
            どれか一つでも興味がある方には読んでほしいですね！</p>

            <p>って事で、【パチスロ自作目指して・第一回】（仮題）を始めようかと思います！</p>

            <h3>パチスロメーカーと機体</h3>
            <p>まず、パチスロには色々な機種が存在しますが、<br>
            メーカーによって多少部品の配置が異なっています。</p>
            <p>メーカーが同じであっても、機体の種類によって配置が異なっていることもあります。<br>
            (同一メーカー、親、子会社関係であれば、同一筐体もあり得る<br></p>

            <p>丁度、近くに実機があったので写真を載せたいと思います<br></p>
            <p>KEP:マジカルハロウィン3</p>
            <p><img src="/blog/image/7.jpg" style="max-width: 240px;">
            <img src="/blog/image/8.jpg" style="max-width: 240px;">
            <img src="/blog/image/15.jpg" style="max-width: 240px;">
            </p>
            <p>内部は結構すっきりしており、電源は２枚目左下、設定変更鍵は２枚目右上にあります。<br>
            演出関連基盤の薄さ(３枚目リール窓上部基盤)が特徴的だと感じました。</p>
            <p>サミー:コードギアス</p>
            <p><img src="/blog/image/9.jpg" style="max-width: 240px;">
            <img src="/blog/image/10.jpg" style="max-width: 240px;">
            <img src="/blog/image/11.jpg" style="max-width: 240px;">
            </p>
            <p>メダル払い出しに利用されるホッパーを抜いてしまったので、３枚目は少しすっきりしてます<br>
            写真ではわかりにくいかもしれませんが、演出関係基盤の大きさ(２枚目リール窓上部)が目立ちます。<br>
            もうひとつ持っている機種の中で違うのが２枚目台枠部の配線の量。<br>
            これは、台枠をレインボーに光らせたりする為だと思われます。<br>
            (サミーの台枠レインボーが綺麗だと言われる理由かも</p>
            <p>電源、設定変更鍵は共に３枚目左下部にありました</p>
            <p>SANKYO:マクロスフロンティア-はじまりの歌、銀河に届け-</p>
            <p><img src="/blog/image/12.jpg" style="max-width: 240px;">
            <img src="/blog/image/13.jpg" style="max-width: 240px;">
            <img src="/blog/image/14.jpg" style="max-width: 240px;">
            </p>
            <p>特に目立つのは、２枚目リール窓上部の演出関係基盤の大きさ。<br>
            サミーよりも大きかったです。確かにコードギアスよりも映像の綺麗さでは勝っていて、<br>
            ３Ｄを用いたような映像、エピソードを積んでいるので納得ではあります。<br>
            あと、パネル付近に意外と基盤が乗っているのも特徴かもしれません。</p>
            <p>電源、設定変更鍵はサミーと同じく３枚目左下部にありました</p>
            <h3>まとめ</h3>
            <p>サンプルは３メーカー３機種だけですが、多少の部品の配置は異なるが、</p>
            <p>
            </p><ul>
            <li>メイン基盤は本体側リール上部</li>
            <li>演出基盤はドア側リール窓上部</li>
            <li>プッシュボタン、停止ボタン等関係の基盤はドア側リール窓下部</li>
            <li>電源、設定変更鍵は本体側</li>
            </ul>
            と、大体の配置は同じである事がわかったかと思います。<p></p>
            <p>実際に筐体を自作する際の参考にしようと思います</p>
        </div>
    </div>
</template>
<script>
export default {
    layout:'blog',
    head() {
        return {
            titleTemplate: '',
            title: '実機の中身とか簡単に説明【パチスロ自作目指して・第一回】',
            meta: [
                { hid: 'description', name: 'description', content: `パチスロの改造やwebプログラミング、電子工作について書いています` },
                { hid: 'keywords', name: 'keywords', content: 'パチスロ,家スロ,777Town,プログラミング,ブログ,電子工作,ニコニコ生放送,備忘録,イヤホンコンバータ,webプログラミング' },
                { hid: 'og:site_name', property: 'og:site_name', content: '電子的な日常' },
                { hid: 'og:type', property: 'og:type', content: 'website' },
                { hid: 'og:url', property: 'og:url', content: 'https://shimesaba.jp' + this.$nuxt.$route.path },
                { hid: 'og:title', property: 'og:title', content: `実機の中身とか簡単に説明【パチスロ自作目指して・第一回】` },
                { hid: 'og:description', property: 'og:description', content: 'これまで考えていたパチスロの自作を少しずつ進めたいと考え、やってみる事にしました！' },
                { hid: 'og:image', property: 'og:image', content: 'https://shimesaba.jp/blog/image/7.jpg' },
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
