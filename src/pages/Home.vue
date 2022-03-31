<template>
  <Header />
  <featured-work></featured-work>
  <section-3></section-3>
  <section-4></section-4>
  <latest-insights></latest-insights>
</template>

<script>
import Header from "../components/home/Header.vue";
import FeaturedWork from "../components/home/FeaturedWork.vue";
import Section3 from "../components/home/Section3.vue";
import Section4 from "../components/home/Section4.vue";
import LatestInsights from "../components/home/LatestInsights.vue";

export default {
  components: {
    Header,
    FeaturedWork,
    Section3,
    Section4,
    LatestInsights,
  },
};
</script>