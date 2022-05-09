<template>
  <div class="section-4">
    <el-row :gutter="20">
      <el-col class="p-10">
        <h4>WHAT WE DO</h4>
      </el-col>
      <el-col :sm="24" :md="12">
        <img src="../../assets/home-service01.jpg" alt="" />
      </el-col>
      <el-col :sm="24" :md="10">
        <p class="title">Website Development</p>
        <p>
          We believed a well-designed website is essential for building a
          successful business image.
        </p>
        <base-button>VIEW OUR SERVICES</base-button>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col class="p-10">
        <h4>WHAT WE DO</h4>
      </el-col>
      <el-col :sm="24" :md="12">
        <img src="../../assets/home-service02.jpg" alt="" />
      </el-col>
      <el-col :sm="24" :md="10">
        <p class="title">Mobile apps</p>
        <p>
          For many years, we have adopted cutting-edge technologies in
          application development, from the traditional CGI, C, and Java to the
          popular PHP, Python, and JS.
        </p>
        <base-button>VIEW OUR SERVICES</base-button>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col class="p-10">
        <h4>WHAT WE DO</h4>
      </el-col>
      <el-col :sm="24" :md="12">
        <img src="../../assets/home-service03.jpg" alt="" />
      </el-col>
      <el-col :sm="24" :md="10">
        <p class="title">Digitization</p>
        <p>
          Through digitization, a business can achieve increased brand value,
          expand the client base, and best utilization of human resources.
        </p>
        <base-button>VIEW OUR SERVICES</base-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
  methods: {},
};
</script>


<style scoped>
.section-4 {
  padding: 9rem 0;
}

.section-4 .el-row:not(:last-of-type) {
  margin-bottom: 15rem;
}

.section-4 .p-10 {
  margin-left: 18rem;
}

.section-4 h4 {
  font-family: "Abel";
  font-style: normal;
  font-weight: 400;
  font-size: 1.125rem;
  line-height: 135%;
  letter-spacing: 0.58em;
  color: #111111;
  margin-bottom: 2rem;
}

.section-4 img {
  width: 100%;
  height: 100%;

  object-fit: cover;
}

.section-4 p.title {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 4rem;
  line-height: 140%;
  letter-spacing: -0.0005em;
  color: #000000;
  margin: 0;
}

.section-4 p {
  font-family: "Abel";
  font-style: normal;
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 2.25rem;
  letter-spacing: 0.018em;
  color: rgba(0, 0, 0, 0.5);
  margin-top: 0.5rem;
  margin-bottom: 5rem;
}

@media screen and (max-width: 991px) {
  .section-4 .el-row .el-col:last-of-type {
    padding: 0 10rem;
  }

  .section-4 .el-col-offset-5 {
    margin: 0;
    text-align: center;
  }
}
</style>