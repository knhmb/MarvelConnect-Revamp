<template>
  <section class="lets-talk-web-app">
    <base-container>
      <el-row>
        <el-col :sm="24" :md="7">
          <ul>
            <li>Visual Design</li>
            <li>UX/UI design</li>
            <li>Interactivity</li>
            <li>Responsiveness</li>
            <li>Navigation</li>
            <li>User friendly</li>
          </ul>
        </el-col>
        <el-col :sm="24" :md="17">
          <p>
            Having a unique website design is an important part of the branding
            and marketing process of your business. We use the most famous CMS
            platform to help you develop the most professional web apps and
            websites in a very short time.
          </p>
        </el-col>
      </el-row>
    </base-container>
    <el-row>
      <el-col :span="12" :offset="12">
        <img src="../../assets/unsplash_PGdW_bHDbpI-1.png" alt="" />
      </el-col>
      <el-col>
        <base-button :mode="'bold'">LET’S TALK</base-button>
      </el-col>
    </el-row>
  </section>
</template>

<style scoped>
.web-app .lets-talk-web-app {
  padding: 3rem 0;
  background: #e6e6e6;
}

.web-app .lets-talk-web-app ul {
  list-style-type: none;
}

.web-app .lets-talk-web-app ul li {
  font-family: "Abel";
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 36px;
  color: #111111;
  margin-bottom: 2rem;
}

.web-app .lets-talk-web-app ul li::before {
  content: "+";
  color: #0de9f6;
  margin-right: 1rem;
}

.web-app .lets-talk-web-app p {
  font-family: "Abel";
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 210%;
  color: #6f6f6f;
  margin-top: 7rem;
}

.web-app .lets-talk-web-app img {
  width: 100%;
}

.web-app .lets-talk-web-app .el-row:nth-of-type(2) .el-col:nth-of-type(2) {
  display: flex;
  justify-content: center;
  margin: 6rem 0;
}
</style>