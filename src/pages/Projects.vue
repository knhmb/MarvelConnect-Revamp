<template>
  <the-header></the-header>
  <section class="projects">
    <top-section></top-section>
    <Main />
  </section>
</template>

<style scoped>
.projects {
  padding: 3rem 0;
  background: #e6e6e6;
}
</style>


<script>
import TheHeader from "../components/common/TheHeader.vue";
import TopSection from "../components/projects/TopSection.vue";
import Main from "../components/projects/Main.vue";

export default {
  components: {
    TheHeader,
    TopSection,
    Main,
  },
};
</script>