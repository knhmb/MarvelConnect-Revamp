<template>
  <section class="challenge">
    <!-- <base-container> -->
    <el-row>
      <base-container>
        <el-col class="img-content">
          <img src="../../assets/Image-2.png" alt="" />
        </el-col>
      </base-container>
      <base-container>
        <el-col :sm="24" :md="12">
          <h4>Challenge</h4>
          <p>
            To handle the massive operation for train transit in Bangkok,
            workers need to work in shifts, on the other hand, to keep the
            services and technical standard, attending and passing the
            on-the-job training is also part of their duty. How to organize and
            arrange the workers’ availability and following their training
            performance in a cost-efficient way has become an issue.
          </p>
        </el-col>
      </base-container>
      <el-col :span="24">
        <img
          class="social-distancing-img"
          src="../../assets/Image-3.png"
          alt=""
        />
      </el-col>
      <base-container>
        <el-col :sm="24" :md="12">
          <h4>Solution: One-stop app</h4>
          <p>
            We decide on a one-stop app for both the employees and the
            supervisors. With the app, workers can easily report for duty for
            work and training via an E-work roster and receive work allocation
            from their supervisors/ managers.
          </p>
        </el-col>
      </base-container>
    </el-row>
    <!-- </base-container> -->
  </section>
  <section class="challenge-img">
    <el-row>
      <el-col>
        <img
          src="../../assets/skyline-cityscape-building-sunrise-twilight-1.png"
          alt=""
        />
      </el-col>
    </el-row>
  </section>
</template>

<style scoped>
.challenge {
  padding: 3rem 0;
  background: #fff;
}

.challenge .el-col.img-content {
  text-align: center;
}

.challenge img {
  width: 70%;
}

.challenge h4 {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 1.875rem;
  line-height: 140%;
  letter-spacing: -0.005em;
  color: #111111;
  margin-top: 8rem;
}

.challenge p {
  font-family: "Abel";
  font-style: normal;
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 210%;
  color: #6f6f6f;
  margin-bottom: 8rem;
}

.challenge .el-col:nth-of-type(3) {
  text-align: end;
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

@media screen and (max-width: 750px) {
  .challenge h4 {
    font-size: 4rem;
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