<template>
  <section class="recent-work">
    <base-container>
      <h4>Recent work</h4>
      <el-row :gutter="20">
        <el-col :sm="24" :md="12">
          <img src="../../assets/DENTISTCLINIC.png" alt="" />
          <p>Dentist Clinic APP</p>
          <p>Know more</p>
        </el-col>
        <el-col :sm="24" :md="12">
          <img src="../../assets/image-8.png" alt="" />
          <p>The Best Hotel Booking Sites</p>
          <p>Know more</p>
        </el-col>
      </el-row>
    </base-container>
  </section>
</template>

<style scoped>
.recent-work {
  padding: 3rem 0 9rem 0;
  background: #f3f3f3;
}

.recent-work h4 {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 4.375rem;
  line-height: 5.625rem;
  letter-spacing: -0.005em;
  color: #111111;
  margin-bottom: 5rem;
}
.recent-work .el-col {
  position: relative;
}

.recent-work img {
  width: 100%;
}

.recent-work p:first-of-type {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 2.125rem;
  line-height: 2.875rem;
  text-align: right;
  letter-spacing: -0.014em;
  color: #111111;
}

.recent-work p:nth-of-type(2) {
  font-family: "Abel";
  font-style: normal;
  font-weight: 400;
  font-size: 1.125rem;
  line-height: 2.25rem;
  text-align: right;
  color: #111111;
}
.recent-work .el-col:nth-of-type(2) p:first-of-type {
  color: #111;
}
.recent-work .el-col:nth-of-type(2) p:first-of-type span {
  color: #111;
}

@media screen and (max-width: 991px) {
  .recent-work .el-col:last-of-type {
    margin-top: 2rem;
  }
  .recent-work p:first-of-type {
    margin: 2rem 0;
    font-size: 3rem;
    line-height: 1rem;
  }

  .recent-work p:nth-of-type(2) {
    font-size: 2rem;
  }
}
</style>