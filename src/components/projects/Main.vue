<template>
  <base-container>
    <section class="project-lists">
      <el-row :gutter="30">
        <el-col :sm="24" :lg="12">
          <img src="../../assets/BD.png" alt="" />
          <div class="text">
            <p class="project-name">Orientation APP</p>
            <p>International NGO</p>
          </div>
        </el-col>
        <el-col :sm="24" :lg="12">
          <img src="../../assets/unsplash_Ksgjx0tyuCY.png" alt="" />
          <div class="text">
            <p class="project-name">Website and App of Mass Transit System</p>
            <p>Thailand Transit Company</p>
          </div>
        </el-col>
        <el-col :sm="24" :lg="12">
          <img src="../../assets/image-16.png" alt="" />
          <div class="text">
            <p class="project-name">Infrastructure APP</p>
            <p>HK Public Corporation</p>
          </div>
        </el-col>
        <el-col :sm="24" :lg="12">
          <img src="../../assets/DENTISTCLINIC.png" alt="" />
          <div class="text">
            <p class="project-name">Dentist Clinic APP</p>
            <p>University in Hong Kong</p>
          </div>
        </el-col>
      </el-row>
    </section>
  </base-container>
</template>

<style scoped>
.project-lists {
  padding: 6rem 0;
}

.project-lists .el-row .el-col {
  margin-bottom: 9.5rem;
}

.project-lists .el-row .el-col:first-of-type img:first-child {
  background: #fff;
  padding: 3rem;
}

.project-lists .el-row .el-col img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.project-lists .el-row .el-col p.project-name {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 38px;
  line-height: 46px;
  text-align: right;
  letter-spacing: -0.014em;
  color: #111111;
  margin-top: -3.5rem;
}

.project-lists .el-row .el-col p:nth-of-type(2) {
  font-family: "Abel";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 36px;
  text-align: right;
  color: #111111;
}

.project-lists .el-row .el-col .text {
  text-align: end;
  padding-right: 0.6rem;
}

/* Second Column */

.project-lists .el-row .el-col:nth-child(2) img {
  margin-top: 6rem;
}

.project-lists .el-row .el-col:nth-child(2) p.project-name {
  color: #fff;
  margin-top: -6.5rem;
}

/* Third Column */

.project-lists .el-row .el-col:nth-child(3) p.project-name {
  color: #fff;
}

.project-lists .el-row .el-col:nth-child(3) p:nth-of-type(2) {
  color: #6f6f6f;
}

.project-lists .el-row .el-col:nth-child(4) img {
  margin-top: 6rem;
}

@media screen and (max-width: 1199px) {
  .project-lists .el-row .el-col:nth-child(4) img {
    margin-top: 0;
  }

  .project-lists .el-row .el-col:nth-child(2) img {
    margin-top: 0;
  }

  .project-lists .el-row .el-col:nth-of-type(2) p.project-name {
    margin-top: -3.5rem;
  }
}
</style>