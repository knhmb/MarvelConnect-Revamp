<template>
  <section class="contact-form">
    <el-form
      :rules="rules"
      id="form-contact"
      :model="ruleForm"
      ref="ruleFormRef"
    >
      <el-row>
        <el-col>
          <el-form-item prop="companyName">
            <el-input
              v-model="ruleForm.companyName"
              type="text"
              placeholder="Company Name"
            />
          </el-form-item>
          <el-form-item prop="name">
            <el-input
              v-model="ruleForm.name"
              type="text"
              placeholder="Your Name"
            />
          </el-form-item>
          <el-form-item prop="phoneNo">
            <el-input
              v-model="ruleForm.phoneNo"
              type="number"
              placeholder="Phone Number"
            />
          </el-form-item>
          <el-form-item prop="email">
            <el-input
              v-model="ruleForm.email"
              type="email"
              placeholder="Email Address"
            />
          </el-form-item>
          <el-form-item prop="aboutProject">
            <el-input
              v-model="ruleForm.aboutProject"
              type="textarea"
              placeholder="Tell us about your project (Scope, timeline, budget, etc.)"
              rows="6"
            />
          </el-form-item>
        </el-col>
        <el-col>
          <el-button @click="sendEmail"
            >Submit <el-icon><plus /></el-icon
          ></el-button>
        </el-col>
      </el-row>
    </el-form>
  </section>
</template>

<script>
import { Plus } from "@element-plus/icons-vue";
import { ElNotification } from "element-plus";
// import { ElNotification } from "element-plus";
import emailjs from "emailjs-com";

export default {
  components: {
    plus: Plus,
  },
  data() {
    return {
      ruleForm: {
        companyName: "",
        name: "",
        phoneNo: "",
        email: "",
        aboutProject: "",
      },
      rules: {
        companyName: [
          {
            required: true,
            message: "Please enter the company name!",
            trigger: "blur",
          },
        ],
        name: [
          {
            required: true,
            message: "Please enter your name!",
            trigger: "blur",
          },
        ],
        phoneNo: [
          {
            required: true,
            message: "Please enter the phone number!",
            trigger: "blur",
          },
        ],
        email: [
          {
            required: true,
            type: "email",
            message: "Please enter your email!",
            trigger: "blur",
          },
        ],
        aboutProject: [
          {
            required: true,
            message: "Please tell us about your project",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    sendEmail() {
      // const data = {
      //   companyName: this.ruleForm.companyName,
      //   yourName: this.ruleForm.name,
      //   phoneNumber: this.ruleForm.phoneNo,
      //   emailAddress: this.ruleForm.email,
      //   aboutProject: this.ruleForm.aboutProject,
      // };
      // const form = document.getElementById("form-contact");
      const serviceID = "service_9vk0fo8";
      const templateID = "template_c5jcreh";
      const publicKey = "JABQ6WOts-ZSKubNN";

      this.$refs.ruleFormRef.validate((valid) => {
        if (valid) {
          emailjs
            .send(
              serviceID,
              templateID,
              {
                companyName: this.ruleForm.companyName,
                yourName: this.ruleForm.name,
                phoneNumber: this.ruleForm.phoneNo,
                emailAddress: this.ruleForm.email,
                aboutProject: this.ruleForm.aboutProject,
              },
              publicKey
            )
            .then(
              () => {
                ElNotification({
                  title: "Success",
                  message: "Email sent successfully!",
                  type: "success",
                });
                this.resetFields();
              },
              (err) => {
                console.log(JSON.stringify(err));
                ElNotification({
                  title: "Error",
                  message: "An error occurred. Please try again later!",
                  type: "error",
                });
              }
            );
        }
      });
    },
    resetFields() {
      this.ruleForm.name = "";
      this.ruleForm.companyName = "";
      this.ruleForm.phoneNo = "";
      this.ruleForm.aboutProject = "";
      this.ruleForm.email = "";
    },
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