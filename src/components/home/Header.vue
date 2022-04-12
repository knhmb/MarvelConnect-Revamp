<template>
  <!-- <transition appear @before-enter="beforeEnter" @enter="enter"> -->
  <header>
    <div class="header-content">
      <el-row class="row-head">
        <el-col :span="12">
          <img
            @click="navigate('home')"
            class="logo"
            src="../../assets/brand-logo.png"
            alt=""
          />
        </el-col>
        <el-col class="last-col-head" :span="12">
          <span :class="{ open: openNav }" class="menu-text">Let's Talk</span>
          <div @click="toggleNav" :class="{ open: openNav }" class="nav">
            <div class="one"></div>
            <div class="two"></div>
            <div class="three"></div>
          </div>
          <div :class="{ open: openNav }" class="wrapper">
            <ul>
              <li><a href="#">Work</a></li>
              <li><a @click="navigate('services')" href="#">Services</a></li>
              <li><a @click="navigate('about-us')" href="#">About</a></li>
              <li><a href="#">Insights</a></li>
              <li><a @click="navigate('contact')" href="#">Contact</a></li>
            </ul>
            <p class="email">info@marvelconnect.com</p>
            <p class="phone">+852-31167505</p>
            <p class="location">
              Unit 1701, 17/F, Enterprise Square Three,39 Wang Chiu Road,
              Kowloon Bay, Kowloon, Hong Kong
            </p>
            <div class="social-media-icons">
              <img src="../../assets/icon-ig.png" alt="" />
              <img src="../../assets/icon-facebook.png" alt="" />
              <img src="../../assets/icon-twitter.png" alt="" />
              <img src="../../assets/icon-linkedin.png" alt="" />
            </div>
          </div>
        </el-col>
      </el-row>
    </div>

    <div class="body-content sidebar-menu">
      <el-row>
        <el-col>
          <p class="marvel">WE ARE MARVELCONNECT</p>
          <div class="inner-body-content">
            <h2>A digital agency focus on innovation.</h2>
            <p>
              MANKIND IS GREAT BECAUSE OF DREAMS <br />
              APPS/website/AI/Machine Learning/Big Data/Iot
            </p>
            <div class="btn-content">
              <div class="btn"></div>
              <span>GET TO KNOW US</span>
              <el-icon><plus /></el-icon>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </header>
  <!-- </transition> -->
</template>

<script>
import { Plus } from "@element-plus/icons-vue";
import gsap from "gsap";

export default {
  components: {
    plus: Plus,
  },
  data() {
    return {
      openNav: false,
    };
  },
  methods: {
    beforeEnter(el) {
      el.style.transform = "translateY(-100px)";
      //   el.style.opacity = 0;
    },
    enter(el, done) {
      gsap.to(el, {
        duration: 1,
        y: 0,
        // opacity: 1,
        // ease: "bounce.out",
        onComplete: done,
      });
    },
    toggleNav() {
      const el = document.querySelector(".sidebar-menu");
      const body = document.querySelector("body");
      if (this.openNav === false) {
        this.openNav = true;
        el.style.opacity = 0;
        el.style.zIndex = -1;
        body.style.overflowY = "hidden";
      } else {
        this.resetValues();
      }
      // this.openNav === false ? (this.openNav = true) : (this.openNav = false);
    },
    resetValues() {
      const el = document.querySelector(".sidebar-menu");
      const body = document.querySelector("body");
      this.openNav = false;
      el.style.opacity = 1;
      el.style.zIndex = 1;
      body.style.overflowY = "visible";
    },
    navigate(path) {
      this.$router.push(`/${path}`);
      this.resetValues();
    },
  },
  mounted() {
    gsap.fromTo(
      "header",
      {
        background: "white",
        x: -900,
        opacity: 0,
      },
      {
        background: "black",
        duration: 2,
        opacity: 1,
        // delay: 1,
        x: 0,
        ease: "circ.out",
      }
    );

    gsap.fromTo(
      ".header-content",
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        delay: 2,
        opacity: 1,
        duration: 2,
      }
    );

    gsap.fromTo(
      ".body-content",
      {
        x: -200,
        opacity: 0,
        // duration: 3,
      },
      {
        x: 0,
        opacity: 1,
        duration: 2,
        delay: 4,
      }
    );
  },
};
</script>

<style scoped>
header {
  position: relative;
  background-image: url("../../assets/Group-72.png");
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
}

.header-content .open.nav {
  background: #fff;
}

.header-content .open.nav div {
  background: #111;
}
.header-content .open .one {
  transform: rotate(45deg);
}
.header-content .open .two {
  opacity: 0;
}
.header-content .open .three {
  transform: rotate(-45deg);
}

