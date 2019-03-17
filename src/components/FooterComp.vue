<template>
  <footer>
    <p class="footer-tel">お電話でのお問い合わせ：072-882-8961</p>
    <p class="footer-mail">webからのお問い合わせ：こちら</p>
  </footer>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
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
      content: ' |';
    }
  }
}
.footer-tel,
.footer-mail {
  margin-left: 3em;
  padding-top: 3em;
  text-align: left;
}

.footer-mail {
  padding-bottom: 3em;
}

</style>
