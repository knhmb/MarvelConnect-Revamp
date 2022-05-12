<template>
  <header>
    <div class="header-content">
      <el-row class="row-head">
        <el-col :span="12">
          <img @click="navigate('home')" class="logo" :src="logo" alt="" />
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
              <li><a @click="navigate('projects')" href="#">Projects</a></li>
              <li><a @click="navigate('services')" href="#">Services</a></li>
              <li><a @click="navigate('about-us')" href="#">About</a></li>
              <li><a @click="navigate('contact')" href="#">Contact</a></li>
            </ul>
            <a href="mailto:info@marvelconnect.com" class="email"
              >info@marvelconnect.com</a
            >
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
  </header>
</template>

<script>
import { gsap } from "gsap";
// import SidebarNav from "./SidebarNav.vue";
export default {
  components: {
    // SidebarNav,
  },
  data() {
    return {
      openNav: false,
      logo: require("../../assets/brand-logo-1.png"),
    };
  },
  methods: {
    toggleNav() {
      const el = document.querySelector(".sidebar-menu");
      const body = document.querySelector("body");
      if (this.openNav === false) {
        this.openNav = true;
        el.style.opacity = 0;
        el.style.zIndex = -1;
        this.logo = require("../../assets/brand-logo.png");
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
      this.logo = require("../../assets/brand-logo-1.png");
      body.style.overflowY = "visible";
    },
    navigate(path) {
      this.$router.push(`/${path}`);
      this.resetValues();
    },
  },
  mounted() {
    gsap.fromTo(
      ".header-content",
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 2,
      }
    );
  },
};
</script>

<style scoped>
header {
  position: relative;
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
  padding: 3rem 4rem;
}

.el-row.row-head {
  align-items: center;
}

.el-col.last-col-head:last-of-type {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  z-index: 2;
}

.logo {
  /* color: white; */
  width: 13.5rem;
  cursor: pointer;
  position: relative;
  z-index: 4;
}

span.menu-text {
  font-family: "Abel";
  font-style: normal;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.125rem;
  letter-spacing: 0.15em;
  color: #111;
  position: relative;
  text-transform: uppercase;
  cursor: pointer;
  z-index: 2;
  transition: 0.5s ease-out;
}
.open.menu-text {
  color: #fff;
}

span.menu-text::after {
  content: "";
  position: absolute;
  width: 6.875rem;
  height: 0.0625rem;
  left: 0;
  top: 1.5625rem;
  background: #111;
}
.open.menu-text::after {
  background: #fff;
}

.nav div {
  height: 0.125rem;
  background: #fff;
  margin: 0.3125rem 0;
  border-radius: 1.5rem;
  position: absolute;
  transition: 0.5s ease-out;
}

.nav {
  display: block;
  margin-left: 2rem;
  width: 2.8125rem;
  background: #111;
  height: 2.8125rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
  cursor: pointer;
  z-index: 2;
  transition: 0.5s ease-out;
}

.one {
  width: 50%;
  right: 0.75rem;
  transform: translateY(-0.5rem);
}

.two {
  width: 30%;
  right: 0.75rem;
}
.three {
  width: 50%;
  right: 0.75rem;
  transform: translateY(0.5rem);
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
  text-decoration: none;
}

.wrapper .email::after {
  content: "";
  background: #3c91d6;
  width: 90%;
  height: 0.1rem;
  left: 0;
  display: block;
  transition: width 0.5s ease-out;
}

.wrapper .email:hover::after {
  width: 100%;
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
  transition: width 0.5s ease-out;
}

.wrapper .phone:hover::after {
  width: 100%;
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
/* .wrapper ul li a:after {
  position: absolute;
  content: "";
  background: #fff;
  width: 100%;
  height: 50px;
  left: 0;
  border-radius: 50px;
  transform: scaleY(0);
  z-index: -1;
  transition: transform 0.3s ease;
} */
/* .wrapper ul li a:hover:after {
  transform: scaleY(1);
} */
.wrapper ul li a:hover {
  color: #4158d0;
  padding-left: 0.5rem;
}

@media screen and (max-width: 900px) {
  .logo {
    width: 100%;
  }

  .wrapper {
    clip-path: circle(1.15rem at calc(100% - 6.5rem) 8rem);
  }
}

@media screen and (max-width: 900px) {
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
    transform: translateY(-1rem);
  }

  .two {
    width: 30%;
    right: 1rem;
    transform: translateY(-0.3rem);
  }

  .three {
    width: 50%;
    right: 1rem;
    transform: translateY(0.5rem);
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
</style>