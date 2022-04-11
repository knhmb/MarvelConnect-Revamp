<template>
  <section class="challenge">
    <!-- <base-container> -->
    <el-row>
      <base-container>
        <el-col class="img-content">
          <img src="../../assets/Image-8-1.png" alt="" />
        </el-col>
      </base-container>
      <base-container>
        <el-col :sm="24" :md="12">
          <h4>Pre-diagnosis before going to Clinics</h4>
          <p>
            When talking about the usage of the app in dental clinics, most
            people would only think of online booking, but what if there is an
            app that could help a patient “SCAN” their teeth by themselves?
          </p>
        </el-col>
      </base-container>
    </el-row>
    <!-- </base-container> -->
  </section>
  <section class="challenge-img">
    <el-row>
      <el-col>
        <img src="../../assets/Image-9-1.png" alt="" />
      </el-col>
    </el-row>
  </section>
</template>

<style scoped>
.challenge {
  padding: 3rem 0;
  background: #fff;
}

.challenge .el-col.img-content {
  text-align: center;
}

.challenge img {
  width: 70%;
}

.challenge h4 {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 1.875rem;
  line-height: 140%;
  letter-spacing: -0.005em;
  color: #111111;
  margin-top: 8rem;
}

.challenge p {
  font-family: "Abel";
  font-style: normal;
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 210%;
  color: #6f6f6f;
  margin-bottom: 8rem;
}

.challenge .el-col:nth-of-type(3) {
  text-align: end;
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

@media screen and (max-width: 750px) {
  .challenge h4 {
    font-size: 4rem;
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