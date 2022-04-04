<template>
  <section class="services-top-section">
    <base-container>
      <el-row>
        <el-col>
          <p>WHAT WE DO</p>
        </el-col>
        <el-col :sm="24" :md="12">
          <h4>Committed to the Future</h4>
        </el-col>
        <el-col class="hidden-sm-and-down" :sm="24" :md="8" :offset="4">
          <p>
            Marvelconnect provides several kinds of technical development and
            has plenty of experience in developing web, mobile apps, IoT, AI,
            and big data analysis.
          </p>
        </el-col>
        <el-col class="hidden-md-and-up" :sm="24">
          <p>
            Marvelconnect provides several kinds of technical development and
            has plenty of experience in developing web, mobile apps, IoT, AI,
            and big data analysis.
          </p>
        </el-col>
      </el-row>
    </base-container>
    <el-row>
      <el-col>
        <img
          src="../../assets/software-developer-coding-javascript-laptop-computer-1.png"
          alt=""
        />
      </el-col>
    </el-row>
  </section>
</template>

<style scoped>
.services .services-top-section .el-row .el-col:first-of-type p {
  font-family: "Abel";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 135%;
  letter-spacing: 0.58em;
  color: #00559a;
  margin-bottom: 3rem;
}

.services .services-top-section .el-row .el-col h4 {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 70px;
  line-height: 90px;
  letter-spacing: -0.005em;
  color: #111111;
  word-break: break-word;
}

.services .services-top-section .el-row .el-col:nth-of-type(3) {
  margin-top: 5rem;
}

.services .services-top-section .el-row .el-col.hidden-md-and-up p,
.services .services-top-section .el-row .el-col.hidden-sm-and-down p {
  font-family: "Abel";
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 190%;
  letter-spacing: 0.02em;
  color: #6f6f6f;
}

.services .services-top-section .el-row:nth-of-type(2) {
  margin-top: 9rem;
}

.services .services-top-section .el-row:nth-of-type(2) img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>