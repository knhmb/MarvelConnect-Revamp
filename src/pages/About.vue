<template>
  <the-header></the-header>
  <section class="about">
    <top-section></top-section>
    <Agency />
    <our-mission></our-mission>
    <work-process></work-process>
  </section>
</template>

<script>
import TheHeader from "../components/common/TheHeader.vue";
import TopSection from "../components/about/TopSection.vue";
import Agency from "../components/about/Agency.vue";
import OurMission from "../components/about/OurMission.vue";
import WorkProcess from "../components/about/WorkProcess.vue";

export default {
  components: {
    TheHeader,
    TopSection,
    Agency,
    OurMission,
    WorkProcess,
  },
};
</script>

<style scoped>
.about {
  padding: 3rem 0 0 0;
}
</style>