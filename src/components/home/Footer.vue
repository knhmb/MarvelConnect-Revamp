<template>
  <div class="footer">
    <base-container>
      <el-row justify="space-between">
        <el-col :sm="24" :lg="8">
          <img class="logo" src="../../assets/brand-logo.png" alt="" />
          <p>
            Marvelconnect has always been a trustworthy partner and service
            provider to our clients around the globe.
          </p>
          <div class="social-media-icons">
            <img src="../../assets/icon-ig.png" alt="" />
            <img src="../../assets/icon-facebook.png" alt="" />
            <img src="../../assets/icon-twitter.png" alt="" />
            <img src="../../assets/icon-linkedin.png" alt="" />
          </div>
        </el-col>
        <el-col :sm="24" :lg="12">
          <p class="contact-us">GET IN TOUCH</p>
          <div class="contact-info">
            <a href="#">info@marvelconnect.com</a>
            <a href="#">(852) 3116-7505</a>
          </div>
          <div class="explore">
            <p>EXPLORE</p>
            <ul>
              <li>Work</li>
              <li>Services</li>
              <li>About</li>
              <li>Careers</li>
              <li>Insights</li>
              <li>Contact</li>
            </ul>
            <p class="location">
              Unit 1701, 17/F, Enterprise Square Three,39 Wang Chiu Road,
              Kowloon Bay, Kowloon, Hong Kong
            </p>
          </div>
        </el-col>
      </el-row>
    </base-container>
  </div>
</template>

<style scoped>
.footer {
  background: #171615;
  padding: 6rem 0;
}

.footer .logo + p {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 160%;
  letter-spacing: 0.02em;
  color: #ffffff;
  margin-top: 3rem;
}

.footer .social-media-icons {
  margin-top: 5rem;
}

.footer .social-media-icons img {
  margin-right: 1rem;
  cursor: pointer;
  transition: 0.5s;
}

.footer .social-media-icons img:hover {
  transform: translateY(-0.5rem);
}

.footer p.contact-us {
  font-family: "Abel";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  letter-spacing: 0.15em;
  color: #ffffff;
}

.footer .contact-info {
  margin-top: 2rem;
}

.footer .contact-info a {
  font-family: "Abel";
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 140%;
  letter-spacing: 0.02em;
  color: #3c91d6;
  margin-bottom: 1rem;
  display: block;
}

.footer .explore {
  margin-top: 5rem;
}

.footer .explore p {
  font-family: "Abel";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  letter-spacing: 0.15em;
  color: #ffffff;
}

.footer .explore ul {
  margin: 1.5rem 0;
  list-style: none;
  display: flex;
}

.footer .explore li {
  margin-right: 1rem;
  font-family: "Abel";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  letter-spacing: 0.05em;
  color: #9c9c9c;
  cursor: pointer;
  position: relative;
}

.footer .explore p.location {
  font-family: "Abel";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0.055em;
  color: #545453;
}
</style>