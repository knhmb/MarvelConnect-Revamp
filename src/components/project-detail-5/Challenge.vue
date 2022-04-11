<template>
  <section class="challenge">
    <base-container>
      <el-row>
        <el-col :sm="24" :md="14">
          <h4>Mission 1: International booking platform = tremendous data</h4>
          <p>
            According to their scale and their popularity in the world, the
            tremendous data of their customers are one of their biggest assets.
            With proper process and analysis, the O2O platform can “growth” with
            the ever-changing customer habits.
          </p>
        </el-col>
        <el-col>
          <img src="../../assets/Image-11.png" alt="" />
        </el-col>
        <el-col :sm="24" :md="12">
          <h4>Mission 2: Report for annual general meeting</h4>
          <p>
            As a scaled international company, every year hotels.com needs to
            provide an easy-to-read operational report for the annual general
            meeting.
          </p>
        </el-col>
      </el-row>
    </base-container>
  </section>
  <section class="challenge-img">
    <el-row>
      <el-col>
        <img
          src="../../assets/african-businessman-presenting-report-2021-08-27-22-14-07-utc-1.png"
          alt=""
        />
      </el-col>
    </el-row>
  </section>
</template>

<style scoped>
.challenge {
  padding: 3rem 0;
  background: #e6e6e6;
}

.challenge .el-col:nth-of-type(2) {
  text-align: center;
}

.challenge img {
  width: 70%;
  margin: 5rem 0;
}

.challenge h4 {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 1.875rem;
  line-height: 140%;
  letter-spacing: -0.005em;
  color: #111111;
}

.challenge p {
  font-family: "Abel";
  font-style: normal;
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 210%;
  color: #6f6f6f;
}

/* .challenge .el-col:nth-of-type(3) {
  text-align: center;
} */

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