<template>
  <section class="recent-work">
    <base-container>
      <h4>Recent work</h4>
      <el-row :gutter="20">
        <el-col :sm="24" :lg="8">
          <img src="../../assets/BD.png" alt="" />
          <p>Orienteering APP</p>
          <p>Know more</p>
        </el-col>
        <el-col :sm="24" :lg="16">
          <img src="../../assets/DENTISTCLINIC.png" alt="" />
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
  font-size: 70px;
  line-height: 90px;
  letter-spacing: -0.005em;
  color: #111111;
  margin-bottom: 5rem;
}

.recent-work .el-col {
  position: relative;
}

.recent-work img {
  width: 85%;
}

.recent-work p:first-of-type {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 34px;
  line-height: 46px;
  text-align: right;
  letter-spacing: -0.014em;
  color: #111111;
  margin-top: -5.5rem;
  /* margin-left: 2rem; */
  /* position: absolute;
  bottom: 3rem;
  right: -4rem; */
}

.recent-work p:nth-of-type(2) {
  font-family: "Abel";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 36px;
  text-align: right;
  color: #111111;
  /* margin-left: 8rem; */
}

.recent-work .el-col:nth-of-type(2) {
  margin-top: 21rem;
}

.recent-work .el-col:nth-of-type(2) p:first-of-type {
  margin-right: 2.5rem;
}

.recent-work .el-col:nth-of-type(2) p:nth-of-type(2) {
  margin-right: 2rem;
}

@media screen and (max-width: 1199px) {
  .recent-work .el-col:nth-of-type(2) {
    margin-top: 5rem;
  }
}

@media screen and (max-width: 750px) {
  .recent-work p:first-of-type {
    font-size: 28px;
    margin-top: -4.5rem;
  }

  .recent-work .el-col:nth-of-type(2) p:first-of-type {
    font-size: 28px;
    margin-top: -3rem;
  }
}
</style>