<template>
  <section class="data-analysis">
    <base-container>
      <el-row>
        <el-col :sm="24" :md="12">
          <h4>Data analysis</h4>
          <p>
            We were also responsible for hotels.com’s data analysis for the
            customers’ habit analyses and prediction, which is useful for
            company decision making in the coming year.
          </p>
        </el-col>
        <el-col>
          <img src="../../assets/Image-13-1.png" alt="" />
        </el-col>
      </el-row>
    </base-container>
  </section>
  <section class="luxury">
    <el-row>
      <el-col>
        <img
          src="../../assets/luxury-classic-modern-bedroom-suite-hotel-1.png"
          alt=""
        />
      </el-col>
    </el-row>
  </section>
</template>

<style scoped>
.data-analysis {
  padding: 3rem 0;
  background: #fff;
}

.data-analysis .el-col:first-of-type {
  margin-left: 1.5rem;
}

.data-analysis h4 {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 1.875rem;
  line-height: 140%;
  letter-spacing: -0.005em;
  color: #111111;
}

.data-analysis p {
  font-family: "Abel";
  font-style: normal;
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 210%;
  color: #6f6f6f;
}

.data-analysis img {
  width: 100%;
  margin: 3rem 0;
}

.luxury img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media screen and (max-width: 750px) {
  .data-analysis h4 {
    font-size: 4rem;
  }

  .data-analysis p {
    font-size: 2rem;
  }
}
</style>