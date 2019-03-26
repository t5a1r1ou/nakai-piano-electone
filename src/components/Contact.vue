<template>
  <div class="contents-block inner contact">
    <h2 class="contents-title">お問い合わせ</h2>
    <form name="contact" class="ct-form" @submit.prevent="handleSubmit" method="post" data-netlify="true" netlify-honeypot="bot-field">
      <input type="hidden" name="form-name" value="contact" />
      <p class="hidden"  style="display: none;">
      <label>Don’t fill this out: <input name="bot-field"></label>
    </p>
      <label for="username" :class="nameValidate">お名前※必須</label><input type="text" name="name" id="username" v-model="form.name" placeholder="中井 太郎">
      <label for="useremail">メールアドレス</label><input type="email" name="email" id="useremail" v-model="form.email" placeholder="nakai@sample.com">
      <label for="usertel">お電話番号</label><input type="tel" name="tel" id="usertel" v-model="form.tel" placeholder="080XXXXYYYY">
        <p>
          <p class="form-text" :class="contactValidate">※電話番号、メールアドレスどちらか必須</p>
        <input type="checkbox" name="check" value="希望する" id="apply" v-model="form.check"/>
    <label for="apply" class="checkbox">無料体験レッスンを希望する</label>
      </p>
      <p class="text-block">
        <label for="contact">お問い合わせ内容</label><textarea name="message" id="contact" v-model="form.message" placeholder="こちらにお問い合わせ内容を入力してください。"></textarea>
      </p>
      <p v-if="validates.warnMessage" class="ct-error">入力内容をご確認ください</p>
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
        check: false,
      },
      validates: {
        nameCheck: "",
        contactCheck: "",
        warnMessage: false
      }
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

      if (this.form.name) {
        this.validates.nameCheck = "valid"
      } else if (!this.form.name) {
        this.validates.nameCheck = "invalid"
      }

      if (this.form.email || this.form.tel) {
        this.validates.contactCheck = "valid"
      } else if (!this.form.email && !this.form.tel){
        this.validates.contactCheck = "invalid"
      }

      if (this.validates.nameCheck === "valid" && this.validates.contactCheck === "valid"){
        this.validates.warnMessage = false
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
      } else {
        this.validates.warnMessage = true
      }
    }
  },
  computed: {
    nameValidate () {
      return {
        'ct-error': this.validates.nameCheck == "invalid"
      }
    },
    contactValidate () {
      return {
        'ct-error': this.validates.contactCheck == "invalid"
      }
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

@mixin hover {
  @media only screen and(min-width: ($sp)) {
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
    @include hover {
      &:hover {
        background-color: #f1bb29;
        border: 3px solid #f1bb29;
      }
    }
  }
}

.ct-error {
  color: rgb(213, 22, 68);
  font-weight: bold; 
}

.radio-block {
  margin-bottom: 1em;
}

.radio-label {
  display: block;
  margin-bottom: 2em;
}

input[type=checkbox] {
  display: none;
}


.checkbox {
  box-sizing: border-box;
  -webkit-transition: background-color 0.2s linear;
  transition: background-color 0.2s linear;
  position: relative;
  display: inline-block;
  margin: 0 20px 8px 0;
  padding: 12px 12px 12px 42px;
  border-radius: 8px;
  background-color: #f6f7f8;
  vertical-align: middle;
  cursor: pointer;
  &:after {
    -webkit-transition: border-color 0.2s linear;
    transition: border-color 0.2s linear;
    position: absolute;
    top: 53%;
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
    top: 53%;
    left: 21px;
    display: block;
    margin-top: -7px;
    width: 5px;
    height: 9px;
    border-right: 3px solid #333;
    border-bottom: 3px solid #333;
    content: '';
    opacity: 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    input[type=checkbox]:checked + & {
      opacity: 1;
    }
  }
}

.form-text {
  margin-bottom: 1em;
}

.text-block {
  margin-top: 1em;
}

</style>
