<template>
    <div class="contents">
        <ul class="report_list">
            <li v-for="report in reports">
                <NuxtLink :to="report.href">
                    <div class="report_thumbnail">
                        <img :src="report.thumbnail">
                    </div>
                    <div class="report_desc">
                        <h4>{{ report.title }}</h4>
                        <p>{{ report.desc }}</p>
                        <p>更新日時:{{ report.updatedAt }}</p>
                    </div>
                </NuxtLink>
            </li>
        </ul>
    </div>
</template>
<style scoped>
.report_list {
    padding:0;
    margin:0;
    list-style:none;
}
.report_list li {
    height:130px;
    margin: 10px 0;
}
.report_list li > a {
    display:flex;
    height:calc(100% - 20px);
    text-decoration:none;
}
.report_list li .report_thumbnail {
    display:flex;
    justify-content:center;
}
.report_list li a > div {
    color:black;
}
@media screen and (max-width:959px) {
    .contents {
        padding:8px 0;
    }    
    .report_list li {
        margin: 0 0 8px 0;
    }
    .report_list li > a {
        padding:10px 8px;
        width:calc(100% - 16px);
    }
    .report_list li .report_thumbnail img {
        height:100%;
    }
    .report_list li a > div h4 {
        font-size:1.0em;
        -webkit-line-clamp: 2;
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
    }
    .report_list li a > div p {
        font-size:0.8em;
        -webkit-line-clamp: 2;
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
    }
    .report_list li .report_thumbnail {
        width:20%;
        overflow:hidden;
    }
    .report_desc {
        padding:0 0 0 8px;
    }
    .report_list li a > div {
        width:80%;
    }

}
@media screen and (min-width:960px) {
    .contents {
        padding:15px 0;
    }
    .report_list li {
        margin: 10px 0;
    }
    .report_list li > a {
        padding:10px;
        width:calc(100% - 20px);
    }
    .report_list li .report_thumbnail img {
        height:100%;
    }
    .report_list li a > div h4 {
        font-size:1.3em;
    }
    .report_list li .report_thumbnail {
        width:25%;
    }
    .report_list li a > div {
        width:75%;
    }
}
.report_list li:nth-of-type(odd) {
    background-color: #def5f1;
}
.report_list li:nth-of-type(even) {
    background-color: #eaeae6;
}
</style>
<style>
@media screen and (max-width:959px) {
    .blog_report_content {
        margin: 12px 0;
        padding: 0 16px;
    }
    .report_header_container .thumbnail {
        width:20%;
    }
    .report_header_container .thumbnail img {
        width:100%;
    }
    .report_header_container .title_container {
        width:80%;
    }
    .report_title {
        font-size:1.0em;
    }
}
@media screen and (min-width:960px) {
    .blog_report_content {
        margin: 16px 0;
        padding: 0 16px;
    }
    .report_header_container .thumbnail {
        height:80px;
        width:120px;
    }
    .report_header_container .thumbnail img {
        height:100%;
    }
    .report_header_container .title_container {
        width:calc(100% - 120px);
    }
}
.report_header_container {
    display:flex;
}
.blog_report ul {
    padding-left:30px;
    margin:10px 0;
}
.blog_report h3 {
    margin-top:30px;
    margin-bottom:10px;
}
.blog_report p {
    line-height:1.7em;
    margin:8px 0;
}
.blog_report {
    padding: 15px 0;
}
</style>
<script>
export default {
    layout:'blog',
    head() {
        return {
            titleTemplate: '',
            title: '電子的な日常',
            meta: [
                { hid: 'description', name: 'description', content: `パチスロの改造やwebプログラミング、電子工作について書いています` },
                { hid: 'keywords', name: 'keywords', content: 'パチスロ,家スロ,777Town,プログラミング,ブログ,電子工作,ニコニコ生放送,備忘録,イヤホンコンバータ,webプログラミング' },
                { hid: 'og:site_name', property: 'og:site_name', content: '電子的な日常' },
                { hid: 'og:type', property: 'og:type', content: 'website' },
                { hid: 'og:url', property: 'og:url', content: 'https://shimesaba.jp' + this.$nuxt.$route.path },
                { hid: 'og:title', property: 'og:title', content: `電子的な日常` },
                { hid: 'og:description', property: 'og:description', content: 'パチスロの改造やwebプログラミング、電子工作について書いています' },
                { hid: 'og:image', property: 'og:image', content: 'https://shimesaba.jp/blog/image/1840.jpg' },
                { name: 'twitter:card', content: 'summary' }
            ],
        }
    },
    data () {
        return {
            reports:[
                {
                    href:"/blog/report/49",
                    thumbnail:"/blog/image/145.jpg",
                    title:"パチスロ「まどかマギカ」　ユニメモ金枠にする為の回転数目安",
                    desc:"ついに念願のパチスロ魔法少女まどかマギカのユニメモ、杏子カスタム金枠カンスト達成できました！！",
                    updatedAt:"2014-09-26 17:00:28"
                },
                {
                    href:"/blog/report/11",
                    thumbnail:"/blog/image/34.jpg",
                    title:"データカウンタとの接続部(外部集中端子板)【パチスロ自作目指して・第２回】",
                    desc:"今回はデータカウンタとパチスロ実機との接続に使われる外部集中端子板について書こうかと思います",
                    updatedAt:"2014-08-27 17:00:00"
                },
                {
                    href:"/blog/report/16",
                    thumbnail:"/blog/image/49.jpg",
                    title:"イヤホンコンバーターの作り方【パチスロ実機・直取り】",
                    desc:"今回はイヤホンコンバーターの作り方を書きたいと思います。",
                    updatedAt:"2014-09-01 17:00:54"
                },
                {
                    href:"/blog/report/12",
                    thumbnail:"/blog/image/36.jpg",
                    title:"パチスロリールユニットの仕組みとか【パチスロ自作目指して・第３回】",
                    desc:"今回はパチスロのメイン。リールユニットの取り外しと各部品の簡単な説明をしようかと思います。",
                    updatedAt:"2014-08-28 17:00:00"
                },
/*                {
                    href:"/blog/report/92",
                    thumbnail:"",
                    title:"",
                    desc:"",
                    updated:""
                },*/
                {
                    href:"/blog/report/3",
                    thumbnail:"/blog/image/7.jpg",
                    title:"実機の中身とか簡単に説明【パチスロ自作目指して・第一回】",
                    desc:"記事の内容を考えていたのですが、これまで考えていたパチスロの自作を少しずつ進めたいと考え、やってみる事にしました！",
                    updatedAt:"2014-08-20 17:00:29"
                },
/*                 {
                    href:"/blog/report/188",
                    thumbnail:"",
                    title:"",
                    desc:"",
                    updated:""
                },
                {
                    href:"/blog/report/20",
                    thumbnail:"",
                    title:"",
                    desc:"",
                    updated:""
                },*/
                {
                    href:"/blog/report/19",
                    thumbnail:"/blog/image/58.jpg",
                    title:"マジカルチャレンジ中のBGMが気になって",
                    desc:"タイトル通りで気になったので調べました。調べた結果、曲名は「Sis puella magica!」っていう様です。",
                    updatedAt:"2014-09-04 17:00:02"
                },
/*                 {
                    href:"/blog/report/196",
                    thumbnail:"",
                    title:"",
                    desc:"",
                    updated:""
                },*/
                {
                    href:"/blog/report/350",
                    thumbnail:"/blog/image/1840.jpg",
                    title:"乗り打ち計算アプリ公開しました【新ページ公開】",
                    desc:"新しくコンテンツページの公開を開始しました！コンテンツページでは、現在乗り打ちの仕方（計算方法）を紹介しています",
                    updatedAt:"2015-03-15 08:00:00"
                },
            ]
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
