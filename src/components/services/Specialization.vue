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
            <li>Website and App Development</li>
            <li>Artificial Intelligence (AI) and machine learning</li>
            <li>Internet of Things (IoT)</li>
            <li>Media</li>
            <li>Digital Marketing</li>
            <li>Translation and Press Release Writing</li>
          </ul>
        </el-col>
        <el-col class="hidden-lg-and-up">
          <ul>
            <li>Website and App Development</li>
            <li>Artificial Intelligence (AI) and machine learning</li>
            <li>Internet of Things (IoT)</li>
            <li>Media</li>
            <li>Digital Marketing</li>
            <li>Translation and Press Release Writing</li>
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
  font-size: 50px;
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
  font-size: 26px;
  line-height: 36px;
  color: #111111;
  margin-top: 1.5rem;
  display: flex;
  align-items: center;
}

.services .specialization li::before {
  content: "+";
  font-size: 1rem;
  margin-right: 0.5rem;
  color: #12bbc6;
}

@media screen and (max-width: 1193px) {
  .services .specialization h4 {
    font-size: 40px;
    width: 100%;
  }

  .services .specialization li {
    font-size: 16px;
  }
}
</style>