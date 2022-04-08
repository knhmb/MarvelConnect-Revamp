<template>
  <section class="project-detail-2">
    <the-header></the-header>
    <top-section></top-section>
  </section>
</template>

<script>
import TheHeader from "../components/common/TheHeader.vue";
import TopSection from "../components/project-detail-2/TopSection.vue";

export default {
  components: {
    TheHeader,
    TopSection,
  },
};
</script>

<style scoped>
.project-detail-2 {
  background: #f9f9f9;
}
</style>