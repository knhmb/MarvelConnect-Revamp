<template>
  <section class="our-mission">
    <!-- <base-container> -->
    <el-row justify="space-between">
      <el-col :sm="24" :md="12">
        <h4>
          Our Mission and <br />
          Vision.
        </h4>

        <img
          src="../../assets/asia-businessmen-and-businesswomen-fist-bumping-ce-2021-09-01-12-09-58-utc-1.png"
          alt=""
        />
        <div style="text-align: center">
          <img class="dots" src="../../assets/Group-79.png" alt="" />
        </div>
      </el-col>
      <el-col :sm="24" :md="10">
        <ul>
          <li>
            <h5>Thousands of Customers</h5>
            <p>
              We have always helped thousands of customers develop their
              representative programming design.
            </p>
          </li>
          <li>
            <h5>Local Team with Best Products</h5>
            <p>
              Our development experts provide a tailor-made solution to our
              customers.
            </p>
          </li>
          <li>
            <h5>Solutions from Customer’s View</h5>
            <p>
              Our experts in our development team help our customers solve the
              problem and find the best solution.
            </p>
          </li>
          <li>
            <h5>Five Star Service</h5>
            <p>
              Excellent customer service is the surest way to greater success
              for your organization. We make sure you realize value fast. We
              guarantee that we will be at your service whenever you encounter
              problems
            </p>
          </li>
        </ul>
      </el-col>
    </el-row>

    <div class="circle"></div>
    <!-- </base-container> -->
  </section>
</template>

<style scoped>
.our-mission {
  padding: 7rem 0;
  position: relative;
  background: #f7f7f7;
  /* background-image: url("../../assets/Ellipse-20-1.png");
  background-repeat: no-repeat;
  background-size: 57%;
  background-position: center; */
}

.our-mission .el-row {
  /* align-items: center; */
}

.our-mission .el-row .el-col:nth-of-type(2) {
  padding-right: 2rem;
}

.circle {
  position: relative;
}

.our-mission h4 {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 3.125rem;
  line-height: 5.625rem;
  letter-spacing: -0.005em;
  color: #111111;
  padding-left: 10rem;
  margin-bottom: 3rem;
}

.our-mission img {
  width: 100%;
}

.our-mission img.dots {
  margin-top: 2em;
  width: 50%;
  height: 100%;
  object-fit: contain;
}

.our-mission ul {
  list-style-type: none;
  margin-top: 9rem;
}

.our-mission ul li {
  margin-bottom: 2rem;
}

.our-mission ul li h5 {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 140%;
  letter-spacing: -0.005em;
  color: #111111;
  margin-bottom: 1rem;
}

.our-mission ul li p {
  font-family: "Abel";
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 210%;
  color: #6f6f6f;
}

@media screen and (max-width: 1199px) {
  .our-mission ul {
    margin-top: 3rem;
  }
}

@media screen and (max-width: 991px) {
  .our-mission .el-row .el-col:nth-of-type(2) {
    text-align: center;
    padding-left: 2rem;
  }

  .our-mission img.dots {
    margin: 3rem 0;
  }
}

@media screen and (max-width: 750px) {
  .our-mission h4 {
    font-size: 6rem;
    line-height: 5.625rem;
  }

  .our-mission ul li h5 {
    font-size: 3rem;
  }

  .our-mission ul li p {
    font-size: 2rem;
  }
}
</style>