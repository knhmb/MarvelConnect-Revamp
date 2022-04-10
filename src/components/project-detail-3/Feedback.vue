<template>
  <section class="feedback">
    <base-container>
      <el-row :gutter="20">
        <el-col :sm="24" :md="12">
          <h4>Restricted number of stuff</h4>
          <p>
            Step1, the frontline workers arrive at the site and report if there
            is any issue with the control room.
          </p>
        </el-col>
        <el-col :sm="24" :md="14">
          <h4>New experience with object recognition</h4>
          <p>
            Step2, the control will divide jobs for different workers, and
            workers received their orders via the app.
          </p>
        </el-col>
        <el-col :sm="24" :md="10">
          <img src="../../assets/Image-7-1.png" alt="" />
        </el-col>
        <el-col :sm="24" :md="10">
          <img src="../../assets/CaseStudy_MobileA-1.png" alt="" />
        </el-col>
        <el-col :sm="24" :md="10">
          <h4>Realtime feedback</h4>
          <p>
            Step3, During the work process, if workers have found any issue,
            they might take a photo and report the issue to the control room via
            the app.
          </p>
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

.feedback .el-col {
  margin: 4rem 0;
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
  /* text-align: center; */
}

.feedback img {
  width: 100%;
  /* margin: 4rem 0; */
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