<template>
  <section class="lets-talk-web-app">
    <base-container>
      <el-row justify="space-between">
        <el-col :sm="24" :md="6">
          <ul>
            <li>Visual Design</li>
            <li>UX/UI design</li>
            <li>Interactivity</li>
            <li>Responsiveness</li>
            <li>Navigation</li>
            <li>User friendly</li>
          </ul>
        </el-col>
        <el-col :sm="24" :md="14">
          <img
            src="../../assets/picking-out-palette-for-website-design-2021-10-05-17-28-08-utc-1.png"
            alt=""
          />
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
      <el-col>
        <base-button centered :mode="'bold'">LET’S TALK</base-button>
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
  font-size: 1.75rem;
  line-height: 2.25rem;
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
  font-size: 1.75rem;
  line-height: 210%;
  color: #6f6f6f;
  margin-top: 1rem;
  margin-bottom: 15rem;
}

.web-app .lets-talk-web-app img {
  width: 100%;
}

.web-app .lets-talk-web-app .el-row:nth-of-type(2) .el-col:nth-of-type(2) {
  display: flex;
  justify-content: center;
  margin: 6rem 0;
}

@media screen and (max-width: 600px) {
  .web-app .lets-talk-web-app ul li {
    font-size: 3rem;
    line-height: 4rem;
  }

  .web-app .lets-talk-web-app p {
    font-size: 3rem;
  }
}
</style>