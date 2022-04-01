<template>
  <section class="contact-us">
    <!-- <the-header></the-header> -->
    <top-section></top-section>
    <lets-talk></lets-talk>
  </section>
</template>

<script>
// import TheHeader from "../components/common/TheHeader.vue";
import TopSection from "../components/contact/TopSection.vue";
import LetsTalk from "../components/contact/LetsTalk.vue";

export default {
  components: {
    // TheHeader,
    TopSection,
    LetsTalk,
  },
};
</script>

<style scoped>
.contact-us {
  /* padding: 3rem 0 0 0; */
}
</style>