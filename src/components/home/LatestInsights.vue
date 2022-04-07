<template>
  <div class="latest-insights">
    <base-container>
      <h4>Latest insights</h4>
      <p>Our latest perception and perspective on technology.</p>
      <el-row :gutter="40">
        <el-col :sm="24" :md="12">
          <img src="../../assets/unsplash_4vrZpOo7fTc.png" alt="" />
          <p class="title">Hong Kong</p>
          <p class="description">New Perception 1</p>
        </el-col>
        <el-col :sm="24" :md="12">
          <img src="../../assets/unsplash_PGdW_bHDbpI.png" alt="" />
          <p class="title">Hong Kong</p>
          <p class="description">New Perspective 1</p>
        </el-col>
        <el-col :sm="24" :md="12">
          <img src="../../assets/unsplash_-RBuQ2PK_L8.png" alt="" />
          <p class="title">Hong Kong</p>
          <p class="description">New Technology 1</p>
        </el-col>
        <el-col :sm="24" :md="12">
          <img src="../../assets/unsplash_Glel-RswQqM.png" alt="" />
          <p class="title">Hong Kong</p>
          <p class="description">New 1</p>
        </el-col>
        <el-col>
          <base-button> VIEW MORE WORK </base-button>
        </el-col>
      </el-row>
    </base-container>
  </div>
</template>

<style scoped>
.latest-insights {
  /* padding: 3rem 0; */
}

.latest-insights h4 {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 3.375rem;
  line-height: 4.125rem;
  letter-spacing: -0.005em;
  color: #111111;
}

.latest-insights p {
  font-family: "Abel";
  font-style: normal;
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 2.25rem;
  letter-spacing: 0.018em;
  color: #111111;
}

.latest-insights .el-row {
  margin-top: 2rem;
}

.latest-insights .el-row .el-col {
  margin-bottom: 1.5rem;
}

.latest-insights .el-row .el-col:last-of-type {
  display: flex;
  justify-content: center;
  margin-top: 4rem;
}

.latest-insights .el-row .el-col:nth-of-type(2n) {
  margin-top: 2.5rem;
}

.latest-insights .el-row img {
  width: 100%;
}

.latest-insights .el-row p.description {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 1.625rem;
  line-height: 153%;
  letter-spacing: 0.02em;
  color: #111111;
}

.latest-insights .el-row p.title {
  font-family: "Abel";
  font-style: normal;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 140%;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #111111;
  margin: 1rem 0;
}

@media screen and (max-width: 900px) {
  .latest-insights {
    padding-top: -2rem;
  }

  .latest-insights .el-row .el-col:nth-of-type(2n) {
    margin-top: 0;
  }
}

@media screen and (max-width: 790px) {
  .latest-insights h4 {
    font-size: 5rem;
    line-height: 8rem;
  }

  .latest-insights p {
    font-size: 2.5rem;
  }

  .latest-insights .el-row p.description {
    font-size: 3rem;
    line-height: 153%;
  }

  .latest-insights .el-row p.title {
    font-size: 2rem;
    line-height: 140%;
  }
}
</style>