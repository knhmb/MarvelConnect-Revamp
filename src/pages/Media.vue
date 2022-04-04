<template>
  <section class="media">
    <the-header></the-header>
    <top-section></top-section>
    <Blog />
    <recent-work></recent-work>
    <work-together></work-together>
  </section>
</template>

<script>
import TheHeader from "../components/common/TheHeader.vue";
import TopSection from "../components/media/TopSection.vue";
import Blog from "../components/media/Blog.vue";
import RecentWork from "../components/media/RecentWork.vue";
import WorkTogether from "../components/services/WorkTogether.vue";

export default {
  components: {
    TheHeader,
    TopSection,
    Blog,
    RecentWork,
    WorkTogether,
  },
};
</script>

<style scoped>
.media {
  background: #f3f3f3;
  /* padding: 0 0 3rem 0; */
}
</style>