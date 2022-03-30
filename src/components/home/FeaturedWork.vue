<template>
  <base-container>
    <section class="featured-work">
      <el-row>
        <el-col>
          <h2>Featured Work</h2>
          <p>Explore some of our finest projects.</p>
        </el-col>
      </el-row>
      <el-row :gutter="40" class="images">
        <el-col :sm="24" :lg="12">
          <img src="../../assets/BD.png" alt="" />
          <p>Orienteering APP</p>
          <p class="additional-info">Know more</p>
        </el-col>
        <el-col class="science-parks" :sm="24" :lg="12">
          <img src="../../assets/image-16.png" alt="" />
          <p>APP of Science P<span>arks</span></p>
          <p class="additional-info">Know more</p>
        </el-col>
        <el-col class="dentist-app" :sm="24" :lg="12">
          <img src="../../assets/DENTISTCLINIC.png" alt="" />
          <p>Dentist Clinic APP</p>
          <p class="additional-info">Know more</p>
        </el-col>
        <el-col class="dentist-app-2" :sm="24" :lg="12">
          <img src="../../assets/image-8.png" alt="" />
          <p>The Best Hotel Booking Sites</p>
          <p class="additional-info">Know more</p>
        </el-col>
      </el-row>
      <el-row>
        <el-col class="btn-readmore">
          <base-button>VIEW MORE WORK</base-button>
        </el-col>
      </el-row>
    </section>
  </base-container>
</template>


<style scoped>
.featured-work {
  padding: 6rem 0;
}

.featured-work h2 {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 54px;
  line-height: 66px;
  letter-spacing: -0.005em;
  color: #111111;
}

.featured-work p {
  font-family: "Abel";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 36px;
  letter-spacing: 0.018em;
  color: #111111;
  margin-top: 0.5rem;
}

.featured-work .images {
  margin-top: 4.5rem;
}

.featured-work .images .el-col {
  position: relative;
  width: 100%;
  height: 100%;
  margin-bottom: 2rem;
}

.featured-work .images img {
  /* width: 304px; */
  height: 100%;
  width: 100%;
  object-fit: contain;
  position: relative;
  /* margin-top: 1.5rem; */
}

.featured-work .images p {
  position: absolute;
  bottom: 5rem;
  right: 1rem;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 46px;
  text-align: right;
  letter-spacing: -0.014em;
  color: #111111;
}

.featured-work .images p.additional-info {
  font-family: "Abel";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 36px;
  text-align: right;
  color: #111111;
  bottom: 3rem;
}

.featured-work .images .science-parks {
  margin-top: 18rem;
}

.featured-work .images .science-parks p {
  bottom: 3rem;
  right: -2rem;
  color: #fff;
}

.featured-work .images .science-parks p span {
  color: #111;
}

.featured-work .images .science-parks p.additional-info {
  bottom: 1rem;
  right: -4.1rem;
  color: #111;
}

.featured-work .images .dentist-app p {
  bottom: 3rem;
  right: 0rem;
  color: #111;
}
.featured-work .images .dentist-app p.additional-info {
  bottom: 1rem;
  right: 0rem;
  color: #111;
}

.featured-work .images .dentist-app-2 {
  margin-top: 2rem;
}

.featured-work .images .dentist-app-2 p {
  bottom: 3rem;
  right: 0.6rem;
  color: #111;
}

.featured-work .images .dentist-app-2 p.additional-info {
  bottom: 1.3rem;
  right: 0rem;
  color: #111;
}

.featured-work .btn-readmore {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}
</style>