<template>
  <section class="challenge">
    <!-- <base-container> -->
    <el-row>
      <el-col :sm="24" :md="16" class="p-10">
        <h4>Challenge</h4>
        <p>
          Being a “flagship technology infrastructure” of Hong Kong, the Science
          Park provides a campus-like environment of 330000 square meters.
          Because of its scale and size, and to keep the image of a
          high-technology enterprise, the workload, and manpower required for
          infrastructure purposes is high. Thus, systematical management is
          needed for daily maintenance.
        </p>
      </el-col>
      <el-col :sm="24" :md="8">
        <img src="../../assets/gantt-chart-2022-1.png" alt="" />
      </el-col>
      <el-col :span="24">
        <img
          class="social-distancing-img"
          src="../../assets/Image-6-1.png"
          alt=""
        />
      </el-col>
      <base-container>
        <el-col :sm="24" :md="12">
          <h4>ALL-in-one app</h4>
          <p>
            We build an all-in-one app to optimize their daily workflow for
            infrastructure. Here is the brief procedure of their workflow with
            the utilize of our app:
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
          src="../../assets/worker-taking-note-using-pen-paper-with-new-young-engineer-using-computer-tablet-work-faster-more-efficiency-1-1.png"
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

.challenge .el-row {
  align-items: center;
}
.challenge .el-col.p-10 {
  padding-left: 10rem;
  padding-right: 2rem;
}
.challenge .el-col:nth-of-type(2) img {
  width: 100%;
  margin-bottom: 4rem;
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
  /* margin-top: 8rem; */
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
  text-align: center;
}

.challenge .el-col:nth-of-type(3) img {
  width: 50%;
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