<template>
    <div class="report_content">
        <div class="report_header">
            <h2 class="report_title">乗り打ち計算機（共有財布型）</h2>
            <p class="update_time">投資と回収を完全に共有する計算方法です。一番メジャーですがトラブルが発生する事が多いのが短所です。</p>
            <p class="bread">
                <NuxtLink to="/">Shimesaba</NuxtLink> ＞
                <NuxtLink to="/excontents/">コンテンツ</NuxtLink> ＞
                <NuxtLink to="/excontents/noriuchi">乗り打ち計算機</NuxtLink> ＞
                <NuxtLink to="/excontents/noriuchi/kyouyusaifu">共有財布型</NuxtLink>
            </p>

            <div class="share_area">
                <a href="https://twitter.com/share" class="twitter-share-button" data-via="OIL_STAND" data-lang="ja" data-hashtags="電子的な日常">ツイート</a>
                <div class="fb-like" data-href="https://shimesaba.jp/excontents/noriuchi/kyouyusaifu" data-layout="button_count" data-action="like" data-show-faces="false" data-share="true" style="width: 155px;"></div>
            </div>

        </div>

        <div class="report">
            <p>投資と回収を完全に共有するタイプの乗り打ちです<br>
            参加者全員の収支が同じになるのが特徴です<br>
            <br>
            個人成績がプラス収支であっても、他のメンバー次第ではマイナスになる可能性があります</p>
            <p>計算方法：全員の収支を合算し、人数で割った収支になるようにメンバーで調整します<br>
            メンバーそれぞれの投資額、回収額を入力してください<br>
            （使わない欄は0にして置いてください）</p>
            <fieldset>
                <legend>メンバー1</legend>
                <form id="member1">
                    <p>
                        <label>投資：</label>
                        <input v-model.number="m1i" type="number" name="toushi" step="100" v-on:change="changeValue">円<br>
                        <label>回収：</label>
                        <input v-model.number="m1o" type="number" name="kaisyu" step="100" v-on:change="changeValue">円<br>
                        <label>個人成績：</label>
                        <input :value="m1o - m1i" type="number" name="syusi" disabled="">円
                    </p>
                </form>
            </fieldset>
            <fieldset>
                <legend>メンバー2</legend>
                <form id="member2">
                    <p>
                        <label>投資：</label>
                        <input v-model.number="m2i" type="number" name="toushi" step="100" v-on:change="changeValue">円<br>
                        <label>回収：</label>
                        <input v-model.number="m2o" type="number" name="kaisyu" step="100" v-on:change="changeValue">円<br>
                        <label>個人成績：</label>
                        <input :value="m2o - m2i" type="number" name="syusi" disabled="">円
                    </p>
                </form>
            </fieldset>
            <fieldset>
                <legend>メンバー3</legend>
                <form id="member3">
                    <p>
                        <label>投資：</label>
                        <input v-model.number="m3i" type="number" name="toushi" step="100" v-on:change="changeValue">円<br>
                        <label>回収：</label>
                        <input v-model.number="m3o" type="number" name="kaisyu" step="100" v-on:change="changeValue">円<br>
                        <label>個人成績：</label>
                        <input :value="m3o - m3i" type="number" name="syusi" disabled="">円
                    </p>
                </form>
            </fieldset>
            <fieldset>
                <legend>メンバー4</legend>
                <form id="member4">
                    <p>
                        <label>投資：</label>
                        <input v-model.number="m4i" type="number" name="toushi" step="100" v-on:change="changeValue">円<br>
                        <label>回収：</label>
                        <input v-model.number="m4o" type="number" name="kaisyu" step="100" v-on:change="changeValue">円<br>
                        <label>個人成績：</label>
                        <input :value="m4o - m4i" type="number" name="syusi" disabled="">円
                    </p>
                </form>
            </fieldset>
            <fieldset>
                <legend>メンバー5</legend>
                <form id="member5">
                    <p>
                        <label>投資：</label>
                        <input v-model.number="m5i" type="number" name="toushi" step="100" v-on:change="changeValue">円<br>
                        <label>回収：</label>
                        <input v-model.number="m5o" type="number" name="kaisyu" step="100" v-on:change="changeValue">円<br>
                        <label>個人成績：</label>
                        <input :value="m5o - m5i" type="number" name="syusi" disabled="">円
                    </p>
                </form>
            </fieldset>
            <fieldset>
                <legend>計算結果</legend>
                <form id="ans">
                    <p>
                        <label>乗り打ち人数：</label>
                        <input type="number" name="mcount" disabled="" :value="member_cnt">人<br>
                        <label>乗り打ち収支：</label>
                        <input type="number" name="msyusi" disabled="" :value="total_io">円<br>
                        <label>個人収支：</label>
                        <input type="number" name="pool" disabled="" :value="syushi">円<br>
                    </p>
                    <p>
                        <label>メンバー1：</label>
                        <input type="text" name="member1_io" size="42" disabled="" :value="m1r">
                        <label>最終収支：</label>
                        <input type="number" name="final1" disabled="" :value="m1f">円<br>


                        <label>メンバー2：</label>
                        <input type="text" name="member2_io" size="42" disabled="" :value="m2r">
                        <label>最終収支：</label>
                        <input type="number" name="final2" disabled="" :value="m2f">円<br>


                        <label>メンバー3：</label>
                        <input type="text" name="member3_io" size="42" disabled="" :value="m3r">
                        <label>最終収支：</label>
                        <input type="number" name="final3" disabled="" :value="m3f">円<br>


                        <label>メンバー4：</label>
                        <input type="text" name="member4_io" size="42" disabled="" :value="m4r">
                        <label>最終収支：</label>
                        <input type="number" name="final4" disabled="" :value="m4f">円<br>


                        <label>メンバー5：</label>
                        <input type="text" name="member5_io" size="42" disabled="" :value="m5r">
                        <label>最終収支：</label>
                        <input type="number" name="final5" disabled="" :value="m5f">円<br>
                    </p>
                </form>
            </fieldset>
        </div>
    </div>