.header-content {
  /* padding: 48px 64px; */
  padding: 3rem 4rem;
}

.el-row.row-head {
  align-items: center;
}

.el-col.last-col-head:last-of-type {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.logo {
  color: white;
  width: 13.5rem;
  /* width: 216px; */
  cursor: pointer;
  position: relative;
  z-index: 2;
}

span.menu-text {
  font-family: "Abel";
  font-style: normal;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.125rem;
  letter-spacing: 0.15em;
  color: #fff;
  position: relative;
  text-transform: uppercase;
  cursor: pointer;
  z-index: 2;
}

span.menu-text::after {
  content: "";
  position: absolute;
  /* width: 110px; */
  width: 110%;
  /* width: 6.875rem; */
  height: 0.063rem;
  /* height: 1px; */
  left: 0;
  top: 1.563rem;
  /* top: 25px; */
  background: #fff;
}

.nav div {
  height: 0.125rem;
  /* height: 2px; */
  background: black;
  margin: 0.313rem 0;
  /* margin: 5px 0; */
  border-radius: 1.5rem;
  position: absolute;
  transition: 0.2s ease-out;
}

.nav {
  display: block;
  margin-left: 2rem;
  width: 2.813rem;
  /* width: 45px; */
  background: #fff;
  height: 2.813rem;
  /* height: 45px; */
  border-radius: 50%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  /* align-items: center; */
  position: relative;
  cursor: pointer;
  z-index: 2;
}

.one {
  width: 50%;
  right: 0.75rem;
  /* right: 12px; */
  transform: translateY(-0.5rem);
  /* transform: translateY(-8px); */
}

.two {
  width: 30%;
  right: 0.75rem;
  /* right: 12px; */
}
.three {
  width: 50%;
  right: 0.75rem;
  /* right: 12px; */
  transform: translateY(0.5rem);
  /* transform: translateY(8px); */
}

.nav:hover div.two {
  width: 50%;
}

.wrapper {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background: #111;
  clip-path: circle(1.15rem at calc(100% - 5.2rem) 5rem);
  transition: all 0.5s ease-in-out;
  z-index: 1;
}
.open.wrapper {
  clip-path: circle(75%);
}

.wrapper .email {
  font-family: "Abel";
  font-style: normal;
  font-weight: 400;
  font-size: 1.0625rem;
  line-height: 140%;
  letter-spacing: 0.02em;
  color: #3c91d6;
  position: absolute;
  right: 20%;
  bottom: 40%;
  cursor: pointer;
}

.wrapper .email::after {
  content: "";
  background: #3c91d6;
  width: 90%;
  height: 0.1rem;
  left: 0;
  display: block;
}

.wrapper .phone {
  font-family: "Abel";
  font-style: normal;
  font-weight: 400;
  font-size: 1.0625rem;
  line-height: 140%;
  letter-spacing: 0.02em;
  color: #3c91d6;
  position: absolute;
  bottom: 33%;
  right: 24.6%;
  cursor: pointer;
}

.wrapper .phone::after {
  content: "";
  background: #3c91d6;
  width: 110%;
  height: 0.1rem;
  left: 0;
  display: block;
}

.wrapper .location {
  font-family: "Abel";
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 150%;
  letter-spacing: 0.055em;
  color: #545453;
  width: 20%;
  position: absolute;
  right: 13.1%;
  bottom: 18%;
}

.wrapper .social-media-icons {
  position: absolute;
  bottom: 8%;
  right: 21.2%;
}

.wrapper .social-media-icons img {
  margin-right: 1rem;
  cursor: pointer;
  transition: 0.5s;
  width: 1.5rem;
}

.wrapper .social-media-icons img:hover {
  transform: translateY(-0.5rem);
}

.wrapper ul {
  position: absolute;
  top: 60%;
  left: 33%;
  transform: translate(-50%, -50%);
  list-style: none;
  /* text-align: center; */
}
.wrapper ul li {
  /* margin: 15px 0; */
}
.wrapper ul li a {
  text-decoration: none;
  position: relative;
  transition: all 0.3s ease;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 4.75rem;
  line-height: 126%;
  letter-spacing: -0.02em;
  color: #ffffff;
}
.wrapper ul li a:hover {
  color: #4158d0;
  padding-left: 0.5rem;
}

.body-content {
  padding: 3rem 15rem;
  position: relative;
}

.body-content p {
  font-family: "Abel";
  font-style: normal;
  font-weight: 400;
  font-size: 1.125rem;
  line-height: 135%;
  letter-spacing: 0.58em;
  color: #3c91d6;
  white-space: normal;
}

.inner-body-content {
  padding: 0 1rem;
  margin-top: 1rem;
}

.inner-body-content h2 {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 4.5rem;
  line-height: 5.5rem;
  /* line-height: 88px; */
  letter-spacing: -0.02em;
  color: #ffffff;
  word-break: break-word;
}

.inner-body-content p {
  font-family: "Abel";
  font-style: normal;
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 4.375rem;
  /* line-height: 70px; */
  letter-spacing: 0.018em;
  color: #ffffff;
}

.inner-body-content .btn-content {
  display: flex;
  align-items: center;
  cursor: pointer;
  width: fit-content;
}
.inner-body-content .btn-content .btn {
  width: 2.813rem;
  height: 2.813rem;
  /* width: 45px;
  height: 45px; */
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.15);
  display: inline-block;
}

