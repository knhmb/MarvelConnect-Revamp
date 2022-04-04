<template>
  <section class="web-app">
    <the-header></the-header>
    <top-section></top-section>
    <lets-talk></lets-talk>
  </section>
</template>

<script>
import TheHeader from "../components/common/TheHeader.vue";
import TopSection from "../components/web-app/TopSection.vue";
import LetsTalk from "../components/web-app/LetsTalk.vue";

export default {
  components: {
    TheHeader,
    TopSection,
    LetsTalk,
  },
};
</script>

<style scoped>
.web-app {
  background: #f3f3f3;
}
</style>