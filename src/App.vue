<template>
  <router-view></router-view>
  <the-footer></the-footer>
</template>

<script>
import TheFooter from "./components/common/TheFooter.vue";

export default {
  components: {
    TheFooter,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 1.2vw;
}

body {
  width: 100vw;
  overflow-x: hidden;
}
</style>
