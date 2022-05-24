<template>
  <section class="project-detail-2-top-section sidebar-menu">
    <img class="circular" src="../../assets/Subtract.png" alt="" />
    <img class="dotted" src="../../assets/Group-79.png" alt="" />
    <p class="p1">CASE STUDIES</p>
    <!-- <p class="p2">SCROLL</p> -->
    <base-container>
      <el-row>
        <el-col>
          <p>CASE STUDY</p>
        </el-col>
        <el-col :sm="24" :md="11">
          <h4>Mass Transit System (Thailand)</h4>
          <p>SERVICE</p>
          <p>Website development, App(Operation managenment)</p>
          <p>ROLE</p>
          <ul>
            <li>UI/UX Design</li>
            <li>CMS</li>
            <li>Website design</li>
          </ul>
        </el-col>
        <el-col :sm="24" :md="13">
          <img
            class="right-img"
            src="../../assets/bangkok-electric-train-at-sukhumvit-route-2021-08-26-15-29-22-utc-1.png"
            alt=""
          />
          <div class="blog-text">
            <p>About the client</p>
            <p>
              The client is one of the biggest public companies in Thailand,
              which is responsible for the railway system. Except for the public
              mass transit, their business all involved media/advertising,
              property/real estate, and associated service business.
            </p>
          </div>
        </el-col>
        <!-- <el-col :sm="24" :md="12">
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
        </el-col> -->
      </el-row>
    </base-container>
  </section>
  <section class="project-detail-2-img">
    <el-row>
      <el-col>
        <img
          src="../../assets/train-speeding-through-railway-station-with-extend-2021-08-26-18-55-17-utc-1.png"
          alt=""
        />
        <p>The majority share holder of Thailand Mass Transit System</p>
      </el-col>
    </el-row>
  </section>
</template>

<script>
import { gsap } from "gsap";

export default {
  mounted() {
    gsap.fromTo(
      ".project-detail-2-top-section",
      {
        x: -900,
        opacity: 0,
      },
      {
        duration: 2,
        opacity: 1,
        delay: 2,
        x: 0,
        ease: "circ.out",
      }
    );
  },
};
</script>

<style scoped>
.project-detail-2 .project-detail-2-top-section {
  padding: 3rem 0;
  position: relative;
  background-color: #e6e6e6;
  /* overflow: hidden; */
}

.project-detail-2 .project-detail-2-top-section .el-col {
  /* height: 60%; */
}

.project-detail-2 .project-detail-2-top-section img.circular {
  position: absolute;
  width: 50%;
  top: -13rem;
  right: 12.5rem;
}
.project-detail-2 .project-detail-2-top-section img.dotted {
  position: absolute;
  width: 10%;
  top: -5rem;
  right: 20rem;
}

.project-detail-2 .project-detail-2-top-section p.p1 {
  font-family: "Abel";
  font-style: normal;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 0.9375rem;
  letter-spacing: 0.6em;
  color: #111111;
  position: absolute;
  transform: rotate(90deg);
  right: 3rem;
  top: 33%;
}
.project-detail-2 .project-detail-2-top-section p.p2 {
  font-family: "Abel";
  font-style: normal;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 0.9375rem;
  letter-spacing: 0.6em;
  color: #111111;
  position: absolute;
  transform: rotate(90deg);
  right: 1.8rem;
  /* left: 4rem; */
  top: 55%;
}

.project-detail-2 .project-detail-2-top-section p.p2::before {
  content: "";
  background: #111;
  width: 30%;
  height: 0.125rem;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: -2.5rem;
}

.project-detail-2 .project-detail-2-top-section p {
  font-family: "Abel";
  font-style: normal;
  font-weight: 400;
  font-size: 1.125rem;
  line-height: 135%;
  letter-spacing: 0.58em;
  color: #00559a;
  margin-bottom: 2rem;
}

.project-detail-2 .project-detail-2-top-section h4 {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 3.8rem;
  line-height: 5.625rem;
  letter-spacing: -0.005em;
  color: #111111;
  margin-left: 1rem;
  overflow-wrap: break-word;
  word-wrap: break-word;
}

.project-detail-2 .project-detail-2-top-section img {
  width: 100%;
  margin-top: 3rem;
}

.project-detail-2 .project-detail-2-top-section img.right-img {
  width: 100%;
  margin: 7rem 0;
}

.project-detail-2 .project-detail-2-top-section .el-col:first-of-type p {
  margin-left: 8rem;
}

.project-detail-2 .project-detail-2-top-section .el-col:nth-of-type(2) p,
.project-detail-2 .project-detail-2-top-section .el-col:nth-of-type(2) ul {
  margin-left: 3rem;
}