</template>
<style scoped>
.app_list li {
    height:150px;
}
fieldset {
    padding:10px;
}
input[type="number"] {
    padding:2px 3px;
    width:80px;
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
            m1i: 0, m1o: 0, m1r:'', m1f:0,
            m2i: 0, m2o: 0, m2r:'', m2f:0,
            m3i: 0, m3o: 0, m3r:'', m3f:0,
            m4i: 0, m4o: 0, m4r:'', m4f:0,
            m5i: 0, m5o: 0, m5r:'', m5f:0
        }
    },
    methods: {
        changeValue() {

            for(let i = 1; i <= 5; i++) {
                if(this["m"+i+"o"] == 0 && this["m"+i+"i"] == 0){
                    this["m"+i+"r"] = "";
                    this["m"+i+"f"] = "";
                } else {
                    let kojin = this["m"+i+"o"] - this["m"+i+"i"];
                    if(kojin > this.syushi){
                        this["m"+i+"r"] = (kojin - this.syushi) + "円　他のメンバーへ渡す(個人成績："+kojin+")";
                        this["m"+i+"f"] = this.syushi;
                    } else　{
                        this["m"+i+"r"] = (this.syushi - kojin) + "円　他のメンバーから受け取る(個人成績："+kojin+")";
                        this["m"+i+"f"] = this.syushi;
                    }
                }
            }
        },
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
        member_cnt() {
            let cnt = 0;

            if(!(this.m1i == 0 && this.m1o == 0))cnt++;
            if(!(this.m2i == 0 && this.m2o == 0))cnt++;
            if(!(this.m3i == 0 && this.m3o == 0))cnt++;
            if(!(this.m4i == 0 && this.m4o == 0))cnt++;
            if(!(this.m5i == 0 && this.m5o == 0))cnt++;

            return cnt;
        },
        total_io() {
            let io = 0;

            if(!(this.m1i == 0 && this.m1o == 0)) {
                io += this.m1o - this.m1i;
            }
            if(!(this.m2i == 0 && this.m2o == 0)) {
                io += this.m2o - this.m2i;
            }
            if(!(this.m3i == 0 && this.m3o == 0)) {
                io += this.m3o - this.m3i;
            }
            if(!(this.m4i == 0 && this.m4o == 0)) {
                io += this.m4o - this.m4i;
            }
            if(!(this.m5i == 0 && this.m5o == 0)) {
                io += this.m5o - this.m5i;
            }

            return io;
        },
        syushi() {
            return this.member_cnt > 0 ? this.total_io / this.member_cnt : 0;
        }
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
