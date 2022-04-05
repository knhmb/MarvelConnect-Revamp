<template>
  <section class="ai">
    <the-header></the-header>
    <top-section></top-section>
    <lets-talk></lets-talk>
    <recent-work></recent-work>
    <work-together></work-together>
  </section>
</template>

<script>
import TheHeader from "../components/common/TheHeader.vue";
import TopSection from "../components/ai/TopSection.vue";
import LetsTalk from "../components/ai/LetsTalk.vue";
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
.ai {
  background: #f3f3f3;
}
</style>