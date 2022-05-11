<template>
  <section class="more-work">
    <base-container>
      <h4>More Works...</h4>
      <el-row :gutter="30">
        <el-col :span="12">
          <!-- <div class="img-content"> -->
          <img
            src="../../assets/female-doctor-using-mobile-phone-in-clinic-2021-09-04-14-28-19-ut-3.png"
            alt=""
          />
          <p>Orienteering APP</p>
          <p>Know More</p>
          <!-- </div> -->
        </el-col>
        <el-col :span="12">
          <!-- <div class="img-content"> -->
          <img src="../../assets/image-16-2.png" alt="" />
          <p>APP of Science P<span>arks</span></p>
          <p>Know More</p>
          <!-- </div> -->
        </el-col>
      </el-row>
    </base-container>
  </section>
</template>

<style scoped>
.more-work {
  padding: 3rem 0 4rem 0;
}

.more-work .el-col {
  position: relative;
}

.more-work h4 {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 3.375rem;
  line-height: 140%;
  letter-spacing: -0.005em;
  color: #111111;
  margin-bottom: 4rem;
  text-decoration-line: underline;
}

/* .more-work .img-content {
  height: 60%;
  position: relative;
} */

.more-work img {
  width: 100%;
  /* height: 100%; */
  /* object-fit: contain; */
}

/* .more-work .el-col:first-of-type p:first-of-type {
  left: 9rem;
}
.more-work .el-col:first-of-type p:nth-of-type(2) {
  right: 6rem;
} */

/* .more-work .el-col:nth-of-type(2) p:first-of-type {
  right: -2.6rem;
  color: #fff;
} */

.more-work .el-col:nth-of-type(2) p:first-of-type span {
  color: #111;
}

/* .more-work .el-col:nth-of-type(2) p:nth-of-type(2) {
  right: -3rem;
} */

.more-work p:first-of-type {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 2rem;
  line-height: 2.875rem;
  text-align: right;
  letter-spacing: -0.014em;
  color: #111111;
}

.more-work p:nth-of-type(2) {
  font-family: "Abel";
  font-style: normal;
  font-weight: 400;
  font-size: 1.125rem;
  line-height: 2.25rem;
  text-align: right;
  color: #111111;
}

@media screen and (max-width: 722px) {
  .more-work h4 {
    font-size: 4rem;
  }
}
</style>