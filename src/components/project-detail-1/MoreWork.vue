<template>
  <section class="more-work">
    <base-container>
      <h4>More Work</h4>
      <el-row>
        <el-col :span="12">
          <img src="../../assets/DENTISTCLINIC.png" alt="" />
          <p>Dentist Clinic APP</p>
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
  font-size: 54px;
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
  font-size: 38px;
  line-height: 46px;
  text-align: right;
  letter-spacing: -0.014em;
  color: #111111;
  position: absolute;
  right: -1.5rem;
  bottom: 2rem;
}

@media screen and (max-width: 722px) {
  .more-work p:first-of-type {
    font-size: 28px;
  }
}
@media screen and (max-width: 536px) {
  .more-work p:first-of-type {
    font-size: 18px;
    bottom: 0;
  }
}
</style>