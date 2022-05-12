<template>
  <section class="platform">
    <!-- <base-container> -->
    <el-row justify="space-between">
      <el-col :sm="24" :md="11">
        <img
          src="../../assets/woman-taking-photo-on-cellphone-at-tourist-attract-2021-08-28-20-47-08-utc-1.png"
          alt=""
        />
      </el-col>
      <el-col :sm="24" :md="12">
        <p class="title">Social Media Marketing</p>
        <p>
          KOL (Key Opinion Leader) and influencers bring you a vast number of
          customers in the short term on WeChat. Banner ads and contests
          marketing are efficient in raising your followers and customers.
        </p>
        <ul>
          <li>WeChat:</li>
          <li>WeChat advertising</li>
          <li>Wechat marketing e-commerce</li>
        </ul>
      </el-col>
      <!-- <el-col>
        <img class="web" src="../../assets/unsplash_PGdW_bHDbpI-2.png" alt="" />
      </el-col> -->
    </el-row>
    <!-- </base-container> -->
  </section>
  <section class="lets-talk">
    <el-row justify="space-between">
      <el-col :sm="24" :md="12">
        <p class="title">Media Marketing in China</p>
        <p>
          Chinese consumers are having their unique social media app for fashion
          (Little Red Book, or XiaoHongShu), to short video platform (TikTok).
          Getting in China-market, you have to promote your business uniquely
          and effectively by using those apps. We provide total sloution for
          marketing on Little Red Book, Weibo ,TikTok platforms
        </p>
      </el-col>
      <el-col :sm="24" :md="11">
        <img src="../../assets/Social-Media-Marketing-1024-1.png" alt="" />
      </el-col>
    </el-row>
  </section>
</template>

<style scoped>
.platform {
  background: #fff;
  padding: 3rem 0 6rem 0;
}

.platform .el-row {
  /* align-items: center; */
}

.platform img {
  width: 100%;
  /* height: 100%;
  object-fit: contain; */
}

.platform p.title,
.lets-talk p.title {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 4.375rem;
  line-height: 5.625rem;
  letter-spacing: -0.005em;
  color: #111111;
}

.platform p,
.lets-talk p {
  font-family: "Abel";
  font-style: normal;
  font-weight: 400;
  /* font-size: 2.25rem; */
  font-size: 1.75rem;
  padding-right: 2rem;
  line-height: 210%;
  color: #6f6f6f;
}

.platform ul {
  list-style: none;
}

.platform ul li {
  font-family: "Abel";
  font-style: normal;
  font-weight: 400;
  font-size: 1.75rem;
  line-height: 210%;
  color: #6f6f6f;
  margin-bottom: 0.5rem;
}

.platform img.web {
  margin: 3rem 0;
}

.lets-talk {
  padding: 3rem 0;
  background: #e6e6e6;
}

.lets-talk img {
  width: 100%;
}
.lets-talk p.title {
  margin-bottom: 1.5rem;
}

.lets-talk p {
  margin-left: 2rem;
  margin-bottom: 2rem;
}

@media screen and (max-width: 991px) {
  .platform ul,
  .platform p {
    text-align: center;
    padding: 0 10rem;
  }

  .platform p.title {
    margin-top: 1.5rem;
  }

  .lets-talk p {
    text-align: center;
    padding: 0 10rem;
  }
}

@media screen and (max-width: 600px) {
  .platform ul {
    font-size: 2.5rem;
  }
}
</style>