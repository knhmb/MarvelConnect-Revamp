<template>
  <section class="media">
    <the-header></the-header>
    <top-section></top-section>
  </section>
</template>

<script>
import TheHeader from "../components/common/TheHeader.vue";
import TopSection from "../components/media/TopSection.vue";

export default {
  components: {
    TheHeader,
    TopSection,
  },
};
</script>

<style scoped>
.media {
  background: #f3f3f3;
  /* padding: 0 0 3rem 0; */
}
</style>