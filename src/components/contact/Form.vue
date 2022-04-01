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
.contact-form .el-form .el-form-item .el-input__inner,
.contact-form .el-form .el-form-item .el-textarea__inner {
  background: #f2f2f2;
  padding: 24px;
  border-radius: 2px;
  box-shadow: none;
  /* border-color: red !important; */
}

.contact-form .el-button {
  background: #1f1e1d;
  border-radius: 100px;
  font-family: "Abel";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 140%;
  letter-spacing: 0.25em;
  color: #ffffff;
  display: flex;
  align-items: center;
  margin-top: 2rem;
}

.contact-form .el-button .el-icon {
  margin-left: 1rem;
  color: #fff;
}
</style>