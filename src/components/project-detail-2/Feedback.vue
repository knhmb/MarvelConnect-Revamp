<template>
  <section class="feedback">
    <base-container>
      <el-row>
        <el-col :sm="24" :md="14">
          <h4>Easiler management for supervisors</h4>
          <p>
            For supervisors, they can view the workers’ working/training
            attendance in a systematic and organized way and assess the
            employees’ performance on working and training to make a better
            decision for management.
          </p>
        </el-col>
        <el-col :span="18">
          <img src="../../assets/Image-4.png" alt="" />
        </el-col>
        <el-col :sm="24" :md="14">
          <h4>Website development</h4>
          <p>
            Besides the app mentioned above, Marvelconnect was also responsible
            for the company website development.
          </p>
        </el-col>
        <el-col :span="18">
          <img src="../../assets/Image-5.png" alt="" />
        </el-col>
      </el-row>
    </base-container>
  </section>
</template>

<style scoped>
.feedback {
  padding: 3rem 0;
  background: #fff;
}

.feedback h4 {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 1.875rem;
  line-height: 140%;
  letter-spacing: -0.005em;
  color: #111111;
}

.feedback p {
  font-family: "Abel";
  font-style: normal;
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 210%;
  color: #6f6f6f;
}

.feedback .el-col:nth-of-type(2) {
  text-align: center;
}

.feedback img {
  width: 100%;
  margin: 4rem 0;
}

@media screen and (max-width: 750px) {
  .feedback h4 {
    font-size: 4rem;
  }

  .feedback p {
    font-size: 2.5rem;
  }

  .challenge img {
    width: 100%;
  }
}
</style>