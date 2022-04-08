<template>
  <section class="more-work">
    <base-container>
      <h4>More Work</h4>
      <el-row justify="space-between">
        <el-col :span="11">
          <img src="../../assets/DENTISTCLINIC.png" alt="" />
          <p>Dentist Clinic APP</p>
          <p>Know More</p>
        </el-col>
        <el-col :span="11">
          <img src="../../assets/image-8.png" alt="" />
          <p>The Best Hotel Booking Sites</p>
          <p>Know More</p>
        </el-col>
      </el-row>
    </base-container>
  </section>
</template>

<style scoped>
.more-work {
  padding: 3rem 0;
}

.more-work .el-col {
  position: relative;
}

.more-work h4 {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 3.375rem;
  line-height: 140%;
  letter-spacing: -0.005em;
  color: #111111;
  margin-bottom: 4rem;
}

.more-work img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.more-work p:first-of-type {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 2rem;
  line-height: 2.875rem;
  text-align: right;
  letter-spacing: -0.014em;
  color: #111111;
  position: absolute;
  right: -1.5rem;
  bottom: 2rem;
}

.more-work p:nth-of-type(2) {
  font-family: "Abel";
  font-style: normal;
  font-weight: 400;
  font-size: 1.125rem;
  line-height: 2.25rem;
  text-align: right;
  color: #111111;
  position: absolute;
  bottom: 0rem;
  right: -1rem;
}

@media screen and (max-width: 722px) {
  .more-work h4 {
    font-size: 4rem;
  }
}
</style>