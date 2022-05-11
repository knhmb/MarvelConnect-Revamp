<template>
  <section class="challenge">
    <!-- <base-container> -->
    <el-row justify="space-between">
      <el-col :sm="24" :md="11">
        <h4>Challenge</h4>
        <p>
          Following the Government’s latest regulation on group gathering, there
          is a strict restriction on the number of event assistants and
          participants. Moreover, since “in city to save” has already beheld for
          years, to keep the event attractive and refreshing, a new element is
          needed to be added.
        </p>
      </el-col>
      <el-col :sm="24" :md="12">
        <img
          src="../../assets/event-venue-woman-taking-a-picture-of-an-event-ve-2021-08-30-08-16-07-utc-1.png"
          alt=""
        />
      </el-col>
      <el-col :sm="24" :md="12">
        <img
          src="../../assets/asian-people-using-mobile-phone-keeping-social-dis-2021-12-28-00-43-55-utc-1.png"
          alt=""
        />
      </el-col>
      <el-col :sm="24" :md="11">
        <h4>Solution: “GO VIRTUAL”</h4>
        <p>
          Marvelconnect has designed an app for the competition which is named
          by the name of the event “In City to Save”. In “In City to Save” (the
          app), all basic functions required for an event are included, such as
          sign up, team distribution, etc.
        </p>
      </el-col>
      <el-col :sm="24" :md="11">
        <h4>Restricted number of staff</h4>
        <p>
          Since the number of staff is restricted this year, instead of the
          traditional way, our app allows participants to SCAN the objectives,
          such as building, or even plant, to check-in the checkpoints for the
          orienteering competition.
        </p>
      </el-col>
      <el-col :sm="24" :md="12">
        <img src="../../assets/image-9-2.png" alt="" />
      </el-col>
      <el-col :sm="24" :md="12">
        <img
          src="../../assets/photograph-of-a-track-and-trace-qr-code-2022-03-04-02-23-54-utc-1.png"
          alt=""
        />
      </el-col>
      <el-col :sm="24" :md="11">
        <h4>New experience with object recognition</h4>
        <p>
          With our object recognition technology, competitors don’t need to scan
          specific QR codes during the event which might destroy their sense of
          immersion in the event.
        </p>
      </el-col>
      <el-col :sm="24" :md="11">
        <h4>Realtime feedback</h4>
        <p>
          During the procedures, the organizer can have the most updated status
          for competitors to give further instruction, be well-prepared if an
          accident happens during the event.
        </p>
      </el-col>
      <el-col :sm="24" :md="12">
        <img
          src="../../assets/customer-feedback-and-satisfaction-conceptual-imag-2021-08-29-09-32-07-utc-1.png"
          alt=""
        />
      </el-col>
    </el-row>
    <!-- </base-container> -->
  </section>
  <!-- <section class="challenge-img">
    <el-row>
      <el-col>
        <img src="../../assets/image-9.png" alt="" />
      </el-col>
    </el-row>
  </section> -->
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