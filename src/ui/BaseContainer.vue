<template>
  <div class="content-container">
    <slot></slot>
  </div>
</template>

<style scoped>
.content-container {
  padding: 0 10rem;
}

@media screen and (max-width: 900px) {
  .content-container {
    padding: 0 2rem;
  }
}
</style>