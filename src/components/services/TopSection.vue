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

<script>
import { gsap } from "gsap";

export default {
  mounted() {
    gsap.fromTo(
      ".services-top-section",
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
.service .services-top-section {
  min-height: 100vh;
}

.services .services-top-section .el-row .el-col:first-of-type p {
  font-family: "Abel";
  font-style: normal;
  font-weight: 400;
  font-size: 1.125rem;
  line-height: 135%;
  letter-spacing: 0.58em;
  color: #00559a;
  margin-bottom: 3rem;
}

.services .services-top-section .el-row .el-col h4 {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 4.375rem;
  line-height: 5.625rem;
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
  font-size: 1.0625rem;
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

@media screen and (max-width: 991px) {
  .services .services-top-section .el-row .el-col:first-of-type p {
    font-size: 2rem;
  }

  .services .services-top-section .el-row .el-col h4 {
    font-size: 5.5rem;
  }

  .services .services-top-section .el-row .el-col.hidden-md-and-up p,
  .services .services-top-section .el-row .el-col.hidden-sm-and-down p {
    font-size: 2rem;
  }
}
@media screen and (max-width: 780px) {
  .services .services-top-section .el-row .el-col:first-of-type p {
    font-size: 3rem;
  }

  .services .services-top-section .el-row .el-col h4 {
    font-size: 7rem;
    line-height: 8rem;
  }

  .services .services-top-section .el-row .el-col.hidden-md-and-up p,
  .services .services-top-section .el-row .el-col.hidden-sm-and-down p {
    font-size: 3rem;
  }
}
@media screen and (max-width: 600px) {
  .services .services-top-section .el-row .el-col:first-of-type p {
    font-size: 5rem;
  }

  .services .services-top-section .el-row .el-col h4 {
    font-size: 13rem;
    line-height: 12rem;
  }

  .services .services-top-section .el-row .el-col.hidden-md-and-up p,
  .services .services-top-section .el-row .el-col.hidden-sm-and-down p {
    font-size: 3rem;
  }
}
</style>