<template>
  <footer>
    <a href="https://www.instagram.com/nakaipiano_electone/">
      <img src="../assets/instagram.png" alt="インスタグラムリンク" class="footer-insta" />
    </a>
    <p class="footer-tel">
      お電話でのお問い合わせ：
      <a href="tel:072-882-8961">072-882-8961</a>
    </p>
    <p class="footer-mail">
      webからのお問い合わせ：
      <router-link to="/contact">こちら</router-link>
    </p>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
$tab: 1100px;
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

a {
  color: #fff;
}

footer {
  background-color: #cab5ab;
  color: #fff;
}
.footer-list {
  justify-content: flex-end;
  padding-bottom: 4em;
  li {
    margin-right: 2em;
    &::after {
      margin-left: 2em;
      content: " |";
    }
  }
}
.footer-tel,
.footer-mail {
  margin-left: 3em;
  padding-top: 1em;
  text-align: left;
}

.footer-mail {
  padding-bottom: 1em;
}

.footer-insta {
  width: 10%;
  margin: 2em auto 0;
}

a[href^="tel:"] {
  pointer-events: none;
  @include sp {
    pointer-events: auto;
  }
}
</style>
