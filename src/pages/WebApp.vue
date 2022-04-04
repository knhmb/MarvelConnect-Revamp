<template>
  <section class="web-app">
    <the-header></the-header>
    <top-section></top-section>
    <lets-talk></lets-talk>
    <recent-work></recent-work>
    <work-together></work-together>
  </section>
</template>

<script>
import TheHeader from "../components/common/TheHeader.vue";
import TopSection from "../components/web-app/TopSection.vue";
import LetsTalk from "../components/web-app/LetsTalk.vue";
import RecentWork from "../components/web-app/RecentWork.vue";
import WorkTogether from "../components/services/WorkTogether.vue";

export default {
  components: {
    TheHeader,
    TopSection,
    LetsTalk,
    RecentWork,
    WorkTogether,
  },
};
</script>

<style scoped>
.web-app {
  background: #f3f3f3;
}
</style>