<template>
  <section class="digital-marketing">
    <the-header></the-header>
    <top-section></top-section>
    <what-we-do></what-we-do>
    <Global />
    <China />
    <Platform />
    <work-together></work-together>
  </section>
</template>

<script>
import TheHeader from "../components/common/TheHeader.vue";
import TopSection from "../components/digital-marketing/TopSection.vue";
import WhatWeDo from "../components/digital-marketing/WhatWeDo.vue";
import China from "../components/digital-marketing/China.vue";
import Platform from "../components/digital-marketing/Platform.vue";
import WorkTogether from "../components/services/WorkTogether.vue";
import Global from "../components/digital-marketing/Global.vue";

export default {
  components: {
    TheHeader,
    TopSection,
    WhatWeDo,
    China,
    Platform,
    WorkTogether,
    Global,
  },
};
</script>

<style scoped>
.digital-marketing {
  background: #f3f3f3;
}
</style>