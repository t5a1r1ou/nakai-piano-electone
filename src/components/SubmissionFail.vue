<template>
  <div class="contents-block inner fail">
    <h2 class="contents-title">申し訳ございません。不具合が発生しています。</h2>
    <p class="contents-detail">しばらく経ってからもう一度送信いただくか、お電話にてお問い合わせください</p>
    <router-link to="/contact">
      <p class="foot-button">お問い合わせフォームに戻る</p>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: "SubmissionFail"
  }
</script>

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

</style>
