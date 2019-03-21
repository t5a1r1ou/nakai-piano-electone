<template>
  <div id="app" class="text-center wrap">
    <header-comp></header-comp>
    <transition appear mode="out-in">
      <router-view/>
    </transition>
    <footer-comp></footer-comp>
  </div>
</template>

<script>
import HeaderComp from './components/HeaderComp.vue'
import FooterComp from './components/FooterComp.vue'
export default {
  name: 'App',
  components: {
    HeaderComp,
    FooterComp
  },
  methods: {
    createPageTitle: function(to) {
      if(to.path == '/') {
        let setTitle = to.meta.title
        document.title = setTitle
      }
      else if(to.meta.title) {
        let setTitle = to.meta.title + ' | 門真市でピアノ・エレクトーンの習い事なら中井ピアノエレクトーン教室'
        document.title = setTitle
      } else {
        document.title = "中井ピアノエレクトーン教室"
      }
      if(to.meta.desc) {
        let setDesc = to.meta.desc + ' | 大阪府門真市にてエレクトーンピアノ教室を開いています。教材充実。入会随時募集中。生徒損害補償サービス加入（無料）。是非、一度ご連絡ください！'
        document.querySelector("meta[name='description']").setAttribute('content', setDesc)
      } else {
        document.querySelector("meta[name='description']").setAttribute('content', '大阪府門真市にてエレクトーンピアノ教室を開いています。教材充実。入会随時募集中。生徒損害補償サービス加入（無料）。是非、一度ご連絡ください！')
      }
    }
  },
  mounted() {
    let to = this.$route
    this.createPageTitle(to)
  },
  watch: {
    '$route' (to, from) {
      this.createPageTitle(to)
    }
  }
}
</script>

<style lang="scss">
$tab :1100px;
$sp :768px;
$ssp : 700px;

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

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0 auto;
}

.logo {
  display: block;
  margin: 0 auto;
  @include tab {
    margin-left: 5em;
  }
}

.text-center {
  text-align: center;
}

html, body,
ul, ol, li,
h1, h2, h3, h4, h5, p,
section, header, footer, nav,
form, input, div {
  margin: 0;
  padding: 0;
}

html {
  font-size: 62.5% !important;
}

*, *::before, *::after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}

body {
  background-color: #f7f7f6;
  color: #333;
  text-align: center;
  font-size: 1.4rem;
  font-family: "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
}

.flexbox {
  display: -webkit-flex;
  display: -ms-flex;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

li, ol {
  list-style-type: none;
}

a {
  color: #333;
}

a:link, a:visited, a:hover, a:active {
  text-decoration: none;
}

img {
  max-width: 100%;
  height: auto;
}

.inner {
  width: 900px;
  margin: 0 auto;
}

.wrap {
  overflow: hidden;
}

.logo-wrap {
  width: 1100px;
  margin: 0 auto;
}

.v-enter-active, .v-leave-active {
  -webkit-transition: opacity .5s, -webkit-transform .5s;
  -o-transition: opacity .5s, -o-transform .5s;
  transition: opacity .5s, transform .5s;
}

.v-enter {
  opacity: 0;
  transform: translateX(-5em);
}

.v-leave-to {
  opacity: 0;
  transform: translateY(5em);
}

.contents-block {
  background-color: #fff;
  border-radius: 5em;
  padding: .5em;
  max-width: calc(100% - 30px);
  margin: 0 auto 4em;
  @include ssp {
    padding-bottom: 2em;
    margin: 3em auto;
  }
}

.contents-title {
  text-align: left;
  margin-left: 4em;
  margin-bottom: 1em;
  padding-top: .5em;
  font-size: 3rem;
  @include tab {
    font-size: 2.5rem;
  }
  @include sp {
    font-size: 1.8rem;
  }
  @include ssp {
    font-size: 1.4rem;
  }
}

.contents-sub {
  text-align: left;
  font-weight: bolder;
  margin-left: 5em;
  margin-bottom: 1em;
  font-size: 2.3rem;
  @include tab {
    font-size: 2rem;
  }
  @include sp {
    font-size: 1.6rem;
  }
  @include ssp {
    font-size: 1.5rem;
  }
}

.contents-detail {
  text-align: left;
  font-size: 1.8rem;
  // padding: 1.6em;
  width: 70%;
  margin: 0 auto;
  padding-bottom: 1em;
  line-height: 1.5;
  @include sp {
    font-size: 1.4rem;
  }
  @include ssp {
    font-size: 1.2rem;
  }
}

.contents-img-block {
  align-items: flex-start;
  width: 100%;
  @include sp {
    flex-direction: column;
  }
  img {
    width: 30%;
    margin: 0 auto 1em;
    border-radius: 5px;
    @include sp {
      width: 80%;
    }
  }
}

.contents-img-block_2 {
  @extend .contents-img-block;
  img {
    width: 50%;
    @include sp {
      width: 80%;
    }
  }
}


.foot-button {
    display: block;
    background-color: #f1bb29;
    width: 40em;
    padding: 1em;
    margin: 0 auto 3em;
    border-radius: 5px;
    color: #333;
    transition: .5s;
    &:hover {
      background-color: #fff;
      border: 3px solid #f1bb29;
    }
    @include sp {
      width: 14em;
      padding: 1.5em;
    }
}

.contents-block {
  .contents-detail {
    .detail-link {
      text-decoration: underline;
      &:hover {
        color: #999;
      }
    }
  }
}

</style>
