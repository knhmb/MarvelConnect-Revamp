<template>
  <section class="work-process">
    <base-container>
      <el-row>
        <el-col>
          <h4>Work Process</h4>
        </el-col>
        <el-col :span="6">
          <img src="../../assets/Group-81.png" alt="" />
        </el-col>
        <el-col>
          <img class="img-process" src="../../assets/image-12.png" alt="" />
        </el-col>
      </el-row>
    </base-container>
  </section>
</template>

<style scoped>
.work-process {
  background: #e5e5e5;
  padding: 6rem 0;
}
.work-process h4 {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 3.125rem;
  line-height: 5.625rem;
  letter-spacing: -0.005em;
  color: #111111;
  margin-left: 2rem;
}

.work-process img {
  width: 100%;
  display: block;
  margin-left: 2rem;
}

.work-process img.img-process {
  width: 100%;
  margin-left: 0;
}

@media screen and (max-width: 750px) {
  .work-process h4 {
    font-size: 5rem;
    line-height: 5.625rem;
  }
}
</style>