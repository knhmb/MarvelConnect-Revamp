<template>
  <section class="specialization">
    <base-container>
      <el-row>
        <el-col>
          <h4>
            We are specialized in innovative technology and provides various
            services.
          </h4>
        </el-col>
        <el-col class="hidden-md-and-down" :span="12" :offset="12">
          <ul>
            <li @click="$router.push('/web-n-app')">
              Website and App Development
            </li>
            <li @click="$router.push('/artificial-intelligence')">
              Artificial Intelligence (AI) and machine learning
            </li>
            <li @click="$router.push('/internet-of-things')">
              Internet of Things (IoT)
            </li>
            <li @click="$router.push('/media')">Media</li>
            <li @click="$router.push('/digital-marketing')">
              Digital Marketing
            </li>
            <li @click="$router.push('/writing')">
              Translation and Press Release Writing
            </li>
          </ul>
        </el-col>
        <el-col class="hidden-lg-and-up">
          <ul>
            <li @click="$router.push('/web-n-app')">
              Website and App Development
            </li>
            <li @click="$router.push('/artificial-intelligence')">
              Artificial Intelligence (AI) and machine learning
            </li>
            <li @click="$router.push('/internet-of-things')">
              Internet of Things (IoT)
            </li>
            <li @click="$router.push('/media')">Media</li>
            <li @click="$router.push('/digital-marketing')">
              Digital Marketing
            </li>
            <li @click="$router.push('/writing')">
              Translation and Press Release Writing
            </li>
          </ul>
        </el-col>
      </el-row>
    </base-container>
  </section>
</template>

<style scoped>
.services .specialization {
  padding: 3rem 0;
}

.services .specialization h4 {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 3.125rem;
  /* line-height: 90px; */
  letter-spacing: -0.005em;
  color: #111111;
  width: 50%;
  margin-top: 4rem;
  margin-bottom: 1.5rem;
}

.services .specialization ul {
  list-style: none;
}

.services .specialization li {
  font-family: "Abel";
  font-style: normal;
  font-weight: 400;
  font-size: 1.625rem;
  line-height: 2.25rem;
  color: #111111;
  margin-top: 1.5rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: padding 0.3s ease-out;
}

.services .specialization li:hover {
  padding-left: 1rem;
}

.services .specialization li::before {
  content: "+";
  font-size: 1rem;
  margin-right: 0.5rem;
  color: #12bbc6;
}

@media screen and (max-width: 1199px) {
  .services .specialization h4 {
    width: 100%;
  }
}

@media screen and (max-width: 600px) {
  .services .specialization h4 {
    font-size: 4rem;
  }

  .services .specialization li {
    font-size: 2rem;
  }

  .services .specialization li::before {
    content: "+";
    font-size: 1.5rem;
  }
}

/* @media screen and (max-width: 1193px) {
  .services .specialization h4 {
    font-size: 40px;
    width: 100%;
  }

  .services .specialization li {
    font-size: 16px;
  }
} */
</style>