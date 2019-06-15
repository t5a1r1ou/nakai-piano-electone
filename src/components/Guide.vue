<template>
  <div class="guide">
    <div class="contents-block inner">
      <h2 class="contents-title">教室案内</h2>
      <p class="contents-detail">門真市常盤町でエレクトーン・ピアノ教室です。<br>
        レッスン日　月曜日〜土曜日<br>
        基礎から好きな曲、弾きたい曲をピアノ・エレクトーンで楽しみましょう。<br>
        ご入会随時受付中</p>
      </div>
    <div class="contents-block inner">
      <h2 class="contents-title">楽器</h2>
      <p class="contents-detail">レッスンで使用するピアノ・エレクトーンです。</p>
      <div class="contents-img-block flexbox">
        <img src="../assets/piano.png" alt="YAMAHAグランドピアノ">
        <img src="../assets/electone.png" alt="YAMAHAエレクトーンELS-O2C">
        <img src="../assets/kyousitu.png" alt="エレクトーンとピアノ">
      </div>
    </div>
    <div class="contents-block inner">
      <h2 class="contents-title">講師</h2>
      <p class="contents-sub">中井 貴久子</p>
        <p class="contents-detail">jet全日本エレクトーン指導者協会会員</p>
        <p class="contents-detail">PSTA講師（ピアノスタディ指導者協会）</p>
        <p class="contents-detail">ヤマハ音楽能力検定認定試験官</p>
        <p class="contents-detail">大東楽器所属講師</p>

    </div>
    <div class="contents-block inner">
      <h2 class="contents-title">アクセス</h2>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3278.626447585814!2d135.5962989151785!3d34.73980918863047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e1d854fc30f5%3A0xfb451dcebf2b12c9!2z44CSNTcxLTAwNzgg5aSn6Ziq5bqc6ZaA55yf5biC5bi455uk55S677yR77yZ4oiS77yR77yR!5e0!3m2!1sja!2sjp!4v1553598922864" frameborder="0" allowfullscreen></iframe>
      <p class="contents-detail">大阪府門真市常盤町19-11（京阪大和田駅から徒歩１０分）</p>
      <p class="contents-detail">大和田小学校区 常盤温泉近く</p>
    </div>
    <router-link to="/contact" class="foot-button">お問い合わせはこちら</router-link>
    </div>
  </template>

  <script>
  export default {
    name: 'Guide'
  }
  </script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
$tab :960px;
$sp :768px;
$ssp :700px;

@mixin tab {
  @media only screen and (max-width: ($tab)){
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

iframe {
  margin-top: 1em;
  width: 80%;
  height: 50em;
  @include sp {
    height: 25em;
  }
}


</style>
