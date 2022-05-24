<template>
  <section class="lets-talk-writing">
    <base-container>
      <el-row justify="space-between">
        <el-col :sm="24" :md="10">
          <ul>
            <li>SEO Writing/translation</li>
            <li>Document translation</li>
            <li>Article writing and online publishing</li>
            <li>Editing and Proofreading</li>
            <li>Press Release Writing for Product</li>
          </ul>
        </el-col>
        <el-col :sm="24" :md="13">
          <img
            src="../../assets/businesswoman-hands-writing-to-notebook-at-office-2021-08-26-22-49-03-utc-1.png"
            alt=""
          />
          <p>
            Marvelconnect has many years of writing and editing experience and
            received support and trust from many clients. We have provided over
            6 million words of content to listed companies, PR agencies, Forbes
            500 companies, and local companies. Apart from writing,
            Marvelconnect also provides strategic advice to the content
            direction as well as proofreading.
          </p>
        </el-col>
        <el-col>
          <base-button @click="$router.push('/contact')" centered :mode="'bold'"
            >LET’S TALK</base-button
          >
        </el-col>
      </el-row>
    </base-container>
  </section>
</template>

<style scoped>
.writing .lets-talk-writing {
  padding: 3rem 0;
  background: #e6e6e6;
}

.writing .lets-talk-writing ul {
  list-style-type: none;
}

.writing .lets-talk-writing ul li {
  font-family: "Abel";
  font-style: normal;
  font-weight: 400;
  font-size: 1.75rem;
  line-height: 2.25rem;
  color: #111111;
  margin-bottom: 2rem;
}

.writing .lets-talk-writing ul li::before {
  content: "+";
  color: #0de9f6;
  margin-right: 1rem;
}

.writing .lets-talk-writing img {
  width: 100%;
}

.writing .lets-talk-writing p {
  font-family: "Abel";
  font-style: normal;
  font-weight: 400;
  font-size: 1.75rem;
  line-height: 210%;
  color: #6f6f6f;
  margin-top: 3rem;
}

.writing .lets-talk-writing .el-col:nth-of-type(3) {
  display: flex;
  justify-content: center;
  margin: 6rem 0;
}

@media screen and (max-width: 600px) {
  .writing .lets-talk-writing ul li {
    font-size: 3rem;
    line-height: 4rem;
  }

  .writing .lets-talk-writing p {
    font-size: 3rem;
  }
}
</style>