<template>
  <div class="contents-block inner fail">
    <h2>申し訳ございません。不具合が発生しています。</h2>
    <p class="cotents-detail">しばらく経ってからもう一度送信いただくか、お電話にてお問い合わせください</p>
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
