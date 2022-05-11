<template>
  <section class="challenge">
    <!-- <base-container> -->
    <el-row justify="space-between">
      <el-col :sm="24" :md="11">
        <h4>Pre-diagnosis before going to Clinics</h4>
        <p>
          Being a “flagship technology infrastructure” of Hong Kong, the Science
          Park provides a campus-like environment of 330000 square meters.
          Because of its scale and size, and to keep the image of a
          high-technology enterprise, the workload, and manpower required for
          infrastructure purposes is high. Thus, systematical management is
          needed for daily maintenance.
        </p>
      </el-col>
      <el-col :sm="24" :md="12">
        <img src="../../assets/Image-17-1.png" alt="" />
      </el-col>
      <el-col :sm="24" :md="12">
        <img src="../../assets/Image-18-1.png" alt="" />
      </el-col>
      <el-col :sm="24" :md="11">
        <h4>Dental-related innovation</h4>
        <p>
          With the rapid growth in technology level, IT/digital technology has
          been more command in medical usage. As one of the best dental schools
          in the world, besides providing the best education to the student, the
          Faculty of Dentistry of this university also has the responsibility
          for dental-related innovations.
        </p>
      </el-col>
      <el-col :sm="24" :md="11">
        <h4>3D Dental Imaging</h4>
        <p>
          3D dental imaging is becoming the new standard of care in dental
          practices. 3D radiography is technology that allows us to view the
          cross-section of the jaw or tooth, rather than just the vertical
          height apparent in regular 2D X-rays. It provides quicker and more
          accurate diagnoses, better treatment plans and advanced care for our
          patients.
        </p>
      </el-col>
      <el-col :sm="24" :md="12">
        <img src="../../assets/CaseStudy_DesktopCompB-1.png" alt="" />
      </el-col>
      <el-col :sm="24" :md="12">
        <img
          src="../../assets/close-up-of-teeth-radiography-scan-on-modern-table-2021-10-12-05-04-59-utc-1.png"
          alt=""
        />
      </el-col>
      <el-col :sm="24" :md="11">
        <h4>“SCAN” your teeth</h4>
        <p>
          We developed an app that includes the function for a patient to “scan”
          their teeth by using the Phone’s camera. Unlike just a photo, with the
          app user can scan teeth into a 3D model, which is useful for the
          dentist to have a primary diagnosis.
        </p>
      </el-col>
      <el-col :sm="24" :md="11">
        <h4>Dental anxiety? Not a problem</h4>
        <p>
          Besides giving convenience for diagnosis, according to statistics,
          over 90% of people refuse to see a dentist because of “dental
          anxiety”. This app could help to reduce their dental fear to encourage
          early detection of dental health problems.
        </p>
      </el-col>
      <el-col :sm="24" :md="12">
        <img src="../../assets/Image-19-1.png" alt="" />
      </el-col>
      <el-col :sm="24" :md="12">
        <img
          src="../../assets/asia-businesswoman-wear-face-mask-social-distancin-2021-09-02-11-04-21-utc-1.png"
          alt=""
        />
      </el-col>
      <el-col :sm="24" :md="11">
        <h4>Covid-19: Changing social situation</h4>
        <p>
          According to the changing social situation due to the coronavirus19,
          an user-side mobile app is now essential for patient primary
          diagnosis.
        </p>
      </el-col>
    </el-row>
    <!-- </base-container> -->
  </section>
</template>

<style scoped>
.challenge {
  padding: 10rem 0;
  background: #e6e6e6;
}

.challenge .el-row {
  align-items: center;
}

.challenge .el-col {
  margin-bottom: 7rem;
}

.challenge .el-col:nth-of-type(4n) {
  padding-right: 3rem;
}

.challenge .el-col:nth-of-type(2n + 1) h4,
.challenge .el-col:nth-of-type(2n + 1) p {
  margin-left: 10rem;
}

.challenge img {
  width: 100%;
  /* height: 100%;
  object-fit: cover; */
}

.challenge h4 {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 1.875rem;
  line-height: 140%;
  letter-spacing: -0.005em;
  color: #111111;
  margin-bottom: 2rem;
}

.challenge p {
  font-family: "Abel";
  font-style: normal;
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 210%;
  color: #6f6f6f;
  /* margin-bottom: 8rem; */
}

.challenge .el-col:nth-of-type(3) {
  text-align: center;
}

.challenge img.social-distancing-img {
  width: 80%;
  margin-bottom: 4rem;
}

.challenge-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media screen and (max-width: 991px) {
  .challenge .el-col:nth-of-type(2n + 1) h4,
  .challenge .el-col:nth-of-type(2n + 1) p {
    margin-left: 0;
  }

  .challenge .el-col h4,
  .challenge .el-col p {
    padding: 0 10rem;
    text-align: center;
  }
}

@media screen and (max-width: 750px) {
  .challenge h4 {
    font-size: 4rem;
  }

  .challenge .el-col:nth-of-type(2) h4 {
    margin-top: 4rem;
  }

  .challenge p {
    font-size: 2.5rem;
  }

  .challenge img {
    width: 100%;
  }

  .challenge img.social-distancing-img {
    width: 100%;
    margin-bottom: 4rem;
  }
}
</style>