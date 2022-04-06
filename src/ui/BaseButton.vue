<template>
  <div class="btn-content">
    <div class="btn"></div>
    <span :class="mode"><slot></slot></span>
    <el-icon><plus /></el-icon>
  </div>
</template>

<script>
import { Plus } from "@element-plus/icons-vue";

export default {
  props: {
    mode: {
      type: String,
      required: false,
      default: null,
    },
  },
  components: {
    plus: Plus,
  },
  created() {
    console.log(this.mode);
  },
};
</script>

<style scoped>
.btn-content {
  display: flex;
  align-items: center;
  cursor: pointer;
  width: fit-content;
}
.btn-content .btn {
  width: 2.8125rem;
  height: 2.8125rem;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.05);
  display: inline-block;
}

.btn-content span {
  margin-left: -2.0625rem;
  font-family: "Abel";
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1rem;
  letter-spacing: 0.24em;
  color: #111;
}

.btn-content .el-icon {
  color: #111;
  /* margin-left: 1rem; */
  font-size: 0.7rem;
  width: 2rem;
  height: 2rem;
  /* font-size: 0.625rem; */
  /* background: #fff; */

  border-radius: 50%;
}

.btn-content .bold {
  font-weight: 700;
  font-family: Montserrat;
}

/* @media screen and (max-width: 900px) {
  .btn-content span {
    font-size: 9px;
  }
} */
</style>