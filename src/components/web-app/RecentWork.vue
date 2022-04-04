<template>
  <section class="recent-work">
    <base-container>
      <h4>Recent work</h4>
      <el-row :gutter="20">
        <el-col :sm="24" :lg="12">
          <img src="../../assets/image-8.png" alt="" />
          <p>The Best Hotel Booking Sites</p>
          <p>Know more</p>
        </el-col>
        <el-col :sm="24" :lg="12">
          <img src="../../assets/image-16.png" alt="" />
          <p>APP of Science P<span>arks</span></p>
          <p>Know more</p>
        </el-col>
      </el-row>
    </base-container>
  </section>
</template>

<style scoped>
.web-app .recent-work {
  padding: 3rem 0 9rem 0;
  background: #f3f3f3;
}

.web-app .recent-work h4 {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 70px;
  line-height: 90px;
  letter-spacing: -0.005em;
  color: #111111;
  margin-bottom: 5rem;
}

.web-app .recent-work .el-col {
  position: relative;
}

.web-app .recent-work .el-col:first-of-type {
  margin-top: 21rem;
}

.web-app .recent-work img {
  width: 100%;
}

.web-app .recent-work p:first-of-type {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 34px;
  line-height: 46px;
  text-align: right;
  letter-spacing: -0.014em;
  color: #111111;
  margin-top: -5.5rem;
  position: absolute;
  right: -0.5rem;
  /* margin-left: 2rem; */
  /* position: absolute;
  bottom: 3rem;
  right: -4rem; */
}

.web-app .recent-work p:nth-of-type(2) {
  font-family: "Abel";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 36px;
  text-align: right;
  color: #111111;
  position: absolute;
  right: 0;
  margin-top: -3rem;
  /* margin-left: 8rem; */
}

.web-app .recent-work .el-col:nth-of-type(2) p:first-of-type {
  /* margin-right: 2.5rem; */
  position: absolute;
  right: -4rem;
  color: #fff;
}

.web-app .recent-work .el-col:nth-of-type(2) p:first-of-type span {
  color: #111;
}

.web-app .recent-work .el-col:nth-of-type(2) p:nth-of-type(2) {
  /* margin-right: 2rem; */
  position: absolute;
  right: -4.3rem;
}

@media screen and (max-width: 1199px) {
  .web-app .recent-work .el-col:nth-of-type(2) {
    margin-top: 5rem;
  }

  .web-app .recent-work .el-col:first-of-type {
    margin-top: 0;
  }
}

@media screen and (max-width: 900px) {
  .web-app .recent-work .el-col:nth-of-type(2) p:first-of-type {
    right: 1rem;
  }

  .web-app .recent-work .el-col:nth-of-type(2) p:first-of-type span {
    color: #fff;
  }

  .web-app .recent-work .el-col:nth-of-type(2) p:nth-of-type(2) {
    right: 1rem;
    color: #fff;
  }
}

@media screen and (max-width: 750px) {
  .web-app .recent-work p:first-of-type {
    font-size: 28px;
    margin-top: -4.5rem;
  }

  .web-app .recent-work .el-col:nth-of-type(2) p:first-of-type {
    font-size: 28px;
    margin-top: -3rem;
  }
}

@media screen and (max-width: 750px) {
  .web-app .recent-work p:first-of-type {
    font-size: 24px;
  }

  .web-app .recent-work p:nth-of-type(2) {
    margin-top: -2.5rem;
  }

  .web-app .recent-work .el-col:nth-of-type(2) p:first-of-type {
    margin-top: -4.5rem;
  }

  .web-app .recent-work .el-col:nth-of-type(2) p:nth-of-type(2) {
    margin-top: -2.5rem;
  }
}

@media screen and (max-width: 390px) {
  .web-app .recent-work p:first-of-type,
  .web-app .recent-work .el-col:nth-of-type(2) p:first-of-type {
    font-size: 22px;
  }
}
@media screen and (max-width: 360px) {
  .web-app .recent-work p:first-of-type,
  .web-app .recent-work .el-col:nth-of-type(2) p:first-of-type {
    font-size: 20px;
  }
}
</style>