<template>
  <section class="work-together">
    <base-container>
      <img src="../../assets/Subtract.png" alt="" />
      <p>WORK TOGETHER</p>
      <h4>
        YOU HAVE A VISION, <br />
        WE HAVE A WAY TO GET YOU THERE.
      </h4>
      <div class="btn-content">
        <div class="btn"></div>
        <span>LET’S TALK</span>
        <el-icon><plus /></el-icon>
      </div>
    </base-container>
  </section>
</template>

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

.work-together img {
  position: absolute;
  height: 100%;
  /* width: 100%; */
  /* object-fit: contain; */
  right: 6rem;
  bottom: 2rem;
}

.work-together p {
  font-family: "Abel";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 135%;
  letter-spacing: 0.58em;
  color: #ffffff;
  margin-bottom: 3rem;
}

.work-together h4 {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 45px;
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
}
.work-together .btn-content .btn {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: rgba(255, 250, 250, 0.5);
  display: inline-block;
}

.work-together .btn-content span {
  margin-left: -33px;
  font-family: "Abel";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.24em;
  color: #ffffff;
  /* align-self: flex-end; */
  margin-top: 0.7rem;
}

.work-together .btn-content .el-icon {
  color: #fff;
  margin-left: 1rem;
  font-size: 10px;
}
</style>