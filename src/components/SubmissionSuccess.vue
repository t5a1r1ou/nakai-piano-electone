<template>
  <div class="contents-block inner success">
    <h2 class="contents-title">お問い合わせありがとうございます。</h2>
    <p class="contents-detail">お電話またはメールでこちらからご連絡差し上げます。
      <br>今しばらくお待ちください。</p>
    <router-link to="/">
      <p class="foot-button">トップに戻る</p>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: "SubmissionSuccess"
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
