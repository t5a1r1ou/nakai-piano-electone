<template>
  <div class="intro">
    <div class="top-wrapper">
      <img src="../assets/top-img_sp.png" alt="中井エレクトーン教室トップ" class="top-img_sp">
      <div class="contents-block inner top-contents">
        <img src="../assets/top-img.png" alt="中井エレクトーン教室トップ" class="top-img">
        <div class="top-box">
          <p class="top-sub">無料体験レッスン実施中</p>
          <p class="top-detail">ただいま生徒さん募集中です。<br>
          まずはご気軽にお問い合わせください。</p>
          <router-link to="/contact" class="top-button">詳しくはこちら</router-link>
        </div>
      </div>
      <router-link to="/contact" class="top-button_sp">お問い合わせはこちら</router-link>
    </div>
    <div class="contents-block inner">
      <h2 class="contents-title greet-title">ご挨拶</h2>
      <p class="contents-detail">門真市常磐町でエレクトーン・ピアノのレッスンをしています。<br>
      初心者の方から、経験者、２歳のお子様からシニアの方まで、一人一人にあわせた楽しいレッスンを心がけています。</p>
      <p class="contents-detail">無料体験レッスンを実施しています。<router-link to="/contact" class="detail-link">こちら</router-link>からお気軽にお問い合わせ下さい。</p>
      <div class="contents-img-block flexbox">
        <img src="../assets/text1.png" alt="使用テキスト１">
        <img src="../assets/text2.png" alt="使用テキスト２">
        <img src="../assets/text3.png" alt="使用テキスト３">
      </div>
    </div>
    <router-link to="/contact" class="foot-button">お問い合わせはこちら</router-link>
  </div>
</template>

<script>
export default {
  name: 'Introduce',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
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


.top-wrapper {
  .top-contents {
    position: relative;
    @include ssp {
      display: none;
    }
  }
  .top-img {
    width: 90%;
    @include ssp {
      padding: 2em;
    }
  }
  .top-box {
    position: absolute;
    background-color: #17bdd3;
    border-radius: 1em;
    bottom: 10%;
    left: 10%;
    padding: 1.8em;
    color: #fff;
    @include tab {
    }
    @include sp {
      padding: 1.3em;
    }
    @include ssp {
      position: static;
      margin: 1em auto;
      padding: 1.3em;
      width: 60%;
    }
    .top-img {
      @include sp {
        padding: .5em;
      }
      @include ssp {
        padding: 0;
      }
    }
    .top-sub {
      font-size: 1.8rem;
      margin-bottom: 1em;
      @include tab {
        font-size: 1.3rem;
      }
      @include sp {
        font-size: 1.5rem;
      }
    }
    .top-detail {
      font-size: 1.3rem;
      margin-bottom: .8em;
      @include tab {
        font-size: 1rem;
      }
    }
    .top-button {
      background-color: #fff;
      display: inline-block;
      padding: .8em;
      border-radius: .5em;
      transition: .5s;
      &:hover {
        background-color: #f1bb29;
        color: #fff;
      }
      @include sp {
        font-size: 1.2rem;
      }
    }
  }
}

.top-img_sp {
  display: none;
  @include ssp {
    display: block;
    margin-bottom: 3em;
  }
}

.top-button_sp {
  display: none;
  @include ssp {
    display: block;
    background-color: #f1bb29;
    width: 12em;
    padding: 1em;
    margin: 0 auto;
    border-radius: 5px;
    color: #333;
  }
}



</style>
