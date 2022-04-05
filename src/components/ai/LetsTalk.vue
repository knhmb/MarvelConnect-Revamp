<template>
  <section class="blog">
    <base-container>
      <el-row>
        <el-col :sm="24" :md="8">
          <ul>
            <li>User behavior analysis</li>
            <li>User behavior prediction</li>
            <li>Face/Object recognition</li>
            <li>Enhance user experience</li>
          </ul>
        </el-col>

        <el-col :sm="24" :md="16">
          <p>
            Case study: Watch retailer with over 50 years of experience Each
            tourbillon watch has a story behind it, just like human souls, it
            not only provides accurate timing but also serves as a precious
            collection piece. As a well-known brand in the watches industry, the
            company pays attention to both sales and innovation. However, in the
            process of innovation, how to preserve the traditional spirit is
            both a question for the retailers and for the developers.
          </p>
          <p>
            In order to preserve the tradition, Marvelconnect introduced a new
            AI technology. The display was developed with the assistance of AI
            technology and machine learning and was able to identify the gender,
            age, and facial expression of customers. The system created
            tailor-made scenarios to attract different types of customers.
          </p>
        </el-col>
        <el-col>
          <base-button :mode="'bold'">LET’S TALK</base-button>
        </el-col>
      </el-row>
    </base-container>
  </section>
</template>

<style scoped>
.ai .blog {
  padding: 5rem 0;
  background: #e6e6e6;
}

.ai .blog ul {
  list-style: none;
}

.ai .blog li {
  font-family: "Abel";
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 36px;
  color: #111111;
  margin-bottom: 2rem;
}

.ai .blog li::before {
  content: "+";
  color: #0de9f6;
  margin-right: 1rem;
}

.ai .blog p {
  font-family: "Abel";
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 210%;
  color: #6f6f6f;
  margin-bottom: 2rem;
}

.ai .blog p:first-of-type {
  margin-top: 7rem;
}

.ai .blog .el-col:last-of-type {
  display: flex;
  justify-content: center;
  margin: 6rem 0;
}

@media screen and (max-width: 991px) {
  .ai .blog p:first-of-type {
    margin-top: 0;
  }
}
</style>