<template>
  <div class="page-wrapper">
    <header-component />
    <div class="body-wrapper">
      <statistic-bar-component />
    </div>
  </div>
</template>

<script>
import {SessionManager} from "@/util/session"

import HeaderComponent from "@/components/HeaderComponent";
import StatisticBarComponent from "@/components/StatisticBarComponent";

export default {
  name: "Analytics",

  components: {
    StatisticBarComponent,
    HeaderComponent
  },

  mounted() {
    if (SessionManager.getSiteId() === null) {
      this.$router.push("home")
    }
  }

}
</script>

<style scoped>

</style>