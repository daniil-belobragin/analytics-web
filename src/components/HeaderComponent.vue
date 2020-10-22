<template>
  <div class="header-wrapper">
    <router-link to="home" class="link" >
      <span class="logo" @click="toHome">
        LeadHit
      </span>
    </router-link>
  </div>
</template>

<script>
import {SessionManager} from "@/util/session";

export default {
  name: "HeaderComponent",

  methods: {
    toHome () {
      SessionManager.clearSiteId()
    }
  }
}
</script>

<style scoped>
  @import "../assets/style/style.scss";

  .header-wrapper {
    box-sizing: border-box;
    width: 100%;
    padding: 20px 30px;
    display: flex;
    background: #5467df;
  }

  .logo {
    color: white;
    font-size: 22px;
    font-weight: 700;
  }

  .link {
    text-decoration: none;
    background: transparent;
    border: none;
    outline: none;
    padding: 0;
  }

</style>