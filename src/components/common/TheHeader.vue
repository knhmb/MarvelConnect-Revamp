<template>
  <header>
    <div class="header-content">
      <el-row class="row-head">
        <el-col :span="12">
          <img
            @click="$router.push('/')"
            class="logo"
            src="../../assets/brand-logo-1.png"
            alt=""
          />
        </el-col>
        <el-col class="last-col-head" :span="12">
          <span class="menu-text">Let's Talk</span>
          <div class="nav">
            <div class="one"></div>
            <div class="two"></div>
            <div class="three"></div>
          </div>
        </el-col>
      </el-row>
    </div>
  </header>
</template>

<script>
import { gsap } from "gsap";
export default {
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
}

.logo {
  /* color: white; */
  width: 13.5rem;
  cursor: pointer;
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

.nav div {
  height: 0.125rem;
  background: #fff;
  margin: 0.3125rem 0;
  border-radius: 1.5rem;
  position: absolute;
  transition: 0.2s ease-out;
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

@media screen and (max-width: 900px) {
  .logo {
    width: 100%;
  }

  /* .header-content {
    padding: 2rem 2rem;
  }

  .body-content {
    padding: 3rem 1rem;
  } */
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
    transform: translateY(-0.8rem);
  }

  .two {
    width: 30%;
    right: 1rem;
    transform: translateY(-0rem);
  }

  .three {
    width: 50%;
    right: 1rem;
    transform: translateY(0.8rem);
  }
}
</style>