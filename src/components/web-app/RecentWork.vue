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
.recent-work {
  padding: 3rem 0 9rem 0;
  background: #f3f3f3;
}

.recent-work h4 {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 4.375rem;
  line-height: 5.625rem;
  letter-spacing: -0.005em;
  color: #111111;
  margin-bottom: 5rem;
}
.recent-work .el-col {
  position: relative;
}
.recent-work .el-col:first-of-type {
  margin-top: 21rem;
}

.recent-work img {
  width: 100%;
}

.recent-work p:first-of-type {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 2.125rem;
  line-height: 2.875rem;
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
.recent-work p:nth-of-type(2) {
  font-family: "Abel";
  font-style: normal;
  font-weight: 400;
  font-size: 1.125rem;
  line-height: 2.25rem;
  text-align: right;
  color: #111111;
  position: absolute;
  right: 0;
  margin-top: -3rem;
  /* margin-left: 8rem; */
}
.recent-work .el-col:nth-of-type(2) p:first-of-type {
  /* margin-right: 2.5rem; */
  position: absolute;
  right: -4rem;
  color: #fff;
}
.recent-work .el-col:nth-of-type(2) p:first-of-type span {
  color: #111;
}
.recent-work .el-col:nth-of-type(2) p:nth-of-type(2) {
  /* margin-right: 2rem; */
  position: absolute;
  right: -4.3rem;
}

@media screen and (max-width: 1280px) {
  .recent-work p:first-of-type {
    /* font-size: 32px; */
    margin-top: -5.5rem;
    right: -0.5rem;
  }
}

@media screen and (max-width: 1199px) {
  .recent-work .el-col:nth-of-type(2) {
    margin-top: 5rem;
  }

  .recent-work .el-col:first-of-type {
    margin-top: 0;
  }
}

@media screen and (max-width: 900px) {
  .recent-work .el-col:nth-of-type(2) p:first-of-type {
    right: 1rem;
  }

  .recent-work .el-col:nth-of-type(2) p:first-of-type span {
    color: #fff;
  }

  .recent-work .el-col:nth-of-type(2) p:nth-of-type(2) {
    right: 1rem;
    color: #fff;
  }
}

/* @media screen and (max-width: 750px) {
} */

@media screen and (max-width: 750px) {
  .recent-work p:first-of-type {
    /* font-size: 24px; */
    font-size: 3rem;
    line-height: 1rem;
  }

  .recent-work p:first-of-type {
    /* font-size: 28px; */
    margin-top: -6rem;
  }

  /* .recent-work .el-col:nth-of-type(2) p:first-of-type {
    margin-top: -3rem;
  } */

  .recent-work p:nth-of-type(2) {
    margin-top: -2.8rem;
    font-size: 2rem;
    /* line-height: 3rem; */
  }

  .recent-work .el-col:nth-of-type(2) p:first-of-type {
    margin-top: -6rem;
  }

  /* .recent-work .el-col:nth-of-type(2) p:nth-of-type(2) {
    margin-top: -2.5rem;
  } */
}

@media screen and (max-width: 390px) {
  .recent-work p:first-of-type,
  .recent-work .el-col:nth-of-type(2) p:first-of-type {
    /* font-size: 22px; */
  }
}
@media screen and (max-width: 360px) {
  .recent-work p:first-of-type,
  .recent-work .el-col:nth-of-type(2) p:first-of-type {
    /* font-size: 20px; */
  }
}
</style>