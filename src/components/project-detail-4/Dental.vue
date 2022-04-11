<template>
  <section class="dental">
    <el-row>
      <el-col :sm="24" :md="12">
        <h4>Dental anxiety? Not a problem</h4>
        <p>
          Besides giving convenience for diagnosis, according to statistics,
          over 90% of people refuse to see a dentist because of “dental
          anxiety”. This app could help to reduce their dental fear to encourage
          early detection of dental health problems.
        </p>
      </el-col>
      <el-col :sm="24" :md="12">
        <img src="../../assets/Image-10.png" alt="" />
      </el-col>
    </el-row>
  </section>
</template>

<style scoped>
.dental {
  background: #fff;
  padding: 3rem 0;
}

.dental .el-col {
  margin-bottom: 7rem;
}

.dental .el-col:first-of-type {
  padding-left: 10rem;
  padding-right: 1rem;
  align-self: flex-end;
}

.dental h4 {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 1.875rem;
  line-height: 140%;
  letter-spacing: -0.005em;
  color: #111111;
}

.dental p {
  font-family: "Abel";
  font-style: normal;
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 210%;
  color: #6f6f6f;
}

.dental img {
  width: 100%;
}

@media screen and (max-width: 991px) {
  .dental .el-col:first-of-type {
    padding-right: 10rem;
  }
}

@media screen and (max-width: 750px) {
  .dental h4 {
    font-size: 4rem;
  }
  .dental p {
    font-size: 2rem;
  }
}
</style>