<template>
  <section class="challenge">
    <!-- <base-container> -->
    <el-row justify="space-between">
      <el-col :sm="24" :md="11">
        <h4>Challenge</h4>
        <p>
          To handle the massive operation for train transit in Bangkok, workers
          need to work in shifts, on the other hand, to keep the services and
          technical standard, attending and passing the on-the-job training is
          also part of their duty. How to organize and arrange the workers’
          availability and following their training performance in a
          cost-efficient way has become an issue.
        </p>
      </el-col>
      <el-col :sm="24" :md="12">
        <img src="../../assets/Image-14-2.png" alt="" />
      </el-col>
      <el-col :sm="24" :md="12">
        <img src="../../assets/Image-15-1.png" alt="" />
      </el-col>
      <el-col :sm="24" :md="11">
        <h4>Solution: One-stop app</h4>
        <p>
          We decide on a one-stop app for both the employees and the
          supervisors. With the app, workers can easily report for duty for work
          and training via an E-work roster and receive work allocation from
          their supervisors/ managers.
        </p>
      </el-col>
      <el-col :sm="24" :md="11">
        <h4>Easiler management for supervisors</h4>
        <p>
          For supervisors, they can view the workers’ working/training
          attendance in a systematic and organized way and assess the employees’
          performance on working and training to make a better decision for
          management.
        </p>
      </el-col>
      <el-col :sm="24" :md="12">
        <img
          src="../../assets/skyline-cityscape-building-sunrise-twilight-1-1.png"
          alt=""
        />
      </el-col>
      <el-col :sm="24" :md="12">
        <img
          src="../../assets/email-inbox-message-list-online-interface-2021-08-27-00-04-57-utc-1.png"
          alt=""
        />
      </el-col>
      <el-col :sm="24" :md="11">
        <h4>Web interface development</h4>
        <p>
          Besides the app mentioned above, Marvelconnect was also responsible
          for the web interface development.
        </p>
      </el-col>
    </el-row>
    <!-- </base-container> -->
  </section>
</template>

<style scoped>
.challenge {
  padding: 10rem 0;
  background: #e6e6e6;
}

.challenge .el-row {
  align-items: center;
}

.challenge .el-col {
  margin-bottom: 7rem;
}

.challenge .el-col:nth-of-type(4n) {
  padding-right: 3rem;
}

.challenge .el-col:nth-of-type(2n + 1) h4,
.challenge .el-col:nth-of-type(2n + 1) p {
  margin-left: 10rem;
}

.challenge img {
  width: 100%;
  /* height: 100%;
  object-fit: cover; */
}

.challenge h4 {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 1.875rem;
  line-height: 140%;
  letter-spacing: -0.005em;
  color: #111111;
  margin-bottom: 2rem;
}

.challenge p {
  font-family: "Abel";
  font-style: normal;
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 210%;
  color: #6f6f6f;
  /* margin-bottom: 8rem; */
}

.challenge .el-col:nth-of-type(3) {
  text-align: center;
}

.challenge img.social-distancing-img {
  width: 80%;
  margin-bottom: 4rem;
}

.challenge-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media screen and (max-width: 991px) {
  .challenge .el-col:nth-of-type(2n + 1) h4,
  .challenge .el-col:nth-of-type(2n + 1) p {
    margin-left: 0;
  }

  .challenge .el-col h4,
  .challenge .el-col p {
    padding: 0 10rem;
    text-align: center;
  }
}

@media screen and (max-width: 750px) {
  .challenge h4 {
    font-size: 4rem;
  }

  .challenge .el-col:nth-of-type(2) h4 {
    margin-top: 4rem;
  }

  .challenge p {
    font-size: 2.5rem;
  }

  .challenge img {
    width: 100%;
  }

  .challenge img.social-distancing-img {
    width: 100%;
    margin-bottom: 4rem;
  }
}
</style>