<template>
  <section class="lets-talk-digital-marketing">
    <base-container>
      <el-row justify="space-between">
        <el-col :sm="24" :md="8">
          <ul>
            <li>Digital Marketing (Global)</li>
            <li class="mr-2">Visual Design</li>
            <li class="mr-2">SEO ( Google /Yahoo)</li>
            <li class="mr-2">SEM ( Google Ads)</li>
            <li class="mr-2">Social Media Marketing</li>
            <li class="mr-2">Facebook</li>
            <li class="mr-2">Instagram</li>
            <li class="mr-2">WhatsApp</li>
            <li class="mr-2">Youtube</li>
          </ul>
          <ul>
            <li>Digital Marketing in China</li>
            <li class="mr-2">
              TMALL / Taobao e-commerce platform (third partnership services &
              Ads)
            </li>
            <li class="mr-2">Baidu marketing</li>
            <li class="mr-2">Social Media Marketing</li>
            <li class="mr-2">Wechat</li>
            <li class="mr-2">Weibo</li>
            <li class="mr-2">Little Red Book</li>
            <li class="mr-2">TikTok</li>
            <li class="mr-2">Baidu</li>
          </ul>
        </el-col>
        <el-col :sm="24" :md="15">
          <img
            src="../../assets/marketing-plan-researching-paperwork-on-the-table-2021-08-28-17-58-29-utc-1.png"
            alt=""
          />
          <p>
            Marvelconnect has many years of media experience and provides
            excellent digital marketing solutions. Our company has successfully
            helped international and local companies in their strategic planning
            of large-scale events and digital marketing.
          </p>
        </el-col>
        <el-col>
          <base-button centered mode="bold">LET’S TALK</base-button>
        </el-col>
      </el-row>
    </base-container>
  </section>
</template>

<style scoped>
.digital-marketing .lets-talk-digital-marketing {
  padding: 4rem 0;
  background: #e6e6e6;
}

.digital-marketing .lets-talk-digital-marketing .el-row {
  /* align-items: center; */
}

.digital-marketing .lets-talk-digital-marketing ul {
  list-style-type: none;
}

.digital-marketing .lets-talk-digital-marketing ul {
  margin-bottom: 4rem;
}

.digital-marketing .lets-talk-digital-marketing ul:last-of-type {
  margin-bottom: 10rem;
}

.digital-marketing .lets-talk-digital-marketing ul li {
  font-family: "Abel";
  font-style: normal;
  font-weight: 400;
  font-size: 1.75rem;
  line-height: 2.25rem;
  color: #111111;
  margin-bottom: 2rem;
}

.digital-marketing .lets-talk-digital-marketing ul li.mr-2 {
  margin-left: 2rem;
}

.digital-marketing .lets-talk-digital-marketing ul li::before {
  content: "+";
  color: #0de9f6;
  margin-right: 1rem;
}

.digital-marketing .lets-talk-digital-marketing img {
  width: 100%;
}

.digital-marketing .lets-talk-digital-marketing p {
  font-family: "Abel";
  font-style: normal;
  font-weight: 400;
  font-size: 1.75rem;
  line-height: 210%;
  color: #6f6f6f;
  margin-top: 2rem;
}

@media screen and (max-width: 600px) {
  .digital-marketing .lets-talk-digital-marketing ul li {
    font-size: 3rem;
    line-height: 4rem;
  }

  .digital-marketing .lets-talk-digital-marketing p {
    font-size: 3rem;
  }
}
</style>