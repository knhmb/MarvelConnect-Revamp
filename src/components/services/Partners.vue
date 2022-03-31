<template>
  <section class="partners">
    <base-container>
      <h4>Some of our partners</h4>
      <el-row :gutter="60">
        <el-col :sm="24" :md="12" :lg="8">
          <img src="../../assets/pngwing-1.png" alt="" />
        </el-col>
        <el-col :sm="24" :md="12" :lg="8">
          <img src="../../assets/pngfind-1.png" alt="" />
        </el-col>
        <el-col :sm="24" :md="12" :lg="8">
          <img src="../../assets/Daco_5607561-1.png" alt="" />
        </el-col>
        <el-col :sm="24" :md="12" :lg="8">
          <img src="../../assets/image-17.png" alt="" />
        </el-col>
        <el-col :sm="24" :md="12" :lg="8">
          <img src="../../assets/image-15.png" alt="" />
        </el-col>
        <el-col :sm="24" :md="12" :lg="8">
          <img src="../../assets/image-16-1.png" alt="" />
        </el-col>
        <el-col :sm="24" :md="12" :lg="8">
          <img src="../../assets/HKU-removebg-preview-1.png" alt="" />
        </el-col>
        <el-col :sm="24" :md="12" :lg="8">
          <img src="../../assets/image-18.png" alt="" />
        </el-col>
        <el-col :sm="24" :md="12" :lg="8">
          <img src="../../assets/image-20.png" alt="" />
        </el-col>
        <el-col :sm="24" :md="12" :lg="8">
          <img src="../../assets/image-19.png" alt="" />
        </el-col>
        <el-col :sm="24" :md="12" :lg="8">
          <img src="../../assets/image-21.png" alt="" />
        </el-col>
        <el-col :sm="24" :md="12" :lg="8">
          <img src="../../assets/image-22.png" alt="" />
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
  font-size: 50px;
  line-height: 90px;
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
</style>