<template>
  <section class="recent-work">
    <base-container>
      <h4>Recent work</h4>
      <el-row :gutter="20">
        <el-col :sm="24" :md="12">
          <img
            src="../../assets/female-doctor-using-mobile-phone-in-clinic-2021-09-04-14-28-19-ut-3.png"
            alt=""
          />
          <p>Orienteering APP</p>
          <p>Know more</p>
        </el-col>
        <el-col :sm="24" :md="12">
          <img src="../../assets/image-16-2.png" alt="" />
          <p>Dentist Clinic APP</p>
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
  /* margin-top: -5.5rem; */
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

/* .recent-work .el-col:nth-of-type(2) p:first-of-type {
  margin-right: 3rem;
}

.recent-work .el-col:nth-of-type(2) p:nth-of-type(2) {
  margin-right: 2rem;
} */

@media screen and (max-width: 750px) {
  .recent-work p:first-of-type {
    font-size: 4rem;
    margin-top: 1.5rem;
  }

  .recent-work p:nth-of-type(2) {
    font-size: 2rem;
    line-height: 4rem;
  }
}
</style>