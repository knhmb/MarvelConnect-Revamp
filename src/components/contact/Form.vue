<template>
  <section class="contact-form">
    <el-form>
      <el-row>
        <el-col>
          <el-form-item>
            <el-input type="text" placeholder="Compnay Name" />
          </el-form-item>
          <el-form-item>
            <el-input type="text" placeholder="Your Name" />
          </el-form-item>
          <el-form-item>
            <el-input type="number" placeholder="Phone Number" />
          </el-form-item>
          <el-form-item>
            <el-input type="email" placeholder="Email Address" />
          </el-form-item>
          <el-form-item>
            <el-input
              type="textarea"
              placeholder="Tell us about your project (Scope, timeline, budget, etc.)"
              rows="6"
            />
          </el-form-item>
        </el-col>
        <el-col>
          <el-button
            >Submit <el-icon><plus /></el-icon
          ></el-button>
        </el-col>
      </el-row>
    </el-form>
  </section>
</template>

<script>
import { Plus } from "@element-plus/icons-vue";

export default {
  components: {
    plus: Plus,
  },
};
</script>

<style>
.contact-form .el-form .el-form-item {
  margin-bottom: 1.125rem;
}

.contact-form .el-form .el-form-item .el-input__inner,
.contact-form .el-form .el-form-item .el-textarea__inner {
  background: #f2f2f2;
  padding: 1.5rem;
  border-radius: 0.125rem;
  box-shadow: none;
  font-family: "Abel";
  /* border-color: red !important; */
}

.contact-form .el-form .el-form-item .el-input__inner {
  height: 2rem;
  line-height: 2rem;
}

.contact-form .el-form .el-form-item .el-input__inner::placeholder,
.contact-form .el-form .el-form-item .el-textarea__inner::placeholder {
  font-family: "Abel";
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 2.25rem;
  letter-spacing: 0.018em;

  color: #808080;
}

.contact-form .el-button {
  background: #1f1e1d;
  border-radius: 6.25rem;
  font-family: "Abel";
  font-style: normal;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 140%;
  letter-spacing: 0.25em;
  color: #ffffff;
  display: flex;
  align-items: center;
  margin-top: 2rem;
  height: 2rem;
  padding: 0.5rem 0.9375rem;
}

.contact-form .el-button .el-icon {
  margin-left: 1rem;
  color: #fff;
}

.contact-form .el-form .el-form-item .el-input__wrapper {
  padding: 0;
}

@media screen and (max-width: 750px) {
  .contact-form .el-form .el-form-item .el-input__inner::placeholder,
  .contact-form .el-form .el-form-item .el-textarea__inner::placeholder {
    font-size: 2rem;
  }

  .contact-form .el-form .el-form-item .el-input__inner {
    height: 5rem;
    line-height: 5rem;
  }

  .contact-form .el-button {
    font-size: 1.5rem;
    padding: 2rem 3rem 3rem 3rem;
  }
}
</style>