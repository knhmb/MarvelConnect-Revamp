<template>
  <section class="lets-talk">
    <base-container>
      <el-row justify="space-between">
        <el-col :sm="24" :md="9">
          <p>Let’s Talk</p>
          <p>Tell us about your next project.</p>
        </el-col>
        <el-col :sm="24" :md="9">
          <p>Our Office</p>
          <p>
            Unit 1701,17/F,Enterprise Square Three, 39 Wang Chiu Road, Kowloon
            Bay, Kowloon,Hong Kong
          </p>
        </el-col>
        <el-col :sm="24" :md="9">
          <a class="email" href="#">info@marvelconnect.com</a>
        </el-col>
        <el-col :sm="24" :md="9">
          <a href="#">+852-3116 7505</a>
        </el-col>
      </el-row>
    </base-container>
  </section>
</template>

<style scoped>
.lets-talk {
  background: #f2f2f2;
  padding: 6rem 0;
}

.lets-talk .el-row {
  align-items: baseline;
}

.lets-talk .el-col {
  margin-bottom: 1rem;
}

.lets-talk .el-col p:first-of-type {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 1.9375rem;
  line-height: 120%;
  color: #111111;
  margin-bottom: 0.5rem;
}

.lets-talk .el-col p:nth-of-type(2),
.lets-talk .el-col a {
  font-family: "Abel";
  font-style: normal;
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 120%;
  letter-spacing: 0.018em;
  color: #808080;
  margin-bottom: 2rem;
}

.lets-talk .el-col a {
  color: #3c91d6;
  text-decoration: none;
  position: relative;
}

.lets-talk .el-col a::after {
  content: "";
  position: absolute;
  width: 110%;
  height: 0.125rem;
  background: #3c91d6;
  bottom: -0.5rem;
  left: 0;
}

.lets-talk .el-col a.email::after {
  width: 90%;
}

@media screen and (max-width: 700px) {
  .lets-talk .el-col p:first-of-type {
    font-size: 4rem;
  }

  .lets-talk .el-col p:nth-of-type(2),
  .lets-talk .el-col a {
    font-size: 2rem;
  }
}

/* .lets-talk .el-col a:hover::after {
  background: red;
} */

/* .lets-talk .el-col */
</style>