.inner-body-content .btn-content span {
  margin-left: -2.063rem;
  /* margin-left: -33px; */
  font-family: "Abel";
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  /* font-size: 12px; */
  line-height: 1rem;
  /* line-height: 16px; */
  letter-spacing: 0.24em;
  color: #ffffff;
}

.inner-body-content .btn-content .el-icon {
  color: #fff;
  margin-left: 1rem;
  font-size: 0.7rem;

  /* font-size: 10px; */
}

@media screen and (max-width: 900px) {
  .logo {
    width: 100%;
  }

  .wrapper {
    clip-path: circle(1.15rem at calc(100% - 6.5rem) 8rem);
  }
}

@media screen and (max-width: 800px) {
  span.menu-text {
    font-size: 3rem;
    line-height: 1.125rem;
  }

  span.menu-text::after {
    top: 3rem;
    width: 105%;
  }

  .nav {
    display: block;
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    cursor: pointer;
  }

  .nav div {
    height: 0.225rem;
    margin: 0.313rem 0;
    border-radius: 1.5rem;
    position: absolute;
    transition: 0.2s ease-out;
  }

  .one {
    width: 50%;
    right: 1rem;
    /* right: 12px; */
    transform: translateY(-1rem);
    /* transform: translateY(-8px); */
  }

  .two {
    width: 30%;
    right: 1rem;
    transform: translateY(-0.3rem);
    /* right: 12px; */
  }

  .three {
    width: 50%;
    right: 1rem;
    /* right: 12px; */
    transform: translateY(0.5rem);
    /* transform: translateY(8px); */
  }

  .body-content p {
    font-size: 3rem;
  }

  .inner-body-content h2 {
    font-size: 11rem;
    line-height: 13rem;
  }

  .inner-body-content p {
    font-size: 3rem;
    line-height: 6rem;
  }

  .inner-body-content .btn-content .btn {
    width: 5rem;
    height: 5rem;
  }

  .inner-body-content .btn-content span {
    font-size: 2rem;
    /* font-size: 12px; */
  }

  .inner-body-content .btn-content .el-icon {
    color: #fff;
    margin-left: 1rem;
    font-size: 1.5rem;

    /* font-size: 10px; */
  }
}

@media screen and (max-width: 750px) {
  .wrapper .social-media-icons {
    bottom: 19%;
  }

  .wrapper .location {
    bottom: 28%;
  }
}

.wrapper .phone {
  bottom: 38%;
}

.wrapper .email {
  bottom: 43%;
}
@media screen and (max-width: 550px) {
  .wrapper ul {
    top: 50%;
  }

  .wrapper ul li a {
    /* top: 50%; */
    font-size: 6rem;
  }
  .wrapper .social-media-icons {
    bottom: 30%;
  }

  .wrapper .location {
    bottom: 35%;
  }
  .wrapper .phone {
    bottom: 43%;
  }

  .wrapper .email {
    bottom: 48%;
  }
}
@media screen and (max-width: 450px) {
  .wrapper ul {
    top: 50%;
  }

  .wrapper ul li a {
    /* top: 50%; */
    font-size: 7rem;
  }
  .wrapper .social-media-icons {
    bottom: 30%;
  }

  .wrapper .location {
    bottom: 35%;
  }
  .wrapper .phone {
    bottom: 43%;
  }

  .wrapper .email {
    bottom: 48%;
  }
}
@media screen and (max-width: 375px) {
  .wrapper .social-media-icons {
    bottom: 33%;
  }

  .wrapper .location {
    bottom: 38%;
  }
  .wrapper .phone {
    bottom: 45%;
  }

  .wrapper .email {
    bottom: 48%;
  }
}

@media screen and (min-width: 1024px) {
  header {
    min-height: 100vh;
  }
}
</style>