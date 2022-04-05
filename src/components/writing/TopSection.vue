<template>
  <section class="writing-top-section">
    <img class="circular" src="../../assets/Subtract.png" alt="" />
    <img class="dotted" src="../../assets/Group-79.png" alt="" />
    <p class="p1">WHAT WE DO</p>
    <p class="p2">SCROLL</p>
    <!-- <base-container> -->
    <el-row>
      <el-col>
        <p>Service</p>
      </el-col>
      <el-col :sm="24" :md="11">
        <h4>Translation and Press Release Writing</h4>
      </el-col>
      <el-col :sm="24" :md="13">
        <img
          src="../../assets/photo-old-typewriter-wooden-table-sunset-light-retro-look-1.png"
          alt=""
        />
        <div class="blog-text">
          <p>
            A decent press release can be an excellent addition to your
            marketing strategy.
          </p>
          <p>
            Marvelconnect has years of writing and editing experience and
            received support and trust from many clients.
          </p>
        </div>
      </el-col>
    </el-row>
    <!-- </base-container> -->
  </section>
</template>

<style scoped>
.writing .writing-top-section {
  padding: 3rem 0;
  position: relative;
  /* overflow: hidden; */
}

.writing .writing-top-section .el-col:first-of-type,
.writing .writing-top-section .el-col:nth-of-type(2) {
  padding-left: 10rem;
}

.writing .writing-top-section img.circular {
  position: absolute;
  width: 50%;
  top: -13rem;
  right: 12.5rem;
}
.writing .writing-top-section img.dotted {
  position: absolute;
  width: 10%;
  top: -5rem;
  right: 20rem;
}

.writing .writing-top-section p.p1 {
  font-family: "Abel";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0.6em;
  color: #111111;
  position: absolute;
  transform: rotate(90deg);
  right: 0;
  top: 30%;
  z-index: 1;
}
.writing .writing-top-section p.p2 {
  font-family: "Abel";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0.6em;
  color: #111111;
  position: absolute;
  transform: rotate(90deg);
  right: 1.8rem;
  /* left: 4rem; */
  top: 55%;
  z-index: 1;
}

.writing .writing-top-section p.p2::before {
  content: "";
  background: #111;
  width: 30%;
  height: 2px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: -2.5rem;
}

.writing .writing-top-section p {
  font-family: "Abel";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 135%;
  letter-spacing: 0.58em;
  color: #00559a;
  margin-bottom: 2rem;
}

.writing .writing-top-section h4 {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 70px;
  line-height: 90px;
  letter-spacing: -0.005em;
  color: #111111;
  margin-left: 1rem;
  z-index: 1;
  position: relative;
}

.writing .writing-top-section img {
  width: 100%;
  margin-top: 3rem;
}

.writing .writing-top-section .el-col:nth-of-type(3) .blog-text {
  margin: 3rem 2rem;
}

.writing .writing-top-section .el-col:nth-of-type(3) p:first-of-type {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 140%;
  letter-spacing: -0.005em;
  color: #111111;
}

.writing .writing-top-section .el-col:nth-of-type(3) p:nth-of-type(2) {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 160%;
  letter-spacing: -0.005em;
  color: #676565;
}

@media screen and (max-width: 991px) {
  .writing .writing-top-section p.p2,
  .writing .writing-top-section p.p1 {
    display: none;
  }

  .writing .writing-top-section h4 {
    word-break: break-word;
  }
}

@media screen and (max-width: 900px) {
  .writing .writing-top-section .el-col:first-of-type,
  .writing .writing-top-section .el-col:nth-of-type(2) {
    padding-left: 2rem;
  }
}
</style>