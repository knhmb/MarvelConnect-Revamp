<template>
  <section class="project-detail-1">
    <the-header></the-header>
    <top-section></top-section>
    <Challenge />
  </section>
</template>

<script>
import TheHeader from "../components/common/TheHeader.vue";
import TopSection from "../components/project-detail-1/TopSection.vue";
import Challenge from "../components/project-detail-1/Challenge.vue";

export default {
  components: {
    TheHeader,
    TopSection,
    Challenge,
  },
};
</script>

<style scoped>
.project-detail-1 {
  background: #e6e6e6;
}
</style>