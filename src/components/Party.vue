<template>
  <div class="party">
    <div class="contents-block inner">
      <h2 class="contents-title">わくわく音楽隊</h2>
      <p class="contents-detail">ヤマハ講師の有志が集まり、地域へ音楽の楽しさを届ける活動をしています。</p>
      <p class="contents-detail">子育てサークル、幼稚園・保育園、小学校、老人会、デイケアセンターなど、依頼があれば、エレクトーンを持ってお伺いします。</p>
      <p class="contents-detail">エレクトーン演奏、スクリーンシアター、体操、手遊びなどで楽しい１時間を過ごします。活動の内容は<a href="https://blogs.yahoo.co.jp/kikuko_music" class="detail-link">ブログ</a>をご覧ください。</p>
      <div class="contents-img-block flexbox">
        <img src="../assets/wakuwaku1.png" alt="わくわく音楽隊の写真１">
        <img src="../assets/wakuwaku2.png" alt="わくわく音楽隊の写真２">
        <img src="../assets/wakuwaku3.png" alt="わくわく音楽隊の写真３">
      </div>
    </div>
    <router-link to="/contact" class="foot-button">お問い合わせはこちら</router-link>
  </div>
</template>

<script>
export default {
  name: 'Guide',
}
</script>
<style lang="scss">
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


</style>
