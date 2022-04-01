<template>
  <section class="contact-top-section">
    <the-header></the-header>
    <base-container>
      <h4>
        Hi. Tell us about <br />
        your project.
      </h4>
      <p>Fill out our form below or <a href="">send us an email.</a></p>
      <el-row :gutter="40">
        <el-col :sm="24" :md="12">
          <Form />
        </el-col>
        <el-col :sm="24" :md="12">
          <img src="../../assets/unsplash_EcELKgw7NwM.png" alt="" />
        </el-col>
      </el-row>
    </base-container>
  </section>
</template>

<script>
import Form from "./Form.vue";
import TheHeader from "../common/TheHeader.vue";

export default {
  components: {
    Form,
    TheHeader,
  },
};
</script>

<style scoped>
.contact-us .contact-top-section {
  /* padding: 1rem 0; */
  padding-bottom: 3rem;
  background: #e6e6e6;
}

.contact-us .contact-top-section h4 {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 53px;
  line-height: 121%;
  color: #111111;
  margin-top: 4rem;
  margin-bottom: 2rem;
}

.contact-us .contact-top-section p {
  font-family: "Abel";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 36px;
  letter-spacing: 0.018em;
  color: #111111;
}

.contact-us .contact-top-section p a {
  color: #3c91d6;
  text-decoration: none;
}

.contact-us .contact-top-section .el-row {
  margin-top: 3rem;
  align-items: center;
}

.contact-us .contact-top-section img {
  width: 100%;
}
</style>