<template>
  <div class="btn-content">
    <div class="btn"></div>
    <span><slot></slot></span>
    <el-icon><plus /></el-icon>
  </div>
</template>

<script>
import { Plus } from "@element-plus/icons-vue";

export default {
  components: {
    plus: Plus,
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
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.05);
  display: inline-block;
}

.btn-content span {
  margin-left: -33px;
  font-family: "Abel";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.24em;
  color: #111;
}

.btn-content .el-icon {
  color: #111;
  /* margin-left: 1rem; */
  font-size: 10px;
  /* background: #fff; */
  width: 45px;
  height: 45px;
  border-radius: 50%;
}

@media screen and (max-width: 900px) {
  .btn-content span {
    font-size: 9px;
  }
}
</style>