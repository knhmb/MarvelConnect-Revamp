<template>
  <div class="top-section sidebar-menu">
    <base-container>
      <el-row class="content">
        <el-col>
          <p class="case-study">CASE STUDIES</p>
        </el-col>
        <el-col :sm="24" :md="12">
          <h4>Some of our finest work.</h4>
        </el-col>
        <el-col :sm="24" :md="12">
          <p>Solving diverse business needs through great design and UX.</p>
        </el-col>
      </el-row>
    </base-container>
  </div>
</template>

<script>
import { gsap } from "gsap";

export default {
  mounted() {
    gsap.fromTo(
      ".top-section",
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
.projects .top-section {
  padding: 3rem 0;
  min-height: 100vh;
  position: relative;
}
.projects .top-section p.case-study {
  font-family: "Abel";
  font-style: normal;
  font-weight: 400;
  font-size: 1.125rem;
  line-height: 135%;
  letter-spacing: 0.58em;
  color: #00559a;
  margin-bottom: 2rem;
}

.projects .top-section h4 {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 4.375rem;
  line-height: 5.625rem;
  letter-spacing: -0.005em;
  color: #111111;
  width: 100%;
  margin-left: 1rem;
}

.projects .top-section .el-row .el-col:nth-child(3) {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
}

.projects .top-section .el-row .el-col:nth-child(3) p {
  font-family: "Abel";
  font-style: normal;
  font-weight: 400;
  font-size: 1.0625rem;
  line-height: 190%;
  letter-spacing: 0.02em;
  color: #6f6f6f;
  width: 50%;
}

@media screen and (max-width: 991px) {
  .projects .top-section p.case-study {
    font-size: 2rem;
  }

  .projects .top-section h4 {
    font-size: 5.5rem;
  }

  .projects .top-section .el-row .el-col:nth-child(3) p {
    font-size: 2rem;
  }
}
@media screen and (max-width: 780px) {
  .projects .top-section p.case-study {
    font-size: 3rem;
  }

  .projects .top-section h4 {
    font-size: 7rem;
    line-height: 8rem;
  }

  .projects .top-section .el-row .el-col:nth-child(3) p {
    font-size: 3rem;
  }
}
@media screen and (max-width: 600px) {
  .projects .top-section p.case-study {
    font-size: 5rem;
  }

  .projects .top-section h4 {
    font-size: 13rem;
    line-height: 12rem;
  }

  .projects .top-section .el-row .el-col:nth-child(3) p {
    font-size: 3rem;
  }
}
</style>