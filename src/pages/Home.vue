<template>
  <div class="page-wrapper">
    <header-component />
    <div class="body-wrapper">
      <div class="auth-wrapper">
        <div class="error" v-show="showError">
          <span class="error-message"> {{ errorMessage }} </span>
        </div>
        <span>Authorization</span>
        <input class="site-id-input" type="text" :placeholder="placeholder" @focus="placeholder = ''"
               @focusout="setPlaceholder" v-model="siteIdModel">
        <button class="confirm-button" @click="sendRequest">
          Войти
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"

import {validationMixin} from "vuelidate"
import {required, minLength, maxLength} from "vuelidate/lib/validators"

import {SessionManager} from "@/util/session";

import HeaderComponent from "@/components/HeaderComponent";

export default {

  name: "Home",

  components: {
    HeaderComponent
  },

  mixins: [validationMixin],

  data () {
    return {
      placeholder: "",
      siteIdModel: "",
      showError: false,
      errorMessage: ""
    }
  },

  methods: {
    setPlaceholder () {
      this.placeholder = "Type site id here"
    },

    sendRequest() {
      this.$v.$touch();

      if (this.$v.$invalid) {
        this.errorMessage = "Input must contain 24 symbols"
        this.showError = true
        return
      }

      let headers = {
        "Api-Key": "5f8475902b0be670555f1bb3:eEZn8u05G3bzRpdL7RiHCvrYAYo",
        "Leadhit-Site-Id": this.siteIdModel
      }

      axios.get("https://track-api.leadhit.io/client/test_auth", { headers }).then(() => {
        SessionManager.setSiteId(this.siteIdModel)
        this.$router.push("analytics")
      }).catch(() => {
        this.errorMessage = "Site Id not found"
        this.showError = true
      })
    }
  },

  watch: {
    siteIdModel () {
      this.showError = false
    }
  },

  validations: {
    siteIdModel: {
      required,
      minLength: minLength(24),
      maxLength: maxLength(24)
    }
  },

  mounted () {
    this.setPlaceholder()
  }
}
</script>

<style lang="scss">
  .auth-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-sizing: border-box;
    border: 1px solid #666666;
    border-radius: 4px;
    background: #e6e6e6;
    padding: 20px;
  }

  .site-id-input {
    box-sizing: border-box;
    height: 30px;
    padding: 5px 10px;
    width: 220px;
    font-size: 14px;
    margin-top: 20px;
    border: 1px solid #666666;
    border-radius: 4px;
    background: #ffffff;

  }

  .confirm-button {
    @extend .site-id-input;

    outline: none;
    cursor: pointer;
  }

  .confirm-button:hover {
    filter: brightness(98%);
  }
</style>