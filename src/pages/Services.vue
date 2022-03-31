<template>
  <the-header></the-header>
  <section class="services">
    <top-section></top-section>
    <Specialization />
    <Partners />
    <work-together></work-together>
  </section>
</template>

<style scoped>
.services {
  padding: 3rem 0 0 0;
}
</style>

<script>
import TheHeader from "../components/common/TheHeader.vue";
import TopSection from "../components/services/TopSection.vue";
import Specialization from "../components/services/Specialization.vue";
import Partners from "../components/services/Partners.vue";
import WorkTogether from "../components/services/WorkTogether.vue";

export default {
  components: {
    TheHeader,
    TopSection,
    Specialization,
    Partners,
    WorkTogether,
  },
};
</script>