<template>
  <section class="partners">
    <base-container>
      <h4>Some of our partners</h4>
      <el-row :gutter="60">
        <el-col :sm="24" :md="12" :lg="8">
          <img src="../../assets/logo01.png" alt="" />
        </el-col>
        <el-col :sm="24" :md="12" :lg="8">
          <img src="../../assets/logo05.png" alt="" />
        </el-col>
        <el-col :sm="24" :md="12" :lg="8">
          <img src="../../assets/logo09.png" alt="" />
        </el-col>
        <el-col :sm="24" :md="12" :lg="8">
          <img src="../../assets/logo02.png" alt="" />
        </el-col>
        <el-col :sm="24" :md="12" :lg="8">
          <img src="../../assets/logo06.png" alt="" />
        </el-col>
        <el-col :sm="24" :md="12" :lg="8">
          <img src="../../assets/logo10.png" alt="" />
        </el-col>
        <el-col :sm="24" :md="12" :lg="8">
          <img src="../../assets/logo03.png" alt="" />
        </el-col>
        <el-col :sm="24" :md="12" :lg="8">
          <img src="../../assets/logo07.png" alt="" />
        </el-col>
        <el-col :sm="24" :md="12" :lg="8">
          <img src="../../assets/logo11.png" alt="" />
        </el-col>
        <el-col :sm="24" :md="12" :lg="8">
          <img src="../../assets/logo04.png" alt="" />
        </el-col>
        <el-col :sm="24" :md="12" :lg="8">
          <img src="../../assets/logo08.png" alt="" />
        </el-col>
        <el-col :sm="24" :md="12" :lg="8">
          <img src="../../assets/logo12.png" alt="" />
        </el-col>
      </el-row>
    </base-container>
  </section>
</template>

<style scoped>
.services .partners {
  padding: 3rem 0;
  background-color: #c4c4c4;
}

.services .partners .el-row {
  align-items: center;
}

.services .partners .el-col {
  margin-bottom: 4rem;
}

.services .partners h4 {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 3.125rem;
  line-height: 5.625rem;
  text-align: center;
  letter-spacing: -0.005em;
  color: #111111;
  margin-bottom: 3rem;
}

.services .partners img {
  width: 100%;
  /* height: 100%;
  object-fit: contain; */
}

@media screen and (max-width: 600px) {
  .services .partners h4 {
    font-size: 5rem;
  }
}
</style>