<template>
  <section class="feedback">
    <base-container>
      <el-row>
        <el-col :sm="24" :md="12">
          <h4>Build a website as a report</h4>
          <p>
            Marvelconnect has successfully strived for the opportunity to design
            a website for hotels.com annual general meeting against competitors
            from Australia, and we have gotten the job done decently.
          </p>
        </el-col>
        <el-col>
          <img src="../../assets/Image-12-1.png" alt="" />
        </el-col>
      </el-row>
    </base-container>
  </section>
</template>

<style scoped>
.feedback {
  padding: 3rem 0;
  background: #e6e6e6;
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
  width: 50%;
  margin-top: 2rem;
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