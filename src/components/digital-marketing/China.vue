<template>
  <section class="china">
    <el-row>
      <el-col :sm="24" :md="12">
        <h4>Digital Marketing in China</h4>
      </el-col>
    </el-row>
    <el-row>
      <el-col :sm="24" :md="12">
        <ul>
          <li>TMALL / Taobao e-commerce platform</li>
          <li>Baidu Marketing</li>
          <li>Social Media Marketing</li>
          <li>Wechat</li>
          <li>Weibo</li>
          <li>Little Red Book</li>
          <li>TikTok</li>
        </ul>
      </el-col>
      <el-col :sm="24" :md="12">
        <img
          src="../../assets/asia-businesspeople-meeting-plan-analysis-statisti-2021-09-02-08-47-09-utc-1.png"
          alt=""
        />
      </el-col>
    </el-row>
    <el-row justify="space-between">
      <el-col :sm="24" :md="11">
        <img src="../../assets/Korean-Cosmetics-Taobao-1.png" alt="" />
      </el-col>
      <el-col :sm="24" :md="11">
        <p>TMALL / Taobao</p>
        <p>E-commerce platform (third partnership services & Ads)</p>
        <ul class="second">
          <li>E-commerce</li>
          <li>Platform activation</li>
          <li>Tmall / Taobao / JD setup and operations</li>
          <li>Brand protection</li>
        </ul>
      </el-col>
    </el-row>
    <el-row>
      <el-col :sm="24" :md="12">
        <h5>Content Marketing</h5>
        <ul>
          <li>TMall advertising</li>
          <li>Native e-commerce builds</li>
          <li>Wechat platforms Ads</li>
          <li>SEM in Baidu</li>
        </ul>
      </el-col>
      <el-col :sm="24" :md="12">
        <img
          src="../../assets/handsome-young-asian-man-in-black-clothes-in-festi-2021-08-30-07-44-26-utc-1.png"
          alt=""
        />
      </el-col>
    </el-row>
  </section>
</template>

<style scoped>
.china {
  padding: 3rem 0;
}

.china .el-row:first-of-type {
  margin-bottom: 7rem;
}

.china .el-row {
  /* align-items: center; */
  margin-bottom: 15rem;
}

.china .el-row .el-col:first-of-type {
  /* padding-left: 10rem; */
}

.china h4 {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 4.375rem;
  line-height: 5.625rem;
  letter-spacing: -0.005em;
  color: #111111;
  margin-left: 10rem;
}

.china ul {
  list-style: none;
  margin-left: 10rem;
}

.china ul li {
  font-family: "Abel";
  font-style: normal;
  font-weight: 400;
  font-size: 1.75rem;
  line-height: 210%;
  color: #6f6f6f;
  /* margin-bottom: 0.5rem; */
}

.china img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.china p {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 2.25rem;
  line-height: 5.625rem;
  letter-spacing: -0.005em;
  color: #111111;
}
.china ul.second {
  margin: 0;
  margin-top: 1rem;
}

.china h5 {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 4.375rem;
  line-height: 5.625rem;
  letter-spacing: -0.005em;
  color: #111111;
  margin-left: 10rem;
  margin-bottom: 1rem;
}

@media screen and (max-width: 991px) {
  .china h5,
  .china ul,
  .china p {
    text-align: center;
    padding: 0 10rem;
    margin-left: 0;
  }
}

@media screen and (max-width: 900px) {
  .china .el-row .el-col:first-of-type {
    /* padding-left: 2rem; */
  }

  .china h4 {
    word-break: break-word;
  }
}

@media screen and (max-width: 600px) {
  .china ul li {
    font-size: 3rem;
  }
}
</style>