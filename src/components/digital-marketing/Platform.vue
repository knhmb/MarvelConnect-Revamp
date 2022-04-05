<template>
  <section class="platform">
    <base-container>
      <el-row :gutter="50">
        <el-col :sm="24" :md="13">
          <img src="../../assets/unsplash_4vrZpOo7fTc-1.png" alt="" />
        </el-col>
        <el-col :sm="24" :md="11">
          <ul>
            <li>E-commerce</li>
            <li>Platform activation</li>
            <li>Tmall setup and operations</li>
            <li>Native e-commerce builds</li>
            <li>Additional platforms</li>
            <li>JD setup and operations</li>
            <li>Brand protection</li>
          </ul>
        </el-col>
        <el-col>
          <img
            class="web"
            src="../../assets/unsplash_PGdW_bHDbpI-2.png"
            alt=""
          />
        </el-col>
      </el-row>
    </base-container>
  </section>
  <section class="lets-talk">
    <base-container>
      <base-button :mode="'bold'">LET’S TALK</base-button>
    </base-container>
  </section>
</template>

<style scoped>
.platform {
  background: #fff;
  padding: 3rem 0 6rem 0;
}

.platform .el-row {
  align-items: center;
}

.platform img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.platform ul {
  list-style: none;
}

.platform ul li {
  font-family: "Abel";
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 210%;
  color: #6f6f6f;
  margin-bottom: 0.5rem;
}

.platform img.web {
  margin: 3rem 0;
}

.lets-talk {
  padding: 3rem 0;
  background: #e6e6e6;
  display: flex;
  justify-content: center;
}
</style>