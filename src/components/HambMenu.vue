<template>
  <div class="hambmenu">
    <router-link to="/">
      <img src="../assets/logo.png" alt="ロゴ" class="logo-img_sp" />
    </router-link>
    <a href="#" class="menu_sp" @click="navspToggle">
      <span class="menu_line-tp line" :class="{ active: isActive }"></span>
      <span class="menu_line-cnt line" :class="{ active: isActive }"></span>
      <span class="menu_line-btm line" :class="{ active: isActive }"></span>
    </a>
    <transition>
      <nav class="nav_sp" v-if="navStatus">
        <ul class="navsp-menu">
          <li>
            <router-link to="/" @click.native="navspClose">ホーム</router-link>
          </li>
          <li>
            <router-link to="/lesson" @click.native="navspClose">レッスンについて</router-link>
          </li>
          <li>
            <router-link to="/guide" @click.native="navspClose">教室案内</router-link>
          </li>
          <li>
            <router-link to="/event" @click.native="navspClose">イベント</router-link>
          </li>
          <li>
            <router-link to="/party" @click.native="navspClose">わくわく音楽隊</router-link>
          </li>
          <li>
            <a href="https://www.instagram.com/nakaipiano_electone/">instagram</a>
          </li>
          <li>
            <router-link to="/contact" @click.native="navspClose">お問い合わせ</router-link>
          </li>
        </ul>
      </nav>
    </transition>
  </div>
</template>

<script>
export default {
  name: "HambMenu",
  data() {
    return {
      navStatus: false,
      isActive: false
    };
  },
  methods: {
    navspToggle() {
      this.navStatus = !this.navStatus;
      this.isActive = !this.isActive;
    },
    navspClose() {
      this.isActive = false;
      setTimeout((this.navStatus = false), 10000);
    }
  }
};
</script>

<style lang="scss" scoped>
$tab: 960px;
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

img {
  width: 40%;
}

.menu_sp {
  position: absolute;
  right: 2em;
  top: 2em;
  display: none;
  width: 36px;
  height: 24px;
  z-index: 9999;
  @include sp {
    display: block;
  }
  .menu_line-tp {
    display: block;
    height: 3px;
    width: 100%;
    position: absolute;
    background-color: #fff;
    transition: transform 0.3s;
    &.active {
      transform: rotate(45deg);
      top: 1.2em;
      color: #fff;
    }
  }
  .menu_line-cnt {
    @extend .menu_line-tp;
    top: 10px;
    &.active {
      transform: scaleX(0);
    }
  }
  .menu_line-btm {
    @extend .menu_line-tp;
    bottom: 0;
    &.active {
      transform: rotate(1035deg);
      bottom: 1.2em;
      color: #fff;
    }
  }
}

.logo-img_sp {
  display: none;
  @include ssp {
    display: inline-block;
  }
}

.nav_sp {
  position: relative;
  left: 0;
  right: 0;
  top: 1em;
  margin: auto;
  z-index: 999;
  background-color: #fff;
  .navsp-menu li {
    display: block;
    margin-right: 0;
    padding: 1em 0;
    a {
      color: #333;
    }
  }
}

.v-enter-active,
.v-leave-active {
  -webkit-transition: opacity 0.5s, -webkit-transform 0.5s;
  -o-transition: opacity 0.5s, -o-transform 0.5s;
  transition: opacity 0.5s, transform 0.5s;
}

.v-enter {
  opacity: 0;
  transform: translateY(5em);
}

.v-leave-to {
  opacity: 0;
  transform: translateY(5em);
}
</style>
