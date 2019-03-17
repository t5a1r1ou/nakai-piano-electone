<template>
  <div class="contents-block inner contact">
    <h2 class="contents-title">お問い合わせ</h2>
    <form name="contact" class="ct-form" @submit.prevent="handleSubmit" method="post" data-netlify="true" netlify-honeypot="bot-field">
      <input type="hidden" name="form-name" value="contact" />
      <p class="hidden"  style="display: none;">
      <label>Don’t fill this out: <input name="bot-field"></label>
    </p>
      <label for="username">お名前</label><input type="text" name="name" id="username" v-model="form.name">
      <label for="useremail">メールアドレス</label><input type="email" name="email" id="useremail" v-model="form.email">
      <label for="usertel">お電話番号</label><input type="tel" name="tel" id="usertel" v-model="form.tel">
      <p class="radio-block">
        <label for="apply" class="radio-label">無料体験レッスン希望</label>
        <input type="radio" name="apply" value="希望する" checked="checked" id="radio01" v-model="form.selectedRadio"/>
        <label for="radio01" class="radio">希望する</label>
        <input type="radio" name="apply" value="その他のお問い合わせ" id="radio02"  v-model="form.selectedRadio"/>
        <label for="radio02" class="radio">その他のお問い合わせ</label>
      </p>
      <label for="contact">お問い合わせ内容</label><textarea name="message" id="contact" v-model="form.message"></textarea>
      <p v-if="errors.length">
        <ul>
          <li v-for="(error, index) in errors" :key="index" class="ct-errors">{{ error }}</li>
        </ul>
      </p>
      <input type="submit" value="送信">
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Contact',
  data() {
    return {
      form: {
        name: "",
        email: "",
        tel: "",
        message: "",
        selectedRadio: "希望する",
      },
      errors: [],
      isSubmit: false
    }
  },
  methods: {
    encode (data) {
      return Object.keys(data)
        .map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join("&");
    },
    handleSubmit () {
      const axiosConfig = {
        header: { "Content-Type": "application/x-www-form-urlencoded" }
      }
      axios.post(
        "/",
        this.encode({
          "form-name": "contact",
          ...this.form
        }),
        axiosConfig
      )
      .then(() => {
        this.$router.push('thanks')
      })
      .catch(() => {
        this.$router.push('404')
      })
    }
  }
}

</script>
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

.ct-icon {
  width: 24%;
  margin: 0 auto;
}

.ct-title {
  margin-bottom: 2em;
}

.ct-form {
  width: 80%;
  margin: 2em auto 0;
  input[type="text"],input[type="tel"],input[type="email"] {
    display: block;
    width: 80%;
    margin: .5em auto 2em;
    padding: 1em;
    border: 2px solid #333;
    border-radius: 5px;
    background-color: inherit;
    @include sp {
      padding: .5em;
    }
  }
  textarea {
    @extend input[type="text"];
    height: 13em;
  }
  input[type="submit"] {
    display: block;
    width: 15em;
    margin: 2em auto;
    padding: 1em;
    border: 2px solid #333;
    border-radius: 5px;
    background-color: transparent;
    cursor: pointer;
    transition: .4s;
    font-size: 1.8rem;
    &:hover {
      background-color: #f1bb29;
      border: 3px solid #f1bb29;
    }
  }
}

.ct-errors {
  color: rgb(213, 22, 68);
}

.radio-block {
  margin-bottom: 1em;
}

.radio-label {
  display: block;
  margin-bottom: 1em;
}

input[type=radio], input[type=checkbox] {
  display: none;
}

.radio {
  box-sizing: border-box;
  -webkit-transition: background-color 0.2s linear;
  transition: background-color 0.2s linear;
  position: relative;
  display: inline-block;
  margin: 0 20px 8px 0;
  padding: 12px 12px 12px 42px;
  border-radius: 8px;
  vertical-align: middle;
  cursor: pointer;

  &:hover {
    background-color: #f7f7f6;
    &:after {
      border-color: #333;
    }
  }

  &:after {
    -webkit-transition: border-color 0.2s linear;
    transition: border-color 0.2s linear;
    position: absolute;
    top: 50%;
    left: 15px;
    display: block;
    margin-top: -10px;
    width: 16px;
    height: 16px;
    border: 2px solid #bbb;
    border-radius: 6px;
    content: '';
  }
  &:before {
    -webkit-transition: opacity 0.2s linear;
    transition: opacity 0.2s linear;
    position: absolute;
    top: 50%;
    left: 18px;
    display: block;
    margin-top: -7px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #333;
    content: '';
    opacity: 0;
    input[type=radio]:checked + & {
      opacity: 1;
    }
  }
}

</style>
