<template>
  <section class="project-detail-1-top-section">
    <img class="circular" src="../../assets/Subtract.png" alt="" />
    <img class="dotted" src="../../assets/Group-79.png" alt="" />
    <p class="p1">WHAT WE DO</p>
    <p class="p2">SCROLL</p>
    <base-container>
      <el-row>
        <el-col>
          <p>CASE STUDY</p>
        </el-col>
        <el-col :sm="24" :md="13">
          <h4>Orienteering APP With Object Recognition</h4>
        </el-col>
        <el-col :sm="24" :md="11">
          <img class="right-img" src="../../assets/BD.png" alt="" />
        </el-col>
        <el-col :sm="24" :md="12" :offset="8">
          <div class="blog-text">
            <p>Yearly event: In City to Save</p>
            <p>
              The client is a well-known international humanitarian medical NGO.
              Every year, Borderless Doctors holds an orienteering competition
              “in city to save” to raise funds and provide an opportunity for
              the public to experience what are the doctors are doing in the
              conflict areas.
            </p>
          </div>
        </el-col>
      </el-row>
    </base-container>
  </section>
  <section class="project-detail-1-img">
    <el-row>
      <el-col>
        <img
          src="../../assets/aerial-top-view-shot-hong-kong-cityscape-1.png"
          alt=""
        />
      </el-col>
    </el-row>
  </section>
</template>

<style scoped>
.project-detail-1 .project-detail-1-top-section {
  padding: 3rem 0;
  position: relative;
  /* overflow: hidden; */
}

.project-detail-1 .project-detail-1-top-section .el-col {
  height: 60%;
}

.project-detail-1 .project-detail-1-top-section img.circular {
  position: absolute;
  width: 50%;
  top: -13rem;
  right: 12.5rem;
}
.project-detail-1 .project-detail-1-top-section img.dotted {
  position: absolute;
  width: 10%;
  top: -5rem;
  right: 20rem;
}

.project-detail-1 .project-detail-1-top-section p.p1 {
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
.project-detail-1 .project-detail-1-top-section p.p2 {
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

.project-detail-1 .project-detail-1-top-section p.p2::before {
  content: "";
  background: #111;
  width: 30%;
  height: 2px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: -2.5rem;
}

.project-detail-1 .project-detail-1-top-section p {
  font-family: "Abel";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 135%;
  letter-spacing: 0.58em;
  color: #00559a;
  margin-bottom: 2rem;
}

.project-detail-1 .project-detail-1-top-section h4 {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 70px;
  line-height: 90px;
  letter-spacing: -0.005em;
  color: #111111;
  margin-left: 1rem;
  overflow-wrap: break-word;
  word-wrap: break-word;
}

.project-detail-1 .project-detail-1-top-section img {
  width: 100%;
  margin-top: 3rem;
}

.project-detail-1 .project-detail-1-top-section img.right-img {
  width: 70%;
  /* height: 60%; */
  object-fit: contain;
  margin-top: 0;
}

.project-detail-1
  .project-detail-1-top-section
  .el-col:nth-of-type(4)
  p:first-of-type {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 140%;
  letter-spacing: -0.005em;
  color: #111111;
}

.project-detail-1
  .project-detail-1-top-section
  .el-col:nth-of-type(4)
  p:nth-of-type(2) {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 160%;
  letter-spacing: -0.005em;
  color: #676565;
}

.project-detail-1 .project-detail-1-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media screen and (max-width: 991px) {
  .project-detail-1 .project-detail-1-top-section p.p2,
  .project-detail-1 .project-detail-1-top-section p.p1 {
    display: none;
  }

  .project-detail-1 .project-detail-1-top-section .el-col-offset-8 {
    margin-left: 0;
  }
}

@media screen and (max-width: 515px) {
  /* .project-detail-1 .project-detail-1-top-section h4 {
    font-size: 40px;
  } */
}
</style>