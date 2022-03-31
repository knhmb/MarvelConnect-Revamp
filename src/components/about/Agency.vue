<template>
  <section class="agency">
    <base-container>
      <img class="round" src="../../assets/Subtract.png" alt="" />
      <img src="../../assets/Group-79.png" alt="" />
      <p>A DIGITAL AGENCY</p>
      <h4>
        Your will, <br />
        Our hands.
      </h4>
      <base-button class="btn"> View our works </base-button>
    </base-container>
  </section>
</template>

<style scoped>
.agency {
  padding: 8rem 0;
  position: relative;
  overflow: hidden;
  background: #e6e6e6;
}

.agency img {
  position: absolute;
  right: 11rem;
}

.agency img.round {
  top: 1rem;
  right: 8rem;
  /* bottom: 1rem; */
  /* width: 90%; */
  height: 90%;
  /* object-fit: contain; */
}

.agency p {
  font-family: "Abel";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 135%;
  letter-spacing: 0.58em;
  color: #000000;
  margin-bottom: 5rem;
}

.agency h4 {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 70px;
  line-height: 90px;
  letter-spacing: -0.005em;
  color: #111111;
  margin-bottom: 2rem;
  margin-left: 2rem;
}

.agency .btn {
  margin-left: 2rem;
}
</style>