<template>
  <section class="blog">
    <base-container>
      <el-row justify="space-between">
        <el-col :sm="24" :md="8">
          <ul>
            <li>User behavior analysis</li>
            <li>User behavior prediction</li>
            <li>Face/Object recognition</li>
            <li>Enhance user experience</li>
          </ul>
        </el-col>

        <el-col :sm="24" :md="15">
          <img
            src="../../assets/smartphone-artificial-intelligence-futuristic-com-2021-12-09-21-02-19-utc-1.png"
            alt=""
          />
          <p>
            With experience in the AI development area, Marvelconnect with deep
            expertise in machine learning, deep learning, NLP, conversational
            AI, computer vision technologies, and neural networks. The most
            advanced companies understand that AI is the bridge to convert new
            kinds of data into business value for a better quantity and quality.
            Let's work together to make your organization future-proof with
            cutting-edge AI solutions.
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
  font-size: 1.75rem;
  line-height: 2.25rem;
  color: #111111;
  margin: 2rem 0;
}

.ai .blog li::before {
  content: "+";
  color: #0de9f6;
  margin-right: 1rem;
}

.ai .blog img {
  width: 100%;
}

.ai .blog p {
  font-family: "Abel";
  font-style: normal;
  font-weight: 400;
  font-size: 1.75rem;
  line-height: 210%;
  color: #6f6f6f;
  margin-bottom: 2rem;
}

.ai .blog p:first-of-type {
  margin-top: 2rem;
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

@media screen and (max-width: 600px) {
  .ai .blog ul li {
    font-size: 3rem;
    line-height: 4rem;
  }

  .ai .blog p {
    font-size: 3rem;
  }
}
</style>