<template>
  <section class="global">
    <!-- <base-container> -->
    <el-row justify="space-between">
      <el-col>
        <h4>
          Digital Marketing <br />
          (Global)
        </h4>
      </el-col>
      <el-col :sm="24" :md="11">
        <img
          src="../../assets/analyzing-marketing-tools-2021-09-24-02-56-43-utc-1.png"
          alt=""
        />
        <div class="dots-image">
          <img class="dots" src="../../assets/Group-79.png" alt="" />
        </div>
      </el-col>
      <el-col :sm="24" :md="12">
        <p class="title">SEO (Google / Yahoo)</p>
        <p>
          Search Engine Optimization (SEO). Most customers are searching for
          your product / business starting with search engines. Increase in
          website traffic, sales, and higher keyword rankings on Google / Yahoo,
          SEO is what you needed.
        </p>
        <p class="title">SEM (Google Ads)</p>
        <p>
          Search Engine Marketing (SEM). Google Ads is one of the most
          successful marketing strategies. Your target customers can find you
          via mobile search and desktop search. We can optimize the efficiency
          of Google Ads by setting bid strategies and management.
        </p>
        <p class="title">Analytics</p>
        <p>
          Excellent marketing service is analysing data and then improving
          marketing and advertising strategies. Greater success comes from
          Analytics. We make sure you gain value fast and effective.
        </p>
      </el-col>
    </el-row>
    <!-- </base-container> -->
  </section>
</template>

<style scoped>
.global {
  background-color: #fff;
  padding: 4rem 0;
}

.global h4 {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 4.375rem;
  line-height: 5.625rem;
  letter-spacing: -0.005em;
  color: #111111;
  margin-left: 10rem;
  margin-bottom: 8rem;
}

.global img {
  width: 100%;
  margin-bottom: 2rem;
}

.global .dots-image {
  text-align: center;
}

.global img.dots {
  width: 50%;
}

.global p.title {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 1.875rem;
  line-height: 140%;
  letter-spacing: -0.005em;
  color: #111111;
  margin-bottom: 1rem;
}

.global p {
  font-family: "Abel";
  font-style: normal;
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 210%;
  color: #6f6f6f;
  padding-right: 5rem;
  margin-bottom: 2rem;
}

@media screen and (max-width: 991px) {
  .global p {
    text-align: center;
    padding: 0 10rem;
  }
}

@media screen and (max-width: 750px) {
  .global p {
    font-size: 1.5rem;
  }
  .global p.title {
    font-size: 2rem;
  }
}
</style>