.project-detail-2 .project-detail-2-top-section .el-col:nth-of-type(2) ul {
  list-style-type: none;
  margin-bottom: 2rem;
}

.project-detail-2
  .project-detail-2-top-section
  .el-col:nth-of-type(2)
  p:first-of-type {
  font-family: "Abel";
  font-style: normal;
  font-weight: 400;
  font-size: 0.9375rem;
  line-height: 135%;
  letter-spacing: 0.2em;
  color: #111111;
  margin-top: 2rem;
  margin-bottom: 0.5rem;
}

.project-detail-2
  .project-detail-2-top-section
  .el-col:nth-of-type(2)
  p:nth-of-type(2) {
  font-family: "Abel";
  font-style: normal;
  font-weight: 400;
  font-size: 1.0625rem;
  line-height: 120%;
  letter-spacing: 0.018em;
  color: #6f6f6f;
  /* margin: 0; */
}

.project-detail-2
  .project-detail-2-top-section
  .el-col:nth-of-type(2)
  p:nth-of-type(3) {
  font-family: "Abel";
  font-style: normal;
  font-weight: 400;
  font-size: 0.9375rem;
  line-height: 135%;
  letter-spacing: 0.2em;
  color: #111111;
}

.project-detail-2 .project-detail-2-top-section .el-col:nth-of-type(2) li {
  font-family: "Abel";
  font-style: normal;
  font-weight: 400;
  font-size: 1.0625rem;
  line-height: 120%;
  letter-spacing: 0.018em;
  color: #6f6f6f;
  margin-bottom: 0.5rem;
}

.project-detail-2
  .project-detail-2-top-section
  .el-col:nth-of-type(3)
  p:first-of-type {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 140%;
  letter-spacing: -0.005em;
  color: #111111;
}

.project-detail-2
  .project-detail-2-top-section
  .el-col:nth-of-type(3)
  p:nth-of-type(2) {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 160%;
  letter-spacing: -0.005em;
  color: #676565;
}

.project-detail-2 .project-detail-2-img {
  position: relative;
}

.project-detail-2 .project-detail-2-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.project-detail-2 .project-detail-2-img p {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 3.375rem;
  line-height: 140%;
  text-align: center;
  letter-spacing: -0.005em;
  color: #fffdfd;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

/* @media screen and (max-width: 991px) {
  .project-detail-2 .project-detail-2-top-section p.p2,
  .project-detail-2 .project-detail-2-top-section p.p1 {
    display: none;
  }

  .project-detail-2 .project-detail-2-top-section .el-col-offset-8 {
    margin-left: 0;
  }
} */

@media screen and (max-width: 991px) {
  .project-detail-2 .project-detail-2-top-section p.p2,
  .project-detail-2 .project-detail-2-top-section p.p1 {
    display: none;
  }

  .project-detail-2 .project-detail-2-top-section .el-col:nth-of-type(4) {
    margin-top: 3rem;
  }

  .project-detail-2 .project-detail-2-top-section .el-col-offset-8 {
    margin-left: 0;
  }
  .project-detail-2 .project-detail-2-top-section p {
    font-size: 2rem;
  }

  .project-detail-2 .project-detail-2-top-section h4 {
    font-size: 5.5rem;
  }

  .project-detail-2
    .project-detail-2-top-section
    .el-col:nth-of-type(3)
    p:first-of-type {
    font-size: 3rem;
  }

  .project-detail-2
    .project-detail-2-top-section
    .el-col:nth-of-type(3)
    p:nth-of-type(2) {
    font-size: 2rem;
  }

  .project-detail-2
    .project-detail-2-top-section
    .el-col:nth-of-type(4)
    p:first-of-type {
    font-size: 1.9rem;
  }

  .project-detail-2
    .project-detail-2-top-section
    .el-col:nth-of-type(4)
    p:nth-of-type(2) {
    font-size: 1.3rem;
  }

  .project-detail-2 .project-detail-2-top-section .blog-text {
    text-align: center;
  }
}
@media screen and (max-width: 780px) {
  .project-detail-2
    .project-detail-2-top-section
    .el-col:nth-of-type(4)
    p:first-of-type {
    font-size: 4rem;
  }

  .project-detail-2
    .project-detail-2-top-section
    .el-col:nth-of-type(4)
    p:nth-of-type(2) {
    font-size: 2.5rem;
  }

  .project-detail-2 .project-detail-2-top-section h4 {
    font-size: 7rem;
    line-height: 8rem;
  }
}
</style>