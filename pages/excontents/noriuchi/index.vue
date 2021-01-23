<template>
    <div class="report_content">
        <div class="report_header">
            <h2 class="report_title">乗り打ち計算機</h2>
            <p class="update_time">乗り打ちの計算を助けます</p>
            <p class="bread"><NuxtLink to="/">Shimesaba</NuxtLink> ＞ <NuxtLink to="/excontents/">コンテンツ</NuxtLink> ＞ <NuxtLink to="/excontents/noriuchi">乗り打ち計算機</NuxtLink></p>

            <div class="share_area">
                <a href="https://twitter.com/share" class="twitter-share-button" data-via="OIL_STAND" data-lang="ja" data-hashtags="電子的な日常">ツイート</a>
                <div class="fb-like" data-href="https://shimesaba.jp/excontents/" data-layout="button_count" data-action="like" data-show-faces="false" data-share="true" style="width: 155px;"></div>
            </div>

        </div>

        <div class="report">
            <p>乗り打ちは複数人でパチスロ・パチンコ収支を一部または全体を共有する打ち方です。<br>
            このページでは私が実際使っている分配方法と計算ページを紹介します。</p>

            <p>乗り打ちはパチ・スロ実践のリスクを和らげたりする事ができる有効な実践方法ですが<br>
            お金が動くためトラブルも発生しやすい実践方法です<br>
            <br>
            トラブルを防ぐためには実践前に計算方法を明確にしておくことが重要となります<br>
            <br>
            また、メンバーによっては計算方法が合う、合わないがあるため、<br>
            よく考えて決定し、実践前にこのページのどの計算方法で行くかというのを決定し、共有してから実践しましょう！</p>

            <ul class="app_list">
                <li>
                    <NuxtLink to="/excontents/noriuchi/kyouyusaifu">
                        <h3 style="">共有財布型</h3>
                        <p style="">投資と回収を完全に共有する最もメジャーな計算方法ですが、トラブルが発生しやすいので注意です。</p>
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/excontents/noriuchi/syugi">
                        <h3 style="">祝儀型</h3>
                        <p style="">投資についての責任を投資者本人に１００％持たせつつリスクを軽減させる計算方法です。</p>
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/excontents/noriuchi/limit_kyouyusaifu">
                        <h3 style="">制限つき共有財布型（オススメ）</h3>
                        <p style="">リスクはあっても共有財布型の実践をしたい方用の計算方法です。投資の責任範囲を固定する事で予想外の負けを発生させないようにします。</p>
                    </NuxtLink>
                </li>
            </ul>
            <p style="text-align: center;">↑クリックで計算＆解説ページが開きます</p>
        </div>

    </div>
</template>
<style scoped>
.app_list li {
    height:150px;
}
</style>
<script>
export default {
    layout:'excontents',
    head() {
        return {
            titleTemplate: '',
            title: '乗り打ち計算機 電子的な日常 -Contents-',
            meta: [
                { hid: 'description', name: 'description', content: `ノリ打ち計算機などのツールを提供しています。` },
                { hid: 'keywords', name: 'keywords', content: '乗り打ち,ノリ打ち,のり打ち,計算機,電卓' },
                { hid: 'og:site_name', property: 'og:site_name', content: 'Shimesaba.jp -〆鯖-' },
                { hid: 'og:type', property: 'og:type', content: 'website' },
                { hid: 'og:url', property: 'og:url', content: 'https://shimesaba.jp' + this.$nuxt.$route.path },
                { hid: 'og:title', property: 'og:title', content: `乗り打ち計算機 電子的な日常 -Contents-` },
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
