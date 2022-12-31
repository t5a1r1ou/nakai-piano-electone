<template>
  <div class="event">
    <div class="contents-block inner">
      <h2 class="contents-title greet-title">イベント</h2>
      <p class="contents-sub">発表会</p>
      <div class="event-img-box">
        <img
          src="../assets/event_img1.jpg"
          alt="発表会写真1"
          class="event-img"
        />
        <img
          src="../assets/event_img2.jpg"
          alt="発表会写真2"
          class="event-img"
        />
        <img
          src="../assets/event_img3.jpg"
          alt="発表会写真3"
          class="event-img"
        />
      </div>
      <p class="contents-detail event-detail">
        年１回夏頃に発表会があります。<br />
        生徒の皆さんは、ソロ演奏、アンサンブル演奏、フィナーレの舞台に参加します。
      </p>
      <p class="contents-sub">大人の発表会</p>
      <div class="event-img-box">
        <img
          src="../assets/happyoukai5.png"
          alt="大人の発表会写真"
          class="event-img"
        />
      </div>
      <p class="contents-detail event-detail">
        大人の生徒さんだけの発表会です。和やかな雰囲気の発表会で、途中にケーキをたべるティータイムもあります。<br />
        ピアノ・エレクトーンだけでなく、歌や他の楽器での出演もあります。
      </p>
      <p class="contents-sub">ミュージックパーティー</p>
      <div class="event-img-box">
        <img
          src="../assets/happyoukai4.png"
          alt="発表会写真"
          class="event-img"
        />
      </div>
      <p class="contents-detail event-detail">
        年１回冬ごろにあるミニコンサートです。<br />
        初めて人前で演奏するデビューの生徒さんや、兄弟、姉妹、お友達同士でのアンサンブル、連弾でも参加していただけます。
      </p>
      <p class="contents-sub">コンクール</p>
      <p class="contents-detail event-detail">
        DAITOエレクトーンフェスティバル、ピアノフェスティバル、エレクトーンアンサンブルなど、ヤマハのイベントに参加できます。
      </p>
    </div>
    <router-link to="/contact" class="foot-button"
      >お問い合わせはこちら</router-link
    >
  </div>
</template>

<script>
export default {
  name: "Guide",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
$tab: 960px;
$sp: 768px;
$ssp: 700px;

@mixin tab {
  @media only screen and (max-width: ($tab)) {
    @content;
  }
}

@mixin sp {
  @media only screen and (max-width: ($sp)) {
    @content;
  }
}

@mixin ssp {
  @media only screen and (max-width: ($ssp)) {
    @content;
  }
}

.event-img {
  margin-bottom: 1em;
  border-radius: 5px;
}

.event-detail {
  margin-bottom: 3em;
}

.event-img-box {
  width: 50%;
  margin: 0 auto;
  @include sp {
    width: 80%;
  }
}
</style>
