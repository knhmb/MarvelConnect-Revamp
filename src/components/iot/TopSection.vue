<template>
  <section class="iot-top-section sidebar-menu">
    <img class="circular" src="../../assets/Subtract.png" alt="" />
    <img class="dotted" src="../../assets/Group-79.png" alt="" />
    <p class="p1">SERVICES</p>
    <!-- <p class="p2">SCROLL</p> -->
    <base-container>
      <el-row justify="space-between">
        <el-col>
          <p>Service</p>
        </el-col>
        <el-col :sm="24" :md="10">
          <h4>Internet of Things(IoT)</h4>
        </el-col>
        <el-col :sm="24" :md="13">
          <img
            src="../../assets/internet-things-communication-technology-1-1.png"
            alt=""
          />
          <div class="blog-text">
            <p>IoT is a technology that makes traditional objects smart.</p>
            <p>
              It achieves interconnection of anything with awareness, to improve
              the user experience the management effectiveness. Marvelconnect is
              a leading provider of IoT systems with over 5 years of experience
              in the field.
            </p>
          </div>
        </el-col>
      </el-row>
    </base-container>
  </section>
</template>


<script>
import { gsap } from "gsap";

export default {
  mounted() {
    gsap.fromTo(
      ".iot-top-section",
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
.iot .iot-top-section {
  padding: 3rem 0;
  position: relative;
  /* overflow: hidden; */
}

.iot .iot-top-section img.circular {
  position: absolute;
  width: 50%;
  top: -13rem;
  right: 12.5rem;
}
.iot .iot-top-section img.dotted {
  position: absolute;
  width: 10%;
  top: -5rem;
  right: 20rem;
}

.iot .iot-top-section p.p1 {
  font-family: "Abel";
  font-style: normal;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 0.9375rem;
  letter-spacing: 0.6em;
  color: #111111;
  position: absolute;
  transform: rotate(90deg);
  right: 5.5rem;
  top: 26%;
}
.iot .iot-top-section p.p2 {
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

.iot .iot-top-section p.p2::before {
  content: "";
  background: #111;
  width: 30%;
  height: 0.125rem;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: -2.5rem;
}

.iot .iot-top-section p {
  font-family: "Abel";
  font-style: normal;
  font-weight: 400;
  font-size: 1.125rem;
  line-height: 135%;
  letter-spacing: 0.58em;
  color: #00559a;
  margin-bottom: 2rem;
}

.iot .iot-top-section h4 {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 4.375rem;
  line-height: 5.625rem;
  letter-spacing: -0.005em;
  color: #111111;
  margin-left: 1rem;
  word-break: break-word;
}

.iot .iot-top-section img {
  width: 100%;
  margin-top: 3rem;
}

.iot .iot-top-section .el-col:nth-of-type(3) .blog-text {
  margin: 3rem 0;
}

.iot .iot-top-section .el-col:nth-of-type(3) p:first-of-type {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 140%;
  letter-spacing: -0.005em;
  color: #111111;
}

.iot .iot-top-section .el-col:nth-of-type(3) p:nth-of-type(2) {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 160%;
  letter-spacing: -0.005em;
  color: #676565;
}
/* 
@media screen and (max-width: 991px) {
  .iot .iot-top-section p.p2,
  .iot .iot-top-section p.p1 {
    display: none;
  }
} */

@media screen and (max-width: 991px) {
  .iot .iot-top-section p.p2,
  .iot .iot-top-section p.p1 {
    display: none;
  }

  .iot .iot-top-section p.p2,
  .iot .iot-top-section p.p1 {
    display: none;
  }

  .iot .iot-top-section p.p2,
  .iot .iot-top-section p.p1 {
    display: none;
  }

  .iot .iot-top-section h4 {
    word-break: break-word;
  }

  .media .media-top-section p.p2,
  .media .media-top-section p.p1 {
    display: none;
  }
  .iot .iot-top-section p {
    font-size: 2rem;
  }

  .iot .iot-top-section h4 {
    font-size: 5.5rem;
  }

  .iot .iot-top-section .el-col:nth-of-type(3) p:first-of-type {
    font-size: 3rem;
  }

  .iot .iot-top-section .el-col:nth-of-type(3) p:nth-of-type(2) {
    font-size: 2rem;
  }
}

@media screen and (max-width: 780px) {
  .iot .iot-top-section p {
    font-size: 3rem;
  }

  .iot .iot-top-section h4 {
    font-size: 7rem;
    /* line-height: 8rem; */
  }
}
@media screen and (max-width: 600px) {
  .iot .iot-top-section p {
    font-size: 5rem;
  }

  .iot .iot-top-section h4 {
    font-size: 13rem;
    line-height: 12rem;
  }
}
</style>