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
            <a href="mailto:info@marvelconnect.com">info@marvelconnect.com</a>
            <a href="#">(852) 3116-7505</a>
          </div>
          <div class="explore">
            <p>EXPLORE</p>
            <ul>
              <li @click="$router.push('/projects')">Projects</li>
              <li @click="$router.push('/services')">Services</li>
              <li @click="$router.push('/about-us')">About</li>
              <li @click="$router.push('/contact')">Contact</li>
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

.footer .logo {
  width: 15rem;
}

.footer .logo + p {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 1rem;
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
  width: 1.5rem;
}

.footer .social-media-icons img:hover {
  transform: translateY(-0.5rem);
}

.footer p.contact-us {
  font-family: "Abel";
  font-style: normal;
  font-weight: 400;
  font-size: 0.875rem;
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
  font-size: 1.0625rem;
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
  font-size: 0.875rem;
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
  font-size: 1rem;
  line-height: 125%;
  letter-spacing: 0.05em;
  color: #9c9c9c;
  cursor: pointer;
  position: relative;
  transition: color 0.3s ease-out;
}

.footer .explore li:hover {
  color: #fff;
}

.footer .explore p.location {
  font-family: "Abel";
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 150%;
  letter-spacing: 0.055em;
  color: #545453;
}

@media screen and (max-width: 991px) {
  .footer .logo {
    width: 25rem;
  }

  .footer .logo + p {
    font-size: 3rem;
    line-height: 160%;
  }

  .footer .social-media-icons img {
    width: 4rem;
  }

  .footer p.contact-us {
    font-size: 2rem;
    line-height: 140%;
    margin-top: 1rem;
  }

  .footer .contact-info a {
    font-size: 3rem;
    line-height: 140%;
  }

  .footer .explore li {
    font-size: 3rem;
    line-height: 125%;
  }

  .footer .explore p {
    font-size: 3rem;
  }

  .footer .explore p.location {
    font-size: 3rem;
  }
}

@media screen and (max-width: 500px) {
  .footer .explore ul {
    /* margin: 1.5rem 0; */
    display: block;
  }

  .footer .explore li {
    margin-bottom: 1rem;
  }
}
</style>