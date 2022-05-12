<template>
  <section class="challenge">
    <!-- <base-container> -->
    <el-row justify="space-between">
      <el-col :sm="24" :md="11">
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
      <el-col :sm="24" :md="12">
        <img src="../../assets/gantt-chart-2022-1-1.png" alt="" />
      </el-col>
      <el-col :sm="24" :md="12">
        <img
          src="../../assets/asian-creative-designer-team-casual-meeting-and-br-2021-12-09-05-53-03-utc-1.png"
          alt=""
        />
      </el-col>
      <el-col :sm="24" :md="11">
        <h4>All-in-one app</h4>
        <p>
          We build an all-in-one app to optimize their daily workflow for
          infrastructure. Here is the brief procedure of their workflow with the
          utilize of our app:
        </p>
      </el-col>
      <el-col :sm="24" :md="11">
        <h4>Time record and maintenance report</h4>
        <p>
          Step1, the frontline workers arrive at the site and report if there is
          any issue with the control room.
        </p>
      </el-col>
      <el-col :sm="24" :md="12">
        <img
          src="../../assets/worker-taking-note-using-pen-paper-with-new-young-engineer-using-computer-tablet-work-faster-more-efficiency-1-1-1.png"
          alt=""
        />
      </el-col>
      <el-col :sm="24" :md="12">
        <img src="../../assets/Image-16-3.png" alt="" />
      </el-col>
      <el-col :sm="24" :md="11">
        <h4>New experience with object recognition</h4>
        <p>
          Step2, the control will divide jobs for different workers, and workers
          received their orders via the app. Workers can use object recognition
          during their work.
        </p>
      </el-col>
      <el-col :sm="24" :md="11">
        <h4>Realtime feedback</h4>
        <p>
          Step3, During the work process, if workers have found any issue, they
          might take a photo and report the issue to the control room via the
          app.
        </p>
      </el-col>
      <el-col :sm="24" :md="12">
        <img
          src="../../assets/feedback-from-customer-employee-2021-09-04-12-34-51-utc-1.png"
          alt=""
        />
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