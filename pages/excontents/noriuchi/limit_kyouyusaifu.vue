<template>
    <div class="report_content">
        <div class="report_header">
            <h2 class="report_title">乗り打ち計算機（制限つき共有財布型）</h2>
            <p class="update_time">共有財布型の性質を持たせつつ、リスクを制限する計算方法です。２番目にオススメ。</p>
            <p class="bread">
                <NuxtLink to="/">Shimesaba</NuxtLink> ＞
                <NuxtLink to="/excontents/">コンテンツ</NuxtLink> ＞
                <NuxtLink to="/excontents/noriuchi">乗り打ち計算機</NuxtLink> ＞
                <NuxtLink to="/excontents/noriuchi/limit_kyouyusaifu">制限つき共有財布型</NuxtLink>
            </p>

            <div class="share_area">
                <a href="https://twitter.com/share" class="twitter-share-button" data-via="OIL_STAND" data-lang="ja" data-hashtags="電子的な日常">ツイート</a>
                <div class="fb-like" data-href="https://shimesaba.jp/excontents/noriuchi/limit_kyouyusaifu" data-layout="button_count" data-action="like" data-show-faces="false" data-share="true" style="width: 155px;"></div>
            </div>

        </div>

        <div class="report">
            <p>基本的には共有財布型と同じ計算方法ですが、<br>
            負けた際のメンバーが負担する金額に上限を設ける事で想定外の負けを防ぎます<br>
            <br>
            通常の共有財布の乗り打ちでは、メンバーの全てのマイナス収支とプラス収支を共有しますが、<br>
            この計算方法では共有するマイナス収支の上限を決めて計算を行います<br>
            <br>
            例：上限10,000、<br>
            メンバーA 投資20,000 回収 3,000 (個人成績 -17,000)<br>
            メンバーB 投資13,000 回収24,000 (個人成績 +11,000)<br>
            この場合、メンバーAの個人成績は-17,000で上限を超えているので-10,000として計算し、<br>
            メンバーBの個人成績を+11,000として共有財布計算を行います<br>
            →共有財布での乗り打ち収支は +1,000なので、メンバーA,Bそれぞれに500の配当となります</p>

            <p>メンバーそれぞれの投資額、回収額を入力してください<br>
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
                        <label>上限額：</label>
                        <input v-model.number="limit" type="number" name="limit" v-on:change="changeValue">円<br>
                        <label>乗り打ち人数：</label>
                        <input type="number" name="mcount" disabled="" :value="member_cnt">人<br>
                        <label>乗り打ち収支：</label>
                        <input type="number" name="msyusi" disabled="" :value="total_io">円<br>
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
            m5i: 0, m5o: 0, m5r:'', m5f:0,
            limit: 10000
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
                    if(kojin < -1 * this.limit){
                        this["m"+i+"r"] = (Number(this.limit) + this.syushi) + "円　他のメンバーから受け取る1(個人成績："+kojin+")";
                        this["m"+i+"f"] = kojin + this.limit + this.syushi;
                    } else if(kojin < this.syushi) {
                        this["m"+i+"r"] = (this.syushi - kojin) + "円　他のメンバーから受け取る2(個人成績："+kojin+")";
                        this["m"+i+"f"] = this.syushi;
                    } else　{
                        this["m"+i+"r"] = (kojin - this.syushi) + "円　他のメンバーへ渡す(個人成績："+kojin+")";
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
                if((this.m1o - this.m1i) > this.limit * -1) {
                    io += this.m1o - this.m1i;
                } else {
                    io -= this.limit;
                }
            }
            if(!(this.m2i == 0 && this.m2o == 0)) {
                if((this.m2o - this.m2i) > this.limit * -1) {
                    io += this.m2o - this.m2i;
                } else {
                    io -= this.limit;
                }
            }
            if(!(this.m3i == 0 && this.m3o == 0)) {
                if((this.m3o - this.m3i) > this.limit * -1) {
                    io += this.m3o - this.m3i;
                } else {
                    io -= this.limit;
                }
            }
            if(!(this.m4i == 0 && this.m4o == 0)) {
                if((this.m4o - this.m4i) > this.limit * -1) {
                    io += this.m4o - this.m4i;
                } else {
                    io -= this.limit;
                }
            }
            if(!(this.m5i == 0 && this.m5o == 0)) {
                if((this.m5o - this.m5i) > this.limit * -1) {
                    io += this.m5o - this.m5i;
                } else {
                    io -= this.limit;
                }
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
