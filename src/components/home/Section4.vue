<template>
  <div class="section-4">
    <base-container>
      <el-row class="first">
        <el-col>
          <p class="title">WHAT WE DO</p>
        </el-col>
        <el-col class="right">
          <p class="watermark">Websites</p>
          <img class="me" src="../../assets/unsplash_kylWNDQFd5A.png" alt="" />
          <!-- <p class="description">
            We believed a well-designed website is essential for building a
            successful business image.
          </p>
          <base-button class="btn">VIEW OUR SERVICES</base-button> -->
        </el-col>
        <el-col class="hidden-sm-and-down" :span="12" :offset="12">
          <p class="description">
            We believed a well-designed website is essential for building a
            successful business image.
          </p>
          <base-button class="btn">VIEW OUR SERVICES</base-button>
        </el-col>
        <el-col class="hidden-lg-and-up" :span="24">
          <p class="description">
            We believed a well-designed website is essential for building a
            successful business image.
          </p>
          <base-button class="btn">VIEW OUR SERVICES</base-button>
        </el-col>
      </el-row>
      <el-row class="second">
        <el-col>
          <p class="title">WHAT WE DO</p>
        </el-col>
        <el-col class="right">
          <p class="watermark">Mobile App</p>
          <img class="me" src="../../assets/unsplash_SYTO3xs06fU.png" alt="" />
        </el-col>
        <el-col class="hidden-sm-and-down" :span="12" :offset="12">
          <p class="description">
            For many years, we have adopted cutting-edge technologies in
            application development, from the traditional CGI, C, and Java to
            the popular PHP, Python, and JS.
          </p>
          <base-button class="btn">VIEW OUR SERVICES</base-button>
        </el-col>
        <el-col class="hidden-lg-and-up" :span="24">
          <p class="description">
            For many years, we have adopted cutting-edge technologies in
            application development, from the traditional CGI, C, and Java to
            the popular PHP, Python, and JS.
          </p>
          <base-button class="btn">VIEW OUR SERVICES</base-button>
        </el-col>
      </el-row>
      <el-row class="third">
        <el-col>
          <p class="title">WHAT WE DO</p>
        </el-col>
        <el-col class="right">
          <p class="watermark">Digitization</p>
          <img class="me" src="../../assets/img3.png" alt="" />
        </el-col>
        <el-col class="hidden-sm-and-down" :span="12">
          <p class="description">
            Through digitization, a business can achieve increased brand value,
            expand the client base, and best utilization of human resources.
          </p>
          <base-button class="btn">VIEW OUR SERVICES</base-button>
        </el-col>
        <el-col class="hidden-lg-and-up" :span="24">
          <p class="description">
            Through digitization, a business can achieve increased brand value,
            expand the client base, and best utilization of human resources.
          </p>
          <base-button class="btn">VIEW OUR SERVICES</base-button>
        </el-col>
      </el-row>
      <!-- <el-row class="second">
        <el-col>
          <p class="title">WHAT WE DO</p>
        </el-col>
        <el-col class="right">
          <p class="watermark">Mobile App</p>
          <img class="me" src="../../assets/unsplash_SYTO3xs06fU.png" alt="" />
          <p class="description">
            For many years, we have adopted cutting-edge technologies in
            application development, from the traditional CGI, C, and Java to
            the popular PHP, Python, and JS.
          </p>
          <base-button class="btn">VIEW OUR SERVICES</base-button>
        </el-col>
      </el-row>
      <el-row class="third">
        <el-col>
          <p class="title">WHAT WE DO</p>
        </el-col>
        <el-col class="right">
          <p class="watermark">Digitization</p>
          <img class="me" src="../../assets/img3.png" alt="" />
          <p class="description">
            Through digitization, a business can achieve increased brand value,
            expand the client base, and best utilization of human resources.
          </p>
          <base-button class="btn">VIEW OUR SERVICES</base-button>
        </el-col>
      </el-row> -->
    </base-container>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
  methods: {
    // scrollAnimation() {
    //   const tl = gsap.timeline({
    //     scrollTrigger: {
    //       trigger: ".section-4",
    //       start: "top top",
    //       end: "+=3000",
    //       scrub: true,
    //       pin: true,
    //     },
    //   });
    //   tl.from(".me", {
    //     opacity: 0,
    //     duration: 1.5,
    //   });
    //   tl.from(".watermark", { opacity: 0, duration: 1.5 }, "-=1.5");
    //   tl.from(".title", { opacity: 0, x: -100, duration: 1.5 }, "-=1.5");
    //   tl.from(".btn", { opacity: 0, x: 100, duration: 1.5 }, "-=1.5");
    //   tl.from(".description", { opacity: 0, duration: 1.5 }, "-=1.5");
    // },
  },
  //   mounted() {
  //     this.scrollAnimation();
  //   },
};
</script>


<style scoped>
.section-4 {
  padding: 9rem 0;
}

.section-4 .el-col {
  position: relative;
  margin-bottom: 3.5rem;
}

.section-4 .el-col.right {
  display: flex;
  justify-content: center;
}

.section-4 .el-row:not(:last-of-type) {
  /* margin-bottom: 22rem; */
  margin-bottom: 6rem;
}

.section-4 p {
  font-family: "Abel";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 135%;
  letter-spacing: 0.58em;
  color: #111111;
}

.section-4 p.watermark {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  /* font-size: 180px; */
  font-size: 9.688rem;
  line-height: 140%;
  letter-spacing: -0.0005em;
  color: #f6f6f6;
  text-align: center;
  word-break: break-all;
}

.section-4 img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  width: 40%;
}

.section-4 .second img,
.section-4 .third img {
  z-index: auto;
}

.section-4 .third img {
  /* transform: translateX(0); */
  left: 75%;
}

.section-4 p.description {
  font-family: "Abel";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 36px;
  letter-spacing: 0.018em;
  color: rgba(0, 0, 0, 0.5);
  margin-left: 3.5rem;
  margin-bottom: 1rem;
  /* position: absolute;
  right: -5.5rem; */
  /* bottom: 0; */
  /* width: 50%; */
  /* width: 60%;
  padding-left: 3rem; */
  /* margin-left: 3rem; */
}

.section-4 .third p.description {
  left: 0;
}

.section-4 .btn {
  /* position: absolute;
  right: 8.5rem;
  bottom: -9rem; */
  margin-left: 3.5rem;
}

.section-4 .second .btn {
  bottom: -13rem;
  right: 8.5rem;
}
.section-4 .third .btn {
  bottom: -11rem;
  /* right: 8.5rem; */
  left: 0;
}

@media screen and (max-width: 900px) {
  .section-4 p.watermark {
    font-size: 50px;
  }
}
@media screen and (min-width: 1820px) {
  .section-4 .el-row:not(:last-of-type) {
    /* margin-bottom: 22rem; */
    margin-top: 12rem;
  }

  .section-4 p.description {
    margin-left: 5rem;
  }

  .section-4 .btn {
    margin-left: 5rem;
  }
}
</style>