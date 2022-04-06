<template>
  <section class="project-detail-1">
    <the-header></the-header>
    <top-section></top-section>
    <Challenge />
    <Experience />
    <Feedback />
    <more-work></more-work>
  </section>
</template>

<script>
import TheHeader from "../components/common/TheHeader.vue";
import TopSection from "../components/project-detail-1/TopSection.vue";
import Challenge from "../components/project-detail-1/Challenge.vue";
import Experience from "../components/project-detail-1/Experience.vue";
import Feedback from "../components/project-detail-1/Feedback.vue";
import MoreWork from "../components/project-detail-1/MoreWork.vue";

export default {
  components: {
    TheHeader,
    TopSection,
    Challenge,
    Experience,
    Feedback,
    MoreWork,
  },
};
</script>

<style scoped>
.project-detail-1 {
  background: #e6e6e6;
}
</style>