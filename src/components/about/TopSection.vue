<template>
  <section class="about-top-section">
    <base-container>
      <el-row>
        <el-col>
          <p>WHO WE ARE</p>
        </el-col>
        <el-col :sm="24" :md="12">
          <h4>A company that really focuses on innovation.</h4>
        </el-col>
        <el-col class="hidden-sm-and-down" :sm="24" :md="8" :offset="4">
          <p>THE BEST IN THE FIELD</p>
        </el-col>
        <el-col class="hidden-md-and-up" :sm="24">
          <p>THE BEST IN THE FIELD</p>
        </el-col>
      </el-row>
    </base-container>
    <el-row>
      <el-col>
        <img
          src="../../assets/businessmen-businesswomen-meeting-brainstorming-ideas-1.png"
          alt=""
        />
      </el-col>
    </el-row>
  </section>
</template>


<style scoped>
.about .about-top-section .el-row .el-col:first-of-type p {
  font-family: "Abel";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 135%;
  letter-spacing: 0.58em;
  color: #00559a;
  margin-bottom: 3rem;
}

.about .about-top-section .el-row .el-col h4 {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 70px;
  line-height: 90px;
  letter-spacing: -0.005em;
  color: #111111;
  word-break: break-word;
}

.about .about-top-section .el-row .el-col:nth-of-type(3) {
  margin-top: 17rem;
}

.about .about-top-section .el-row .el-col.hidden-md-and-up p,
.about .about-top-section .el-row .el-col.hidden-sm-and-down p {
  font-family: "Abel";
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 190%;
  letter-spacing: 0.02em;
  color: #6f6f6f;
}

.about .about-top-section .el-row:nth-of-type(2) {
  margin-top: 3rem;
}

.about .about-top-section .el-row:nth-of-type(2) .el-col {
  padding-left: 7rem;
}

.about .about-top-section .el-row:nth-of-type(2) img {
  /* float: right; */
  width: 100%;
  height: 100%;
  object-fit: contain;
  /* padding-left: 2rem; */
}

@media screen and (max-width: 470px) {
  .about .about-top-section .el-row .el-col h4 {
    font-size: 50px;
  }
}
</style>