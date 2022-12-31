<template>
  <div class="lesson">
    <div class="contents-block inner">
      <h2 class="contents-title contents-title">レッスンについて</h2>
      <p class="contents-detail">
        エレクトーン・ピアノで楽しく音楽を学べるように心がけています。小さいお子様から、保育士を目指す大学生、趣味として楽しみたいシニアの方まで、様々な年齢の生徒さんに通っていただいています。
      </p>
      <dl>
        <dt class="contents-sub">個人レッスン<br />（エレクトーン・ピアノ）</dt>
        <dd class="contents-detail">
          一人一人の生徒さんにあった練習内容で無理の無いよう上達していけるようにしています
          <br />
          大人の方はライフスタイルに合わせたレッスンを行います。ヤマハグレードも導入しています。
        </dd>
      </dl>
      <dl>
        <dt class="contents-sub">
          プレピアノレッスン
          <br />
          （個人または同学年のペアレッスン）
        </dt>
        <dd class="contents-detail">
          2才〜年中・年長までのレッスンです。<br />
          鍵盤にこだわらず、音楽を通じて、集中力と豊かな感性を養います。<br />
          ペアレッスンはお友達と一緒にお申し込みください。
        </dd>
      </dl>
    </div>
    <div class="contents-block inner">
      <h2 class="contents-title">料金について</h2>
      <dl>
        <dt class="contents-sub">入会金</dt>
        <dd>
          <p class="contents-detail">2000円</p>
          <p class="contents-detail">
            入会される方は、入会決定時に所定の入会料を収めていただきます。
          </p>
        </dd>
      </dl>
      <dl>
        <dt class="contents-sub">お月謝・レッスン時間</dt>
        <dd>
          <div class="contents-group">
            <table>
              <tr>
                <td>個人レッスン</td>
                <td>５５００円〜（１回３０分、年間４０回）</td>
              </tr>
              <tr>
                <td>プレピアノレッスン</td>
                <td>５５００円（１回３０分、月３回）</td>
              </tr>
            </table>

            <p class="contents-detail">
              別途教材費をいただいております。
              <br />
              おこさまにはレッスンバッグを入会プレゼントさせていただきます。
            </p>
          </div>
        </dd>
      </dl>
    </div>
    <div class="contents-block inner">
      <h2 class="contents-title">生徒損害補償サービス加入（無料）</h2>
      <p class="contents-detail">
        生徒さんが安心して通えるための保険です。
        <br />
        教室へ向かう道中や、レッスン時の怪我は損害補償があります。
      </p>
    </div>
    <router-link to="/contact" class="foot-button">
      お問い合わせはこちら
    </router-link>
  </div>
</template>

<script>
export default { name: "Lesson" };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

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

table {
  margin: 0 auto 2em;
  border: 1px solid #000;
  td {
    border: 1px solid #000;
    padding: 0.5em;
    font-size: 1.8rem;
    text-align: left;
    @include sp {
      font-size: 1.4rem;
    }
    @include ssp {
      font-size: 1.2rem;
    }
  }
}
</style>
