<template>
  <section class="feedback">
    <!-- <base-container> -->
    <el-row>
      <el-col :sm="24" :md="12" class="p-10">
        <h4>Dental-related innovation</h4>
        <p>
          With the rapid growth in technology level, IT/digital technology has
          been more command in medical usage. As one of the best dental schools
          in the world, besides providing the best education to the student, the
          Faculty of Dentistry of this university also has the responsibility
          for dental-related innovations.
        </p>
      </el-col>
      <el-col :sm="24" :md="12">
        <img src="../../assets/Image-4.png" alt="" />
      </el-col>
      <base-container>
        <el-col :sm="24" :md="14">
          <h4>Covid-19: Changing social situation</h4>
          <p>
            According to the changing social situation due to the coronavirus19,
            an user-side mobile app is now essential for patient primary
            diagnosis.
          </p>
        </el-col>
        <el-col class="social-distancing" :span="24">
          <img src="../../assets/Image.png" alt="" />
        </el-col>
        <el-col :sm="24" :md="14">
          <h4>“SCAN” your teeth</h4>
          <p>
            We developed an app that includes the function for a patient to
            “scan” their teeth by using the Phone’s camera. Unlike just a photo,
            with the app user can scan teeth into a 3D model, which is useful
            for the dentist to have a primary diagnosis.
          </p>
        </el-col>
      </base-container>
    </el-row>
    <!-- </base-container> -->
  </section>
  <section class="artificial-teeth">
    <el-row>
      <el-col>
        <img
          src="../../assets/artificial-jaw-beautiful-white-teeth-oral-hygiene-concept-1.png"
          alt=""
        />
      </el-col>
    </el-row>
  </section>
</template>

<style scoped>
.feedback {
  padding: 3rem 0;
  background: #fff;
}

.feedback .el-row {
  align-items: center;
}

.feedback .el-col.p-10 {
  padding-left: 10rem;
  padding-right: 6rem;
}

.feedback h4 {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 1.875rem;
  line-height: 140%;
  letter-spacing: -0.005em;
  color: #111111;
}

.feedback p {
  font-family: "Abel";
  font-style: normal;
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 210%;
  color: #6f6f6f;
  margin-bottom: 4rem;
}

.feedback .el-col.social-distancing {
  text-align: center;
}

.feedback .el-col.social-distancing img {
  width: 70%;
}

.feedback img {
  width: 100%;
  /* margin: 4rem 0; */
  margin-bottom: 4rem;
}

.artificial-teeth img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media screen and (max-width: 991px) {
  .feedback .el-col.p-10 {
    padding-right: 10rem;
  }
}

@media screen and (max-width: 750px) {
  .feedback h4 {
    font-size: 4rem;
  }

  .feedback p {
    font-size: 2.5rem;
  }

  .challenge img {
    width: 100%;
  }
}
</style>