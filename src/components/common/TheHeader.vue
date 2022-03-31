<template>
  <header>
    <div class="header-content">
      <el-row class="row-head">
        <el-col :span="12">
          <img class="logo" src="../../assets/brand-logo-1.png" alt="" />
        </el-col>
        <el-col class="last-col-head" :span="12">
          <span class="menu-text hidden-sm-and-down">Let's Talk</span>
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

<style scoped>
header {
  position: relative;
}

.header-content {
  padding: 48px 64px;
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
  width: 216px;
  cursor: pointer;
}

span.menu-text {
  font-family: "Abel";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.15em;
  color: #111;
  position: relative;
  text-transform: uppercase;
  cursor: pointer;
}

span.menu-text::after {
  content: "";
  position: absolute;
  width: 110px;
  height: 1px;
  left: 0;
  top: 25px;
  background: #111;
}

.nav div {
  height: 2px;
  background: #fff;
  margin: 5px 0;
  border-radius: 24px;
  position: absolute;
  transition: 0.2s ease-out;
}

.nav {
  display: block;
  margin-left: 2rem;
  width: 45px;
  background: #111;
  height: 45px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
  cursor: pointer;
}

.one {
  width: 50%;
  right: 12px;
  transform: translateY(-8px);
}

.two {
  width: 30%;
  right: 12px;
}
.three {
  width: 50%;
  right: 12px;
  transform: translateY(8px);
}

.nav:hover div.two {
  width: 50%;
}

@media screen and (max-width: 900px) {
  .logo {
    width: 100%;
  }

  .header-content {
    padding: 2rem 2rem;
  }
}
</style>