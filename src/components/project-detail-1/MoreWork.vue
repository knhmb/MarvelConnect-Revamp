<template>
  <section class="more-work">
    <base-container>
      <h4>More Works...</h4>
      <el-row :gutter="30">
        <el-col :span="12">
          <img
            @click="$router.push('/project-detail-4')"
            src="../../assets/DENTISTCLINIC.png"
            alt=""
          />
          <p>Dentist Clinic APP</p>
          <p @click="$router.push('/project-detail-4')">Know More</p>
        </el-col>
        <el-col :span="12">
          <img
            @click="$router.push('/project-detail-5')"
            src="../../assets/image-8.png"
            alt=""
          />
          <p>The Best Hotel Booking Sites</p>
          <p @click="$router.push('/project-detail-5')">Know More</p>
        </el-col>
      </el-row>
    </base-container>
  </section>
</template>

<style scoped>
.more-work {
  padding: 3rem 0;
  background-color: #e6e6e6;
}

.more-work .el-col {
  position: relative;
}

.more-work h4 {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 3.375rem;
  line-height: 140%;
  letter-spacing: -0.005em;
  color: #111111;
  margin-bottom: 4rem;
  text-decoration-line: underline;
}

.more-work img {
  width: 100%;
  cursor: pointer;
  transition: 0.8s;
}

.more-work img:hover {
  transform: rotateY(30deg);
}

.more-work p:first-of-type {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 2rem;
  line-height: 2.875rem;
  text-align: right;
  letter-spacing: -0.014em;
  color: #111111;
}

.more-work p:nth-of-type(2) {
  font-family: "Abel";
  font-style: normal;
  font-weight: 400;
  font-size: 1.125rem;
  line-height: 2.25rem;
  text-align: right;
  color: #111111;
  cursor: pointer;
  transition: 0.3s ease-out;
}
.more-work p:nth-of-type(2):hover {
  color: grey;
  transform: translateY(-0.5rem);
}

@media screen and (max-width: 722px) {
  .more-work h4 {
    font-size: 4rem;
  }
}
</style>