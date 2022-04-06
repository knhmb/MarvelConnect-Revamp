<template>
  <section class="experience">
    <base-container>
      <el-row>
        <el-col :sm="24" :md="12">
          <h4>Restricted number of stuff</h4>
          <p>
            Since the number of staff is restricted this year, instead of the
            traditional way, our app allows participants to SCAN the objectives,
            such as building, or even plant, to check-in the checkpoints for the
            orienteering competition.
          </p>
        </el-col>
        <el-col :sm="24" :md="12">
          <img src="../../assets/Image-1.png" alt="" />
        </el-col>
        <el-col>
          <h4>New experience with object recognition</h4>
          <p>
            With our object recognition technology, competitors don’t need to
            scan specific QR codes during the event which might destroy their
            sense of immersion in the event.
          </p>
        </el-col>
      </el-row>
    </base-container>
  </section>
  <section class="experience-img">
    <el-row>
      <el-col>
        <img src="../../assets/image-14-1.png" alt="" />
        <img class="app" src="../../assets/BD.png" alt="" />
      </el-col>
    </el-row>
  </section>
</template>

<style scoped>
.experience {
  background: #e6e6e6;
  padding: 3rem 0;
}

.experience .el-col:first-of-type {
  margin-left: 1.5rem;
}

.experience h4 {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 140%;
  letter-spacing: -0.005em;
  color: #111111;
}

.experience p {
  font-family: "Abel";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 210%;
  color: #6f6f6f;
  margin-bottom: 6rem;
}

.experience img {
  width: 100%;
  /* margin-top: 6rem; */
}

.experience .el-col:nth-of-type(3) {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 6rem;
}

.experience .el-col:nth-of-type(3) h4,
.experience .el-col:nth-of-type(3) p {
  width: 50%;
}

/* .experience-img {
  padding: 3rem 0;
} */

.experience-img .el-col {
  position: relative;
}

.experience-img img {
  width: 100%;
  height: 90%;
  object-fit: cover;
}

.experience-img img.app {
  position: absolute;
  top: -2rem;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  height: 100%;
  object-fit: contain;
}

@media screen and (max-width: 991px) {
  .experience .el-col:nth-of-type(3) h4,
  .experience .el-col:nth-of-type(3) p {
    width: 100%;
  }
}
</style>