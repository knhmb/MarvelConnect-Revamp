<template>
  <section class="lets-talk-digital-marketing">
    <base-container>
      <el-row>
        <el-col :sm="24" :md="7">
          <ul>
            <li>Visual Design</li>
            <li>UX/UI design</li>
            <li>Interactivity</li>
            <li>Responsiveness</li>
            <li>Navigation</li>
            <li>User friendly</li>
          </ul>
        </el-col>
        <el-col :sm="24" :md="17">
          <p>
            Having a unique website design is an important part of the branding
            and marketing process of your business. We use the most famous CMS
            platform to help you develop the most professional web apps and
            websites in a very short time.
          </p>
        </el-col>
      </el-row>
    </base-container>
  </section>
</template>

<style scoped>
.digital-marketing .lets-talk-digital-marketing {
  padding: 3rem 0;
  background: #e6e6e6;
}

.digital-marketing .lets-talk-digital-marketing .el-row {
  align-items: center;
}

.digital-marketing .lets-talk-digital-marketing ul {
  list-style-type: none;
}

.digital-marketing .lets-talk-digital-marketing ul li {
  font-family: "Abel";
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 36px;
  color: #111111;
  margin-bottom: 2rem;
}

.digital-marketing .lets-talk-digital-marketing ul li::before {
  content: "+";
  color: #0de9f6;
  margin-right: 1rem;
}

.digital-marketing .lets-talk-digital-marketing p {
  font-family: "Abel";
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 210%;
  color: #6f6f6f;
  /* margin-top: 7rem; */
}
</style>