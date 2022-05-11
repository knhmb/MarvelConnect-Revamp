<template>
  <section class="challenge">
    <!-- <base-container> -->
    <el-row justify="space-between">
      <el-col :sm="24" :md="11">
        <h4>International booking platform = tremendous data</h4>
        <p>
          According to their scale and their popularity in the world, the
          tremendous data of their customers are one of their biggest assets.
          With proper process and analysis, the O2O platform can “growth” with
          the ever-changing customer habits.
        </p>
      </el-col>
      <el-col :sm="24" :md="12">
        <img
          src="../../assets/guest-booking-a-tour-at-a-hotel-2021-08-27-00-04-43-utc-1.png"
          alt=""
        />
      </el-col>
      <el-col :sm="24" :md="12">
        <img
          src="../../assets/two-businessman-investment-consultant-analyzing-co-2021-09-24-18-35-33-utc-1.png"
          alt=""
        />
      </el-col>
      <el-col :sm="24" :md="11">
        <h4>Report for annual general meeting</h4>
        <p>
          As a scaled international company, every year the hotel company needs
          to provide an easy-to-read operational report for the annual general
          meeting.
        </p>
      </el-col>
      <el-col :sm="24" :md="11">
        <h4>Build a web portal as a report</h4>
        <p>
          Marvelconnect has successfully strived for the opportunity to design a
          web portal for the hotel company annual general meeting against
          competitors from Australia, and we have gotten the job done decently.
        </p>
      </el-col>
      <el-col :sm="24" :md="12">
        <img
          src="../../assets/online-education-website-2021-12-09-15-19-35-utc-1.png"
          alt=""
        />
      </el-col>
      <el-col :sm="24" :md="12">
        <img
          src="../../assets/bitcoin-price-graph-data-trend-analysis-on-laptop-2021-09-01-00-19-02-utc-1.png"
          alt=""
        />
      </el-col>
      <el-col :sm="24" :md="11">
        <h4>Data analysis</h4>
        <p>
          We were also responsible for the hotel company data analysis for the
          customers’ habit analyses and prediction, which is useful for company
          decision making in the coming year.
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