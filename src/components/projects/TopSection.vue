<template>
  <div class="top-section">
    <base-container>
      <el-row>
        <el-col>
          <p class="case-study">CASE STUDIES</p>
        </el-col>
        <el-col :sm="24" :md="12">
          <h4>Some of our finest work.</h4>
        </el-col>
        <el-col :sm="24" :md="12">
          <p>Solving diverse business needs through great design and UX.</p>
        </el-col>
      </el-row>
    </base-container>
  </div>
</template>

<style scoped>
.projects .top-section p.case-study {
  font-family: "Abel";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 135%;
  letter-spacing: 0.58em;
  color: #00559a;
  margin-bottom: 2rem;
}

.projects .top-section h4 {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 70px;
  line-height: 90px;
  letter-spacing: -0.005em;
  color: #111111;
  width: 100%;
  margin-left: 1rem;
}

.projects .top-section .el-row .el-col:nth-child(3) {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
}

.projects .top-section .el-row .el-col:nth-child(3) p {
  font-family: "Abel";
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 190%;
  letter-spacing: 0.02em;
  color: #6f6f6f;
  width: 50%;
}
</style>