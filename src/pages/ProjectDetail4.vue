<template>
  <section class="project-detail-4">
    <the-header></the-header>
    <top-section></top-section>
    <Challenge />
    <Feedback />
    <!-- <more-work></more-work> -->
    <work-together></work-together>
  </section>
</template>

<script>
import TheHeader from "../components/common/TheHeader.vue";
import TopSection from "../components/project-detail-4/TopSection.vue";
import Challenge from "../components/project-detail-4/Challenge.vue";
import Feedback from "../components/project-detail-4/Feedback.vue";
// import MoreWork from "../components/project-detail-1/MoreWork.vue";
import WorkTogether from "../components/project-detail-1/WorkTogether.vue";

export default {
  components: {
    TheHeader,
    TopSection,
    Challenge,
    Feedback,
    // MoreWork,
    WorkTogether,
  },
};
</script>

<style scoped>
.project-detail-4 {
  background: #f9f9f9;
}
</style>