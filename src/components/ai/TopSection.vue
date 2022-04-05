<template>
  <section class="ai-top-section">
    <img class="circular" src="../../assets/Subtract.png" alt="" />
    <img class="dotted" src="../../assets/Group-79.png" alt="" />
    <p class="p1">WHAT WE DO</p>
    <p class="p2">SCROLL</p>
    <base-container>
      <el-row>
        <el-col>
          <p>Service</p>
        </el-col>
        <el-col :sm="24" :md="12">
          <h4>AI and Machine Learning</h4>
        </el-col>
        <el-col :sm="24" :md="12">
          <img
            src="../../assets/circuit-board-and-ai-micro-processor-artificial-i-2021-09-03-22-56-18-utc-1.png"
            alt=""
          />
          <div class="blog-text">
            <p>
              AI is going to be prevalent, and it is already being adopted in
              many sectors of our daily life.
            </p>
            <p>
              Marvelconnect is one of the very few companies who provides AI
              system development in Hong Kong. Currently, many big corporations
              and public transportation infrastructure are deploying our AI
              technology.
            </p>
          </div>
        </el-col>
      </el-row>
    </base-container>
  </section>
</template>

<style scoped>
.ai .ai-top-section {
  padding: 3rem 0;
  position: relative;
  /* overflow: hidden; */
}

.ai .ai-top-section img.circular {
  position: absolute;
  width: 50%;
  top: -13rem;
  right: 12.5rem;
}
.ai .ai-top-section img.dotted {
  position: absolute;
  width: 10%;
  top: -5rem;
  right: 20rem;
}

.ai .ai-top-section p.p1 {
  font-family: "Abel";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0.6em;
  color: #111111;
  position: absolute;
  transform: rotate(90deg);
  right: 0;
  top: 30%;
}
.ai .ai-top-section p.p2 {
  font-family: "Abel";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0.6em;
  color: #111111;
  position: absolute;
  transform: rotate(90deg);
  right: 1.8rem;
  /* left: 4rem; */
  top: 55%;
}

.ai .ai-top-section p.p2::before {
  content: "";
  background: #111;
  width: 30%;
  height: 2px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: -2.5rem;
}

.ai .ai-top-section p {
  font-family: "Abel";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 135%;
  letter-spacing: 0.58em;
  color: #00559a;
  margin-bottom: 2rem;
}

.ai .ai-top-section h4 {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 70px;
  line-height: 90px;
  letter-spacing: -0.005em;
  color: #111111;
  margin-left: 1rem;
}

.ai .ai-top-section img {
  width: 100%;
  margin-top: 3rem;
}

.ai .ai-top-section .el-col:nth-of-type(3) .blog-text {
  margin: 3rem 2rem;
}

.ai .ai-top-section .el-col:nth-of-type(3) p:first-of-type {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 140%;
  letter-spacing: -0.005em;
  color: #111111;
}

.ai .ai-top-section .el-col:nth-of-type(3) p:nth-of-type(2) {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 160%;
  letter-spacing: -0.005em;
  color: #676565;
}

@media screen and (max-width: 991px) {
  .ai .ai-top-section p.p2,
  .ai .ai-top-section p.p1 {
    display: none;
  }
}
</style>