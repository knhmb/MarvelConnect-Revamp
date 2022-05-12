<template>
  <section class="work-together">
    <base-container>
      <img class="circular" src="../../assets/Subtract.png" alt="" />
      <img class="dotted" src="../../assets/Group-79.png" alt="" />
      <p>WORK TOGETHER</p>
      <h4>
        YOU HAVE A VISION, <br />
        WE HAVE A WAY TO GET YOU THERE.
      </h4>
      <div @click="$router.push('/contact')" class="btn-content">
        <div class="btn"></div>
        <span>LET’S TALK</span>
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
  padding: 5rem 0;
  background: url("../../assets/Rectangle-60.png");
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  /* height: 100vh; */
  overflow: hidden;
}

.work-together img.circular {
  position: absolute;
  height: 100%;
  /* width: 100%; */
  /* object-fit: contain; */
  right: 6rem;
  bottom: 2rem;
}

.work-together .dotted {
  position: absolute;
  width: 10%;
  right: 10rem;
  top: 30%;
}

.work-together p {
  font-family: "Abel";
  font-style: normal;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 135%;
  letter-spacing: 0.58em;
  color: #ffffff;
  margin-bottom: 3rem;
}

.work-together h4 {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 2.8125rem;
  line-height: 200%;
  letter-spacing: 0.02em;
  color: #ffffff;
  margin-bottom: 11rem;
}

.work-together .btn-content {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-align: center;
  position: relative;
}
.work-together .btn-content .btn {
  width: 2.8125rem;
  height: 2.8125rem;
  border-radius: 50%;
  background: rgba(255, 250, 250, 0.5);
  display: inline-block;
  cursor: pointer;
}

.work-together .btn-content span {
  margin-left: -2.0625rem;
  font-family: "Abel";
  font-style: normal;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1rem;
  letter-spacing: 0.24em;
  color: #ffffff;
  /* align-self: flex-end; */
  margin-top: 0.7rem;
}

.work-together .btn-content .el-icon {
  color: #fff;
  margin-left: 1rem;
  font-size: 0.625rem;
  margin-top: 0.6rem;
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