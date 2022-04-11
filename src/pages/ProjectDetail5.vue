<template>
  <section class="project-detail-5">
    <the-header></the-header>
    <top-section></top-section>
    <Challenge />
    <Feedback />
    <data-analysis></data-analysis>
    <more-work></more-work>
    <work-together></work-together>
  </section>
</template>

<script>
import TheHeader from "../components/common/TheHeader.vue";
import TopSection from "../components/project-detail-5/TopSection.vue";
import Challenge from "../components/project-detail-5/Challenge.vue";
import Feedback from "../components/project-detail-5/Feedback.vue";
import DataAnalysis from "../components/project-detail-5/DataAnalysis.vue";
import MoreWork from "../components/project-detail-4/MoreWork.vue";
import WorkTogether from "../components/project-detail-1/WorkTogether.vue";

export default {
  components: {
    TheHeader,
    TopSection,
    Challenge,
    Feedback,
    DataAnalysis,
    MoreWork,
    WorkTogether,
  },
};
</script>

<style scoped>
.project-detail-5 {
  background: #f9f9f9;
}
</style>