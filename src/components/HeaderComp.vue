<template>
  <div class="header">
    <div class="logo-wrap">
      <img src="../assets/logo.png" class="logo">
    </div>
    <div class="nav-wrapper">
      <nav class="inner nav-inner">
        <ul class="nav-menu">
          <li><router-link to="/">ホーム</router-link></li>
          <li><router-link to="/lesson">レッスンについて</router-link></li>
          <li><router-link to="/guide">教室案内</router-link></li>
          <li><router-link to="/event">イベント</router-link></li>
          <li><router-link to="/party">わくわく音楽隊</router-link></li>
          <li><a href="https://blogs.yahoo.co.jp/kikuko_music">ブログ</a></li>
          <li><router-link to="/contact">お問い合わせ</router-link></li>
        </ul>
      </nav>
      <hamb-menu></hamb-menu>
    </div>
</div>
</template>

<script>
import HambMenu from './HambMenu.vue'
export default {
  name: 'HeaderComp',
  components:{
    HambMenu
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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

.logo-wrap {
  @include ssp {
    display: none;
  }
  img {
    width: 20%;
  }
}
.nav-wrapper {
  background-color: #db225d;
  padding: 1.5em;
  margin-bottom: 3em;
  @include ssp {
    margin-bottom: 0;
    padding: .4em;
  }
  .nav-menu {
    width: 100%;
    text-align: left;
    @include ssp {
      display: none;
    }
  }
  li {
    margin-right: 3em;
    display: inline-block;
    a {
      color: #fff;
      display: block;
      position: relative;
      text-decoration: none;
      &::after {
        position: absolute;
        content: '';
        bottom: 0;
        left: 0;
        width: 0;
        height: 1px;
        background: #fff;
        transition: all 0.3s ease 0s;
        @include sp {
          display: none;
        }
      }
      &:hover::after {
        width: 100%;
        @include sp {
          display: none;
        }
      }
    }
  }
}

.header {
  position: relative;
}

</style>
