<template>
  <Header />
  <featured-work></featured-work>
  <section-3></section-3>
</template>

<script>
import Header from "../components/home/Header.vue";
import FeaturedWork from "../components/home/FeaturedWork.vue";
import Section3 from "../components/home/Section3.vue";

export default {
  components: {
    Header,
    FeaturedWork,
    Section3,
  },
};
</script>