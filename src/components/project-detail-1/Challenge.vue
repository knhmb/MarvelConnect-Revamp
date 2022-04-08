<template>
  <section class="challenge">
    <base-container>
      <el-row>
        <el-col>
          <img src="../../assets/image-13.png" alt="" />
        </el-col>
        <el-col :sm="24" :md="12">
          <h4>Challenge</h4>
          <p>
            Following the Government’s latest regulation on group gathering,
            there is a strict restriction on the number of event assistants and
            participants. Moreover, since “in city to save” has already beheld
            for years, to keep the event attractive and refreshing, a new
            element is needed to be added.
          </p>
        </el-col>
        <el-col>
          <img
            class="social-distancing-img"
            src="../../assets/Image.png"
            alt=""
          />
        </el-col>
        <el-col :sm="24" :md="12">
          <h4>Solution: “GO VIRTUAL”</h4>
          <p>
            Marvelconnect has designed an app for the competition which is named
            by the name of the event “In City to Save”. In “In City to Save”
            (the app), all basic functions required for an event are included,
            such as sign up, team distribution, etc.
          </p>
        </el-col>
      </el-row>
    </base-container>
  </section>
  <section class="challenge-img">
    <el-row>
      <el-col>
        <img src="../../assets/image-9.png" alt="" />
      </el-col>
    </el-row>
  </section>
</template>

<style scoped>
.challenge {
  padding: 3rem 0;
  background: #e6e6e6;
}

.challenge img {
  width: 50%;
}

.challenge h4 {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 1.875rem;
  line-height: 140%;
  letter-spacing: -0.005em;
  color: #111111;
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