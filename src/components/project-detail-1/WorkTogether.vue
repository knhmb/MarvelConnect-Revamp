<template>
  <section class="work-together">
    <img class="circular" src="../../assets/Subtract-1.png" alt="" />
    <img class="dotted" src="../../assets/Group-79.png" alt="" />
    <base-container>
      <p>WORK WITH US</p>
      <h4>Let’s work together to build something great.</h4>
      <div class="btn-content">
        <div class="btn"></div>
        <span :class="mode">View More Work</span>
        <el-icon><plus /></el-icon>
      </div>
    </base-container>
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

<style scoped>
.work-together {
  background: #00559a;
  padding: 3rem 0;
  position: relative;
  overflow: hidden;
}

.work-together img.circular {
  position: absolute;
  height: 95%;
  right: 0rem;
  top: 0rem;
  /* bottom: 2rem; */
}

.work-together .dotted {
  position: absolute;
  width: 10%;
  right: 18rem;
  top: 50%;
}

.work-together p {
  font-family: "Abel";
  font-style: normal;
  font-weight: 400;
  font-size: 1.125rem;
  line-height: 135%;
  letter-spacing: 0.58em;
  color: #ffffff;
}

.work-together h4 {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 3.375rem;
  line-height: 4.375rem;
  letter-spacing: 0.01em;
  color: #ffffff;
  margin: 3rem 0;
  margin-left: 2rem;
  width: 70%;
}

.btn-content {
  display: flex;
  align-items: center;
  cursor: pointer;
  width: fit-content;
  margin-left: 2rem;
}
.btn-content .btn {
  width: 2.8125rem;
  height: 2.8125rem;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.15);
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
  color: #fff;
}

.btn-content .el-icon {
  color: #fff;
  font-size: 0.7rem;
  width: 2rem;
  height: 2rem;

  border-radius: 50%;
}

@media screen and (max-width: 600px) {
  .work-together p {
    font-size: 2.5rem;
  }

  .work-together h4 {
    font-size: 4rem;
  }

  .work-together .btn-content .btn {
    width: 4rem;
    height: 4rem;
  }

  .work-together .btn-content span {
    font-size: 2rem;
    line-height: 1rem;
  }

  .work-together .btn-content .el-icon {
    font-size: 1.3rem;
  }
}
</style>