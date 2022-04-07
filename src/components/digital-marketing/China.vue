<template>
  <section class="china">
    <el-row>
      <el-col :sm="24" :md="10">
        <h4>Digital Marketing in China (TMALL)</h4>
        <ul>
          <li>Digital marketing</li>
          <li>PPC and SEO</li>
          <li>KOLs and livestreaming</li>
          <li>WeChat marketing</li>
          <li>Weibo marketing</li>
          <li>In-platform marketing</li>
          <li>Content marketing</li>
        </ul>
      </el-col>
      <el-col :sm="24" :md="14">
        <img src="../../assets/image-14.png" alt="" />
      </el-col>
    </el-row>
  </section>
</template>

<style scoped>
.china {
  padding: 3rem 0;
}

.china .el-row {
  align-items: center;
}

.china .el-row .el-col:first-of-type {
  padding-left: 10rem;
}

.china h4 {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 4.375rem;
  line-height: 5.625rem;
  letter-spacing: -0.005em;
  color: #111111;
  margin-bottom: 7rem;
}

.china ul {
  list-style: none;
}

.china ul li {
  font-family: "Abel";
  font-style: normal;
  font-weight: 400;
  font-size: 1.75rem;
  line-height: 210%;
  color: #6f6f6f;
  margin-bottom: 1rem;
}

.china img {
  width: 100%;
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